export enum Page {
  HOME = 'HOME',
  STUDIO = 'STUDIO',
  ACADEMY = 'ACADEMY',
  EXCELLENCE = 'EXCELLENCE',
  CONTACT = 'CONTACT'
}

export enum Language {
  EN = 'EN',
  PT = 'PT',
  ES = 'ES',
  IT = 'IT'
}

export interface NavItem {
  label: string;
  page: Page;
}