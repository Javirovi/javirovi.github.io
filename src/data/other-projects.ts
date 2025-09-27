// Import images from assets for optimization
// Example: import projectThumb from '../assets/project-thumb.jpg';
// Then use: thumbnail: projectThumb.src

export interface OtherProject {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  externalLink: string | null;
  type: string;
}

export interface OtherProjectsData {
  es: OtherProject[];
  en: OtherProject[];
}

export const otherProjects: OtherProjectsData = {
  es: [
    {
      id: 'otro1',
      title: 'Colaboración Musical',
      description: 'Visuales animados para videoclip musical independiente',
      thumbnail: '/images/placeholder.svg',
      externalLink: 'https://vimeo.com/example',
      type: 'Videoclip'
    },
    {
      id: 'otro2',
      title: 'Proyecto Educativo',
      description: 'Serie de animaciones educativas para plataforma online',
      thumbnail: '/images/placeholder.svg',
      externalLink: 'https://youtube.com/example',
      type: 'Educación'
    },
    {
      id: 'otro3',
      title: 'Festival de Animación',
      description: 'Participación en festival local con cortometraje experimental',
      thumbnail: '/images/placeholder.svg',
      externalLink: null,
      type: 'Festival'
    }
  ],
  en: [
    {
      id: 'other1',
      title: 'Musical Collaboration',
      description: 'Animated visuals for independent music video',
      thumbnail: '/images/placeholder.svg',
      externalLink: 'https://vimeo.com/example',
      type: 'Music Video'
    },
    {
      id: 'other2',
      title: 'Educational Project',
      description: 'Series of educational animations for online platform',
      thumbnail: '/images/placeholder.svg',
      externalLink: 'https://youtube.com/example',
      type: 'Education'
    },
    {
      id: 'other3',
      title: 'Animation Festival',
      description: 'Participation in local festival with experimental short film',
      thumbnail: '/images/placeholder.svg',
      externalLink: null,
      type: 'Festival'
    }
  ]
};