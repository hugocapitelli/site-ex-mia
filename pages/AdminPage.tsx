import React, { useState, useEffect, useCallback } from 'react';
import { getConfig, saveConfig, defaultConfig, SiteConfig } from '../config';

const AUTH_KEY = 'eximia-admin-auth';

export const AdminPage: React.FC = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [passcodeError, setPasscodeError] = useState(false);
  const [config, setConfig] = useState<SiteConfig>(defaultConfig);
  const [toast, setToast] = useState<string | null>(null);
  const [newCompany, setNewCompany] = useState('');
  const [confirmCode, setConfirmCode] = useState('');

  // Check sessionStorage on mount
  useEffect(() => {
    const stored = sessionStorage.getItem(AUTH_KEY);
    if (stored === 'true') {
      setAuthenticated(true);
      setConfig(getConfig());
    }
  }, []);

  // Toast auto-dismiss
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 2500);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handlePasscodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const currentConfig = getConfig();
    if (passcode === currentConfig.adminCode) {
      sessionStorage.setItem(AUTH_KEY, 'true');
      setAuthenticated(true);
      setConfig(currentConfig);
      setPasscodeError(false);
    } else {
      setPasscodeError(true);
      setPasscode('');
    }
  };

  const updateField = useCallback(<K extends keyof SiteConfig>(key: K, value: SiteConfig[K]) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  }, []);

  const handleSave = () => {
    saveConfig(config);
    setToast('Configuration saved successfully');
  };

  const handleReset = () => {
    setConfig({ ...defaultConfig });
    saveConfig({ ...defaultConfig });
    setToast('Reset to defaults');
  };

  const addCompany = () => {
    const trimmed = newCompany.trim();
    if (trimmed && !config.logoBarCompanies.includes(trimmed)) {
      updateField('logoBarCompanies', [...config.logoBarCompanies, trimmed]);
      setNewCompany('');
    }
  };

  const removeCompany = (index: number) => {
    updateField('logoBarCompanies', config.logoBarCompanies.filter((_, i) => i !== index));
  };

  /* ── ACCESS GATE ── */
  if (!authenticated) {
    return (
      <div className="bg-bg-core min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-xs text-center">
          {/* Lock Icon */}
          <div className="w-16 h-16 rounded-full border border-edge flex items-center justify-center mx-auto mb-8">
            <span className="material-symbols-outlined text-accent text-2xl">lock</span>
          </div>

          <h1 className="font-serif font-bold text-2xl text-cream mb-2">Admin Access</h1>
          <p className="font-mono text-[10px] text-dim uppercase tracking-widest mb-10">
            Enter access code
          </p>

          <form onSubmit={handlePasscodeSubmit} className="flex flex-col gap-6">
            <input
              type="password"
              maxLength={10}
              value={passcode}
              onChange={(e) => {
                setPasscode(e.target.value);
                setPasscodeError(false);
              }}
              autoFocus
              className={`bg-transparent border rounded-lg px-4 py-4 text-cream text-center text-2xl tracking-[0.5em] font-mono focus:outline-none transition-colors ${
                passcodeError ? 'border-error' : 'border-edge focus:border-accent'
              }`}
              placeholder="****"
            />
            {passcodeError && (
              <p className="text-error text-xs font-mono -mt-2">Invalid access code</p>
            )}
            <button
              type="submit"
              className="bg-accent text-bg-core px-8 py-3 rounded-full font-semibold text-sm hover:bg-accent-hover transition-colors"
            >
              Enter
            </button>
          </form>

          <a
            href="/"
            className="inline-block mt-8 font-mono text-[10px] text-dim hover:text-cream-dim uppercase tracking-widest transition-colors"
          >
            Back to site
          </a>
        </div>
      </div>
    );
  }

  /* ── ADMIN PANEL ── */
  const inputClass = 'bg-transparent border border-edge rounded-lg px-4 py-3 text-cream focus:border-accent focus:outline-none w-full font-mono text-sm transition-colors';
  const labelClass = 'font-mono text-[10px] text-accent uppercase tracking-widest';
  const sectionHeaderClass = 'font-mono text-[10px] text-accent uppercase tracking-widest mb-6';

  return (
    <div className="bg-bg-core min-h-screen">
      {/* Toast */}
      <div
        className={`fixed top-6 right-6 z-50 glass-panel px-6 py-4 flex items-center gap-3 transition-all duration-300 ${
          toast ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <span className="material-symbols-outlined text-success text-lg">check_circle</span>
        <span className="text-cream text-sm font-mono">{toast}</span>
      </div>

      {/* Header */}
      <header className="border-b border-edge px-6 md:px-12 py-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-edge flex items-center justify-center">
              <span className="material-symbols-outlined text-accent text-lg">lock</span>
            </div>
            <div>
              <h1 className="font-serif font-bold text-xl text-cream">Site Configuration</h1>
              <p className="font-mono text-[10px] text-dim uppercase tracking-widest">Admin Panel</p>
            </div>
          </div>
          <a
            href="/"
            className="flex items-center gap-2 text-dim hover:text-cream-dim font-mono text-xs uppercase tracking-widest transition-colors"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to site
          </a>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-10 flex flex-col gap-8">

        {/* Section 1: Contact & WhatsApp */}
        <section className="glass-panel p-8 md:p-10">
          <h2 className={sectionHeaderClass}>
            <span className="material-symbols-outlined text-xs align-middle mr-2">chat</span>
            Contact & WhatsApp
          </h2>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className={labelClass}>WhatsApp Number</label>
              <input
                type="text"
                value={config.whatsappNumber}
                onChange={(e) => updateField('whatsappNumber', e.target.value)}
                className={inputClass}
                placeholder="5511999999999"
              />
              <p className="font-mono text-[10px] text-dim">Full international format, no spaces or dashes</p>
            </div>
            <div className="flex flex-col gap-2">
              <label className={labelClass}>WhatsApp Default Message</label>
              <input
                type="text"
                value={config.whatsappMessage}
                onChange={(e) => updateField('whatsappMessage', e.target.value)}
                className={inputClass}
                placeholder="Ol&aacute;, gostaria de saber mais..."
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className={labelClass}>Calendly URL</label>
              <input
                type="url"
                value={config.calendlyUrl}
                onChange={(e) => updateField('calendlyUrl', e.target.value)}
                className={inputClass}
                placeholder="https://calendly.com/..."
              />
            </div>
          </div>
        </section>

        {/* Section 2: Email (EmailJS) */}
        <section className="glass-panel p-8 md:p-10">
          <h2 className={sectionHeaderClass}>
            <span className="material-symbols-outlined text-xs align-middle mr-2">mail</span>
            Email (EmailJS)
          </h2>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className={labelClass}>Service ID</label>
              <input
                type="text"
                value={config.emailjsServiceId}
                onChange={(e) => updateField('emailjsServiceId', e.target.value)}
                className={inputClass}
                placeholder="service_xxxxx"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className={labelClass}>Template ID</label>
              <input
                type="text"
                value={config.emailjsTemplateId}
                onChange={(e) => updateField('emailjsTemplateId', e.target.value)}
                className={inputClass}
                placeholder="template_xxxxx"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className={labelClass}>Public Key</label>
              <input
                type="text"
                value={config.emailjsPublicKey}
                onChange={(e) => updateField('emailjsPublicKey', e.target.value)}
                className={inputClass}
                placeholder="xxxxxxxxxx"
              />
            </div>
          </div>
        </section>

        {/* Section 3: Social Links */}
        <section className="glass-panel p-8 md:p-10">
          <h2 className={sectionHeaderClass}>
            <span className="material-symbols-outlined text-xs align-middle mr-2">share</span>
            Social Links
          </h2>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className={labelClass}>LinkedIn URL</label>
              <input
                type="url"
                value={config.linkedinUrl}
                onChange={(e) => updateField('linkedinUrl', e.target.value)}
                className={inputClass}
                placeholder="https://www.linkedin.com/company/..."
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className={labelClass}>Instagram URL</label>
              <input
                type="url"
                value={config.instagramUrl}
                onChange={(e) => updateField('instagramUrl', e.target.value)}
                className={inputClass}
                placeholder="https://www.instagram.com/..."
              />
            </div>
          </div>
        </section>

        {/* Section 4: Logo Bar */}
        <section className="glass-panel p-8 md:p-10">
          <h2 className={sectionHeaderClass}>
            <span className="material-symbols-outlined text-xs align-middle mr-2">domain</span>
            Logo Bar Companies
          </h2>

          {/* Company pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {config.logoBarCompanies.map((company, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 bg-bg-card border border-edge rounded-full px-4 py-2 text-sm text-cream-dim font-mono"
              >
                {company}
                <button
                  onClick={() => removeCompany(i)}
                  className="w-5 h-5 rounded-full flex items-center justify-center text-dim hover:text-error hover:bg-error/10 transition-colors"
                  title={`Remove ${company}`}
                >
                  <span className="text-xs leading-none">&times;</span>
                </button>
              </span>
            ))}
            {config.logoBarCompanies.length === 0 && (
              <p className="text-dim font-mono text-xs">No companies added</p>
            )}
          </div>

          {/* Add company */}
          <div className="flex gap-3">
            <input
              type="text"
              value={newCompany}
              onChange={(e) => setNewCompany(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  addCompany();
                }
              }}
              className={inputClass}
              placeholder="Company name"
            />
            <button
              onClick={addCompany}
              className="flex-shrink-0 bg-accent/10 border border-accent/30 text-accent px-5 py-3 rounded-lg font-mono text-sm hover:bg-accent/20 transition-colors"
            >
              Add
            </button>
          </div>
        </section>

        {/* Section 5: Security */}
        <section className="glass-panel p-8 md:p-10">
          <h2 className={sectionHeaderClass}>
            <span className="material-symbols-outlined text-xs align-middle mr-2">shield</span>
            Security
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className={labelClass}>New Access Code</label>
              <input
                type="password"
                value={config.adminCode}
                onChange={(e) => updateField('adminCode', e.target.value)}
                className={inputClass}
                placeholder="****"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className={labelClass}>Confirm Access Code</label>
              <input
                type="password"
                value={confirmCode}
                onChange={(e) => setConfirmCode(e.target.value)}
                className={inputClass}
                placeholder="****"
              />
              {confirmCode && confirmCode !== config.adminCode && (
                <p className="text-error text-xs font-mono">Codes do not match</p>
              )}
            </div>
          </div>
        </section>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 pb-12">
          <button
            onClick={handleReset}
            className="font-mono text-xs text-dim hover:text-cream-dim uppercase tracking-widest transition-colors underline underline-offset-4"
          >
            Reset to Defaults
          </button>
          <button
            onClick={handleSave}
            disabled={confirmCode !== '' && confirmCode !== config.adminCode}
            className="bg-accent text-bg-core px-8 py-3 rounded-full font-semibold text-sm hover:bg-accent-hover transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-base">save</span>
            Save Configuration
          </button>
        </div>

      </div>
    </div>
  );
};
