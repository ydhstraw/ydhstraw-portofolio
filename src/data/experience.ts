export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string[];
  // advisor?: string;
  // manager?: string;
  companyUrl?: string;
  type?: string;
  technologies?: string[];
}

export const experienceData: Experience[] = [
  
  {
    date: "Oct 2026 — Present",
    title: "Quality Assurance Contributor",
    company: "BlankOn Linux",
    type: "Remote",
    description: ["BlankOn Linux is a Debian-based Linux distribution developed specifically for Indonesian users, with local language support and needs.", "- Testing the usability and Stability of BlankOn Linux to make sure the system runs flawlessly when shipped to users.", "- Bug Tracking the Daily builds of the OS."],
    technologies: ["Linux", "Git"],
  },
  {
    date: "Feb 2025 — Present",
    title: "Video Editor",
    company: "Creative Shortcut",
    type: "Remote Freelance",
    description: ["- Editing Video, Color Grading, and making subtitles for Reels Content using DaVinci Resolve.", "Add Variations for Reels Alternative Content.", "- Meeting & communicate with other editors."],
    technologies: ["Davinci Resolve"],
  },
  {
    date: "Feb 2023 — Jun 2023",
    title: "Laboratory Assistant",
    company: "Multimedia Nusantara University",
    type: "Part Time",
    description:
      ["Teaching Introduction to Internet Technology course:", "- Create a basic website using HTML, CSS, JavaScript, jQuery.", "- Create a website using ReactJS and Bootstrap.", "- Integrate API using axios."],
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
  },
  {
    date: "Aug 2022 — Dev 2022",
    title: "Mobile Developer",
    company: "PT Central Artificial Intelligence",
    description:
      ["- Develop the user interface of the Central Chatbot mobile application from scratch using React Native, based on the provided design.", "- Update and maintaining Central Chatbot", "- Collaborating on version control code using git."],
    type: "Internship",
    technologies: ["React Native", "JavaScript", "Git"],
  },
  {
    date: "Sep 2021 — Apr 2022",
    title: "IT & Web Coordinator",
    company: "TVONAIR 7.0",
    type: "Committee",
    description: ["- Design, create, develop, and maintain TV On Air website.", "- Handle the online main event Livestream via YouTube using OBS."],
    technologies: ["Laravel", "CSS", "HTML", "Bootstrap", "OBS"]
  },
  {
    date: "Mar 2021 — Apr 2022",
    title: "Head of IT & Web Department",
    company: "UMN TV",
    description:
      ["- Set up a road plan on the UMN TV website.", "- Designed a new user interface for the UMN TV website.", "- Updated UMN TV website using the PHP Framework Laravel.", "- Monitoring the UMN TV website."],
    type: "Contract",
    technologies: ["Laravel", "PHP", "CSS", "Bootstrap"],
  },
  {
    date: "Mar 2020 — Mar 2021",
    title: "Crew of IT & Web Department",
    company: "UMN TV",
    description:
      ["- Update software on UMN TV members who need it.", "- Updated the UMN TV website based on the PHP Framework Laravel.", "- Monitoring the UMN TV website."],
    type: "Contract",
    technologies: ["Laravel", "PHP", "CSS"],
  },
  {
    date: "Oct 2020 — Apr 2021",
    title: "Logistic Member",
    company: "TVONAIR 6.0",
    type: "Committee",
    description: ["Assisting the equipment procurement process so that the event can run smoothly."],
  },
  {
    date: "Oct 2020 — Sep 2021",
    title: "Vice Chairman",
    company: "J-Cafe Culture",
    type: "Committee",
    description: ["Planned a lessons and presentation about Japanese culture."],
  },
  {
    date: "Mar 2020 — Nov 2020",
    title: "Crew of Visual",
    company: "BIOS 2020",
    type: "Committee",
    description: ["Made the visual assets for BIOS 2020 Event."],
    technologies: ["Photoshop"]
  },
  {
    date: "Jan 2018 — Mar 2018",
    title: "System Administrator",
    company: "IP Network Solusindo",
    description:
      ["Learned Linux & Web Server Fundamentals.", "- Build a server using Ubuntu Server with LAMP Stack, DHCP, DNS, & FTP services.", "- Implemented cloud storage service using Nextcloud.", "- Applied and configured mail service with HTTPS protocol.", "- Set up an Office collaborative space using Collabora.", "- Installed a Network Monitoring System using LibreNMS."],
    type: "Internship",
    technologies: ["Linux"],
  },
];
