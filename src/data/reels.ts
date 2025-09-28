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
      longDescription: 'En 2024 realicé mis prácticas universitarias con el animador gallego David Fidalgo, trabajando durante 4 meses en la producción de su corto "Lucus" como artista de cleanup. También realicé otras tareas, como color e iluminación y en general afiancé muchas de mis aptitudes con Grease Pencil',
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
      longDescription: 'En verano de 2025 tuve la oportunidad de trabajar como artista Ink & Paint en el corto "La Verdad te rechaza, Cornelius.", dirigido por Khris Cembe y Marc Torices mediante Hampa Studio.',
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
      longDescription: 'Updated summary of my animation work! ',
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
      longDescription: 'Back in 2024 I completed my college internship with galician animator David Fidalgo, working for 4 months on the production of his short film "Lucus" as a cleanup artist. I also performed other tasks such as coloring and lighting. Overall I strenghted a lot of my Grease Pencil skills.',
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
      longDescription: 'In summer of 2025 I got the opportunity to work as an Ink & Paint artist on the short film "La verdad te rechaza, Cornelius." directed by Khris Cembe and Marc Torices via Hampa Studio.',
      thumbnail: '/images/placeholder.svg', // For optimized images: import from assets and use .src
      videoUrl: '/videos/project3.mp4',
      software: 'Blender',
      duration: '1 minute',
      credits: 'Color'
    }
  ]
};
