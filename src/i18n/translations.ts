export interface Translations {
  hero: {
    name: string;
    title: string;
    description: string;
  };
  sections: {
    reels: string;
    other: string;
  };
  modal: {
    close: string;
   
    software: string;
    credits: string;
  };
  footer: {
    rights: string;
  };
}

export const translations: Record<string, Translations> = {
  es: {
    hero: {
      name: "Javier Rodríguez Vicedo",
      title: "Animador Junior",
      description: "**¡Hola!** Soy Javi, un animador de A Coruña recientemente graduado en **Creación Digital, Animación y Videojuegos**.\n\nMis principales aptitudes están orientadas hacia la animación tanto 2D como 3D, teniendo experiencia en programas como **Maya** o **Blender**. Tengo experiencia trabajando para proyectos colaborativos de animación y videojuegos durante mi estancia en la carrera, así como experiencia profesional, habiendo desempeñado labores de **Ink & Paint** para los cortos **\"Lucus\"** (**Mala Herba Producións**) y **\"La verdad te rechaza, Cornelius\"** (**Hampa Studio**).\n\nEstoy cómodo en ambientes donde se trabaje en equipo y me considero una persona agradable y comunicativa. También me considero versátil y polivalente, siendo capaz de adaptarme rápidamente a cualquier tipo de imprevisto. Tengo una gran pasión por la animación estilizada y experimental, el humor y la acción. En mi trabajo personal busco, con el tiempo, seguir explorando estas facetas.\n\n**¡Si tienes cualquier duda no dudes en contactarme!**"
    },
    sections: {
      reels: "Proyectos",
      other: "Otros proyectos"
    },
    modal: {
      close: "Cerrar",
      duration: "",
      software: "Software",
      credits: "Créditos"
    },
    footer: {
      rights: "Todos los derechos reservados"
    }
  },
  en: {
    hero: {
      name: "Javier Rodríguez Vicedo",
      title: "Junior Animator",
      description: "**Hi!** I'm Javi, an animator from A Coruña recently graduated in **Digital Creation, Animation and Video Games**.\n\nMy main skills are focused on both 2D and 3D animation, with experience in programs such as **Maya** and **Blender**. I have experience working on collaborative animation and video game projects during my studies, as well as professional experience, having worked on **Ink & Paint** for the short films **\"Lucus\"** (**Mala Herba Producións**) and **\"La verdad te rechaza, Cornelius\"** (**Hampa Studio**).\n\nI'm comfortable in team environments and consider myself a pleasant and communicative person. I also consider myself versatile and adaptable, being able to quickly adapt to any type of unexpected situation. I have a great passion for stylized and experimental animation, humor and action. In my personal work I seek, over time, to continue exploring these facets.\n\n**If you have any questions, don't hesitate to contact me!**"
    },
    sections: {
      reels: "Projects",
      other: "Other Works"
    },
    modal: {
      close: "Close",
      duration: "Duration",
      software: "Software",
      credits: "Credits"
    },
    footer: {
      rights: "All rights reserved"
    }
  }
};

export function getTranslations(lang: string): Translations {
  return translations[lang] || translations.es;
}
