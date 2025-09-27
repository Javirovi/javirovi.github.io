export interface SocialLink {
  name: string;
  url: string;
  icon: 'email' | 'linkedin' | 'vimeo' | 'github' | 'instagram' | 'twitter';
  ariaLabel: string;
}

export interface PersonalInfo {
  name: string;
  email: string;
  profileImage: string;
}

export interface SiteConfig {
  personal: PersonalInfo;
  social: SocialLink[];
  defaultLanguage: 'es' | 'en';
  availableLanguages: Array<'es' | 'en'>;
}

export const siteConfig: SiteConfig = {
  personal: {
    name: "Javier Rodriguez Vicedo",
    email: "javirovi22@gmail.com",
    profileImage: "/images/javirovi_profile.png" // This is handled separately in Hero.astro with import
  },

  social: [
    {
      name: "Email",
      url: "mailto:javirovi22@gmail.com",
      icon: "email",
      ariaLabel: "Email"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/javirovi/",
      icon: "linkedin",
      ariaLabel: "LinkedIn"
    },
    {
      name: "Vimeo",
      url: "https://vimeo.com/javirovi",
      icon: "vimeo",
      ariaLabel: "Vimeo"
    }
  ],

  defaultLanguage: 'es',
  availableLanguages: ['es', 'en']
};