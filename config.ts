export interface SiteConfig {
  // Access
  adminCode: string;

  // Contact
  whatsappNumber: string;
  whatsappMessage: string;
  calendlyUrl: string;
  emailjsServiceId: string;
  emailjsTemplateId: string;
  emailjsPublicKey: string;

  // Social / Footer
  linkedinUrl: string;
  instagramUrl: string;

  // Logo Bar
  logoBarCompanies: string[];

  // General
  contactEmail: string;
}

const STORAGE_KEY = 'eximia-site-config';

export const defaultConfig: SiteConfig = {
  adminCode: '2026',
  whatsappNumber: '5511999999999',
  whatsappMessage: 'Ol\u00e1, gostaria de saber mais sobre a Ex\u00edmIA Ventures.',
  calendlyUrl: 'https://calendly.com/eximia',
  emailjsServiceId: 'service_sh3nf99',
  emailjsTemplateId: 'template_t873qzs',
  emailjsPublicKey: '9tMCvN9EFuY8aCrdJ',
  linkedinUrl: 'https://www.linkedin.com/company/exim-ia/',
  instagramUrl: 'https://www.instagram.com/eximia.ia',
  logoBarCompanies: ['AgroCorp', 'Banco Nacional', 'IndustriaMax', 'TechVentures', 'Sa\u00fadePlus', 'RetailGroup'],
  contactEmail: '',
};

export function getConfig(): SiteConfig {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return { ...defaultConfig, ...JSON.parse(stored) };
    }
  } catch {}
  return { ...defaultConfig };
}

export function saveConfig(config: SiteConfig): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
}
