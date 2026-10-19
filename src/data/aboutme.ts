export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
  instagramUsername?: string;
  facebookLink?: string;
}

export const aboutMe: AboutMe = {
  name: "Yudhistira Wardhana",
  title: "Developer",
  institution: "",
  // Note that links work in the description
  description:
    "Hi, my name is Yudhistira Wardhana! I'm a Bachelor of Computer Science graduate with a strong focus on technology. I have hands-on experience as a Network administrator and also a web & mobile developer. Allowing me to work across both technical and user-focused environments.",
  email: "me@ydhstraw.web.id",
  imageUrl:
    "/img/profile.jpg",
  githubUsername: "ydhstraw",
  linkedinUsername: "ydhstraw",
  twitterUsername: "ydhstraw",
  // altName: "",
  instagramUsername: "ydhstraw",
  facebookLink: "ydhstraw",
  secretDescription: "Go watch Todoroki Hajime <3",
  cvUrl:"https://cv.ydhstraw.web.id",
};
