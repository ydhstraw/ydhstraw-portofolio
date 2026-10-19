export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
  type?: string;
}

export const portfolioData: Portfolio[] = [
  // Example entry
  {
    title: "Central Chatbot",
    description:
      "A mobile application from Central AI to manage Chatbots, intended for UMKM.",
    technologies: ["React Native", "JavaScript"],
    imageUrl:
      "/img/portfolio/cchatbot.png",
    type: "Internship Project"
  },
  {
    title: "SeiYou",
    description:
      "Application for people that like voice acting. People can upload their voice acting and search other people's voice acting.",
    technologies: ["Ionic React", "JavaScript", "TypeScript", "CSS", "Firebase"],
    projectUrl: "https://sei-you.vercel.app/welcome",
    imageUrl:
      "/img/portfolio/SeiYou.png",
    codeUrl: "https://github.com/IArnFredo/WeHearYouAll-SeiYou",
    type: "Group Project"
  },
  {
    title: "Gebet",
    description:
      "Gebet is a cross platform dating-like application where user can find a lover.",
    technologies: ["Ionic React", "JavaScript", "TypeScript", "CSS"],
    projectUrl: "https://gebet.vercel.app",
    imageUrl:
      "/img/portfolio/gebet.png",
    codeUrl: "https://github.com/ydhstraw/Gebet-app",
    type: "Exam Project"
  },
  {
    title: "RefriDate App",
    description:
      "Android application to track refrigerator items.",
    technologies: ["Java", "Firebase"],
    imageUrl:
      "/img/portfolio/refridate.png",
    codeUrl: "https://github.com/alvinmdj/uas-mobile-app",
    type: "Group Project"
  },
  {
    title: "SFXLibrary App",
    description:
      "Android Application to view SFX Library.",
    technologies: ["Java"],
    imageUrl:
      "/img/portfolio/SFXApp.png",
    codeUrl: "https://github.com/ydhstraw/SFXLibraryApp",
    type: "Exam Project"
  },
  {
    title: "Booking Hotel",
    description:
      "Booking Hotel is a website to do a Hotel reservation.",
    technologies: ["Laravel", "PHP", "MySQL"],
    imageUrl:
      "/img/portfolio/Booking Hotel.png",
    codeUrl: "https://github.com/ydhstraw/booking-hotel",
    type: "Group Project"
  },
  
 
  {
    title: "Foodle",
    description:
      "Food recipe search website that uses Edamam API. you can search based on certain criteria, such as sugar content, protein, and so on.",
    technologies: ["ReactJS", "JavaScript", "HTML", "CSS"],
    projectUrl: "https://foodle.vercel.app",
    imageUrl:
      "/img/portfolio/Foodle.png",
    codeUrl: "https://github.com/ydhstraw/Foodle-app",
    type: "Group Project"
  },
];
