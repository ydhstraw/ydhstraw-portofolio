export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2019 — 2025",
    institution: "Multimedia Nusantara University",
    degree: "Bachelor of Computer Science — Grade 3.50",
  },
];
