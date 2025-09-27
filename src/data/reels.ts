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
      title: 'Animación Comercial',
      shortDescription: 'Spot publicitario animado para marca local',
      longDescription: 'Desarrollo completo de un spot publicitario de 30 segundos para una marca local. El proyecto incluyó diseño de personajes, storyboard, animación y postproducción.',
      thumbnail: '/images/placeholder.svg', // For optimized images: import from assets and use .src
      videoUrl: '/videos/project1.mp4',
      software: 'After Effects, Illustrator',
      duration: '30 segundos',
      credits: 'Dirección y animación'
    },
    {
      id: 'proyecto2',
      title: 'Motion Graphics Corporativo',
      shortDescription: 'Video explicativo con infografías animadas',
      longDescription: 'Creación de un video corporativo con motion graphics para explicar procesos complejos de manera visual y atractiva. Incluye animación de datos, iconografía personalizada y transiciones fluidas.',
      thumbnail: '/images/placeholder.svg', // For optimized images: import from assets and use .src
      videoUrl: '/videos/project2.mp4',
      software: 'After Effects, Cinema 4D',
      duration: '45 segundos',
      credits: 'Animación y composición'
    },
    {
      id: 'proyecto3',
      title: 'Animación de Personajes',
      shortDescription: 'Cortometraje animado con personajes 2D',
      longDescription: 'Cortometraje de animación 2D con personajes originales. El proyecto abarcó desde el diseño conceptual hasta la animación final, incluyendo rigging y efectos especiales.',
      thumbnail: '/images/placeholder.svg', // For optimized images: import from assets and use .src
      videoUrl: '/videos/project3.mp4',
      software: 'After Effects, Photoshop',
      duration: '1 minuto',
      credits: 'Diseño y animación completa'
    }
  ],
  en: [
    {
      id: 'project1',
      title: 'Commercial Animation',
      shortDescription: 'Animated advertising spot for local brand',
      longDescription: 'Complete development of a 30-second advertising spot for a local brand. The project included character design, storyboard, animation, and post-production.',
      thumbnail: '/images/placeholder.svg', // For optimized images: import from assets and use .src
      videoUrl: '/videos/project1.mp4',
      software: 'After Effects, Illustrator',
      duration: '30 seconds',
      credits: 'Direction and animation'
    },
    {
      id: 'project2',
      title: 'Corporate Motion Graphics',
      shortDescription: 'Explainer video with animated infographics',
      longDescription: 'Creation of a corporate video with motion graphics to explain complex processes in a visual and attractive way. Includes data animation, custom iconography, and smooth transitions.',
      thumbnail: '/images/placeholder.svg', // For optimized images: import from assets and use .src
      videoUrl: '/videos/project2.mp4',
      software: 'After Effects, Cinema 4D',
      duration: '45 seconds',
      credits: 'Animation and composition'
    },
    {
      id: 'project3',
      title: 'Character Animation',
      shortDescription: '2D animated short film with characters',
      longDescription: '2D animated short film with original characters. The project covered from conceptual design to final animation, including rigging and special effects.',
      thumbnail: '/images/placeholder.svg', // For optimized images: import from assets and use .src
      videoUrl: '/videos/project3.mp4',
      software: 'After Effects, Photoshop',
      duration: '1 minute',
      credits: 'Complete design and animation'
    }
  ]
};