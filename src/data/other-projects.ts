// Import images from assets for optimization
// Example: import projectThumb from '../assets/project-thumb.jpg';
// Then use: thumbnail: projectThumb.src

export interface OtherProject {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  externalLink: string | null;
  //type: string;
}

export interface OtherProjectsData {
  es: OtherProject[];
  en: OtherProject[];
}

export const otherProjects: OtherProjectsData = {
  es: [
    {
      id: 'otro1',
      title: 'Work In Progress',
      description: '',
      thumbnail: '/images/placeholder.svg',
      externalLink: 'https://vimeo.com/example',
      //type: 'Videoclip'
    },
    {
      id: 'otro2',
      title: 'Work In Progress',
      description: '',
      thumbnail: '/images/placeholder.svg',
      externalLink: 'https://youtube.com/example',
      //type: 'Educación'
    },
    {
      id: 'otro3',
      title: 'Work In Progress',
      description: '',
      thumbnail: '/images/placeholder.svg',
      externalLink: null,
     // type: 'Festival'
    }
  ],
  en: [
    {
      id: 'other1',
      title: 'Work In Progress',
      description: '',
      thumbnail: '/images/placeholder.svg',
      externalLink: 'https://vimeo.com/example',
     // type: 'Music Video'
    },
    {
      id: 'other2',
      title: 'Work In Progress',
      description: '',
      thumbnail: '/images/placeholder.svg',
      externalLink: 'https://youtube.com/example',
     // type: 'Education'
    },
    {
      id: 'other3',
      title: 'Work In Progress',
      description: '',
      thumbnail: '/images/placeholder.svg',
      externalLink: null,
      //type: 'Festival'
    }
  ]
};
