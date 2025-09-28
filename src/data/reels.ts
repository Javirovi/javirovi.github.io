// Import placeholder image from assets
// When you add real thumbnails, import them here:
// import project1Thumb from '../assets/project1-thumb.jpg';
// import project2Thumb from '../assets/project2-thumb.jpg';

export interface ReelProject {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  thumbnail: string;
  videoUrl: string;
  software: string;
  duration: string;
  credits: string;
}

export interface ReelsData {
  es: ReelProject[];
  en: ReelProject[];
}

export const reels: ReelsData = {
  es: [
    {
      id: 'proyecto1',
      title: 'ANIMATION REEL 2025',
      shortDescription: ' ',
      longDescription: 'Resumen de mi trabajo de animación actualizado.',
      thumbnail: '/images/placeholder.svg', // For optimized images: import from assets and use .src
      videoUrl: '/videos/project1.mp4',
      software: 'Autodesk Maya y Blender',
      duration: '30 segundos',
      credits: '-'
    },
    {
      id: 'proyecto2',
      title: 'Lucus Cleanup Reel 2024',
      shortDescription: ' ',
      longDescription: 'En 2024 realicé mis prácticas universitarias con el animador gallego David Fidalgo, trabajando durante 4 meses en la producción de su corto "Lucus" como artista de cleanup. También realicé otras tareas, como color e iluminación.',
      thumbnail: '/images/placeholder.svg', // For optimized images: import from assets and use .src
      videoUrl: '/videos/project2.mp4',
      software: 'Blender',
      duration: '45 segundos',
      credits: 'Cleanup y color'
    },
    {
      id: 'proyecto3',
      title: 'Cornelius Color Reel 2025',
      shortDescription: '',
      longDescription: 'En verano de 2025 tuve la oportunidad',
      thumbnail: '/images/placeholder.svg', // For optimized images: import from assets and use .src
      videoUrl: '/videos/project3.mp4',
      software: 'Blender',
      duration: '1 minuto',
      credits: 'Color'
    }
  ],
  en: [
    {
      id: 'project1',
      title: 'ANIMATION REEL 2025',
      shortDescription: '',
      longDescription: 'Back in 2024 I completed my college internship with galician animator David Fidalgo, working for 4 months on the production of his short film "Lucus" as a cleanup artist. I also performed other tasks such as coloring and lighting. ',
      thumbnail: '/images/placeholder.svg', // For optimized images: import from assets and use .src
      videoUrl: '/videos/project1.mp4',
      software: 'Autodesk Maya y Blender',
      duration: '30 seconds',
      credits: '-'
    },
    {
      id: 'project2',
      title: 'Lucus Cleanup Reel 2024',
      shortDescription: '',
      longDescription: 'Creation of a corporate video with motion graphics to explain complex processes in a visual and attractive way. Includes data animation, custom iconography, and smooth transitions.',
      thumbnail: '/images/placeholder.svg', // For optimized images: import from assets and use .src
      videoUrl: '/videos/project2.mp4',
      software: 'Blender',
      duration: '45 seconds',
      credits: 'Cleanup and color'
    },
    {
      id: 'project3',
      title: 'Cornelius Color Reel 2025',
      shortDescription: '',
      longDescription: '2D animated short film with original characters. The project covered from conceptual design to final animation, including rigging and special effects.',
      thumbnail: '/images/placeholder.svg', // For optimized images: import from assets and use .src
      videoUrl: '/videos/project3.mp4',
      software: 'Blender',
      duration: '1 minute',
      credits: 'Color'
    }
  ]
};
