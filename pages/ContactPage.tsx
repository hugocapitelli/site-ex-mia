import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Language } from '../types';
import { translations } from '../translations';
import { getConfig } from '../config';

interface ContactPageProps {
  lang: Language;
}

const validateField = (field: string, value: string): string => {
  switch (field) {
    case 'name':
      if (!value.trim()) return 'Name is required';
      if (value.trim().length < 2) return 'Name must be at least 2 characters';
      if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(value)) return 'Name must contain only letters and spaces';
      return '';
    case 'email':
      if (!value.trim()) return 'Email is required';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email';
      return '';
    case 'phone':
      if (value && !/^[\d\s\+\-\(\)]{10,20}$/.test(value)) return 'Please enter a valid phone number';
      return '';
    case 'message':
      if (!value.trim()) return 'Message is required';
      if (value.trim().length < 10) return 'Message must be at least 10 characters';
      return '';
    default:
      return '';
  }
};

export const ContactPage: React.FC<ContactPageProps> = ({ lang }) => {
  const t = translations[lang].contact;
  const config = getConfig();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'general',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formState[field as keyof typeof formState]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (field: string, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const isFormValid = () => {
    const requiredFields = ['name', 'email', 'message'];
    return (
      requiredFields.every((f) => {
        const val = formState[f as keyof typeof formState];
        return val.trim() && !validateField(f, val);
      }) && !validateField('phone', formState.phone)
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const allTouched: Record<string, boolean> = {};
    const allErrors: Record<string, string> = {};
    for (const field of ['name', 'email', 'phone', 'message']) {
      allTouched[field] = true;
      allErrors[field] = validateField(field, formState[field as keyof typeof formState]);
    }
    setTouched(allTouched);
    setErrors(allErrors);

    if (Object.values(allErrors).some((e) => e)) return;

    setStatus('sending');

    try {
      await emailjs.send(
        config.emailjsServiceId,
        config.emailjsTemplateId,
        {
          from_name: formState.name,
          from_email: formState.email,
          phone: formState.phone || 'Não informado',
          department: formState.department,
          message: formState.message,
        },
        config.emailjsPublicKey
      );
      setStatus('success');
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
    }
  };

  /* ── SUCCESS STATE ── */
  if (status === 'success') {
    return (
      <div className="bg-bg-core min-h-screen pt-32 pb-20 px-4 md:px-10 flex items-center justify-center">
        <div className="reveal text-center max-w-2xl">
          <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-8">
            <span className="material-symbols-outlined text-accent text-4xl">check_circle</span>
          </div>
          <h1 className="font-serif font-bold text-fluid-h1 text-cream mb-6">{t.successTitle}</h1>
          <p className="text-lg text-cream-dim leading-relaxed mb-12">{t.successDesc}</p>
          <button
            onClick={() => {
              setStatus('idle');
              setFormState({ name: '', email: '', phone: '', department: 'general', message: '' });
              setTouched({});
              setErrors({});
            }}
            className="font-mono text-xs text-accent hover:text-accent-hover underline underline-offset-4 tracking-wider uppercase transition-colors"
          >
            {t.sendAnother}
          </button>
        </div>
      </div>
    );
  }

  /* ── ERROR STATE ── */
  if (status === 'error') {
    return (
      <div className="bg-bg-core min-h-screen pt-32 pb-20 px-4 md:px-10 flex items-center justify-center">
        <div className="reveal text-center max-w-2xl">
          <div className="w-20 h-20 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-8">
            <span className="material-symbols-outlined text-red-400 text-4xl">error</span>
          </div>
          <h1 className="font-serif font-bold text-fluid-h1 text-cream mb-6">{t.errorTitle}</h1>
          <p className="text-lg text-cream-dim leading-relaxed mb-12">
            {t.errorDesc}
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="font-mono text-xs text-accent hover:text-accent-hover underline underline-offset-4 tracking-wider uppercase transition-colors"
          >
            {t.tryAgain}
          </button>
        </div>
      </div>
    );
  }

  /* ── MAIN FORM ── */
  return (
    <div className="bg-bg-core min-h-screen pt-32 pb-20 px-4 md:px-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">

        {/* ── HERO ── */}
        <section className="mb-20 md:mb-28">
          <span className="reveal font-mono text-[10px] text-accent uppercase tracking-[0.2em] block mb-6">
            Contact
          </span>
          <h1 className="reveal reveal-delay-1 font-serif font-bold text-fluid-hero text-cream leading-[0.9] tracking-tight mb-8">
            {t.title}
          </h1>
          <p className="reveal reveal-delay-2 text-cream-dim text-lg md:text-xl leading-relaxed max-w-2xl">
            {t.subtitle}
          </p>
        </section>

        {/* ── FORM ── */}
        <div className="reveal reveal-delay-3 max-w-3xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-10">

            {/* Name & Email */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <label className="font-mono text-[10px] text-dim uppercase tracking-widest">
                  {t.name}
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  onBlur={() => handleBlur('name')}
                  className={`bg-transparent border-b py-3 text-cream focus:outline-none transition-colors ${
                    touched.name && errors.name ? 'border-red-500' : 'border-edge focus:border-accent'
                  }`}
                  placeholder="John Doe"
                />
                {touched.name && errors.name && (
                  <span className="text-red-400 text-xs font-mono">{errors.name}</span>
                )}
              </div>

              <div className="flex flex-col gap-3">
                <label className="font-mono text-[10px] text-dim uppercase tracking-widest">
                  {t.email}
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  onBlur={() => handleBlur('email')}
                  className={`bg-transparent border-b py-3 text-cream focus:outline-none transition-colors ${
                    touched.email && errors.email ? 'border-red-500' : 'border-edge focus:border-accent'
                  }`}
                  placeholder="john@company.com"
                />
                {touched.email && errors.email && (
                  <span className="text-red-400 text-xs font-mono">{errors.email}</span>
                )}
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-3">
              <label className="font-mono text-[10px] text-dim uppercase tracking-widest">
                {t.phone}
                <span className="ml-2 text-edge">({t.optional})</span>
              </label>
              <input
                type="tel"
                value={formState.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                onBlur={() => handleBlur('phone')}
                className={`bg-transparent border-b py-3 text-cream focus:outline-none transition-colors ${
                  touched.phone && errors.phone ? 'border-red-500' : 'border-edge focus:border-accent'
                }`}
                placeholder="+55 (11) 99999-9999"
              />
              {touched.phone && errors.phone && (
                <span className="text-red-400 text-xs font-mono">{errors.phone}</span>
              )}
            </div>

            {/* Department pills */}
            <div className="flex flex-col gap-4">
              <label className="font-mono text-[10px] text-dim uppercase tracking-widest">
                {t.department}
              </label>
              <div className="flex flex-wrap gap-3">
                {[
                  { id: 'general', label: t.departments.general },
                  { id: 'studio', label: t.departments.studio },
                  { id: 'academy', label: t.departments.academy },
                  { id: 'excellence', label: t.departments.excellence },
                ].map((option) => (
                  <button
                    type="button"
                    key={option.id}
                    onClick={() => setFormState({ ...formState, department: option.id })}
                    className={`px-5 py-2.5 rounded-full font-mono text-[11px] tracking-wider border transition-all duration-300 ${
                      formState.department === option.id
                        ? 'bg-accent text-bg-core border-accent font-semibold'
                        : 'text-cream-dim border-edge hover:border-accent/40 hover:text-cream'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-3">
              <label className="font-mono text-[10px] text-dim uppercase tracking-widest">
                {t.message}
              </label>
              <textarea
                rows={5}
                required
                value={formState.message}
                onChange={(e) => handleChange('message', e.target.value)}
                onBlur={() => handleBlur('message')}
                className={`bg-transparent border-b py-3 text-cream focus:outline-none transition-colors resize-none ${
                  touched.message && errors.message ? 'border-red-500' : 'border-edge focus:border-accent'
                }`}
                placeholder="..."
              />
              {touched.message && errors.message && (
                <span className="text-red-400 text-xs font-mono">{errors.message}</span>
              )}
            </div>

            {/* Privacy Notice */}
            <p className="text-[11px] text-dim leading-relaxed flex items-start gap-2">
              <span className="material-symbols-outlined text-sm text-dim mt-0.5">shield</span>
              {t.privacyNotice}
            </p>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={status === 'sending' || !isFormValid()}
                className="inline-flex items-center gap-3 bg-accent text-bg-core px-10 py-4 rounded-full font-semibold hover:bg-accent-hover transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-bg-core border-t-transparent rounded-full animate-spin" />
                    {t.sending}
                  </>
                ) : (
                  <>
                    {t.send}
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* ── ALTERNATIVE CONTACT ── */}
        <div className="reveal reveal-delay-4 max-w-3xl mt-16 grid sm:grid-cols-2 gap-6">
          {/* Schedule */}
          <a
            href={config.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel hover-lift p-8 flex items-start gap-4 group hover:border-accent/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent/20 transition-colors">
              <span className="material-symbols-outlined">calendar_month</span>
            </div>
            <div>
              <h3 className="text-cream font-semibold mb-1">{t.scheduleTitle}</h3>
              <p className="text-cream-dim text-sm leading-relaxed">
                {t.scheduleDesc}
              </p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${config.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel hover-lift p-8 flex items-start gap-4 group hover:border-accent/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent/20 transition-colors">
              <span className="material-symbols-outlined">chat</span>
            </div>
            <div>
              <h3 className="text-cream font-semibold mb-1">{t.whatsappTitle}</h3>
              <p className="text-cream-dim text-sm leading-relaxed">
                {t.whatsappDesc}
              </p>
            </div>
          </a>
        </div>

      </div>
    </div>
  );
};
