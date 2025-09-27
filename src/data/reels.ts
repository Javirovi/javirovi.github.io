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
      shortDescription: 'Video explicativo con infografías animadas',
      longDescription: 'Creación de un video corporativo con motion graphics para explicar procesos complejos de manera visual y atractiva. Incluye animación de datos, iconografía personalizada y transiciones fluidas.',
      thumbnail: '/images/placeholder.svg', // For optimized images: import from assets and use .src
      videoUrl: '/videos/project2.mp4',
      software: 'Blender',
      duration: '45 segundos',
      credits: 'Cleanup y color'
    },
    {
      id: 'proyecto3',
      title: 'Cornelius Color Reel 2025',
      shortDescription: 'Cortometraje animado con personajes 2D',
      longDescription: 'Cortometraje de animación 2D con personajes originales. El proyecto abarcó desde el diseño conceptual hasta la animación final, incluyendo rigging y efectos especiales.',
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
      shortDescription: 'Updated summary of my animation work.',
      longDescription: 'Complete development of a 30-second advertising spot for a local brand. The project included character design, storyboard, animation, and post-production.',
      thumbnail: '/images/placeholder.svg', // For optimized images: import from assets and use .src
      videoUrl: '/videos/project1.mp4',
      software: 'Autodesk Maya y Blender',
      duration: '30 seconds',
      credits: '-'
    },
    {
      id: 'project2',
      title: 'Lucus Cleanup Reel 2024',
      shortDescription: 'Explainer video with animated infographics',
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
      shortDescription: '2D animated short film with characters',
      longDescription: '2D animated short film with original characters. The project covered from conceptual design to final animation, including rigging and special effects.',
      thumbnail: '/images/placeholder.svg', // For optimized images: import from assets and use .src
      videoUrl: '/videos/project3.mp4',
      software: 'Blender',
      duration: '1 minute',
      credits: 'Color'
    }
  ]
};
