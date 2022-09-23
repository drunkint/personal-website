export const EXAMPLE_PATH = "blog-starter";
export const CMS_NAME = "Angus' personal webiste";
export const HOME_OG_IMAGE_URL = "/meta/selfie.jpg";
export const PROJECT_BASE = "/projects/";
export const PROJECTS = [
  {
    title: "Cute Cat Vs. Ling Chieh",
    projectLink: `${PROJECT_BASE}cute-cat-vs-ling-chieh`,
    imageLink: "/project-photos/cute-cat-vs-ling-chieh.png",
    imageCaption: "Cover of Project Slides",
    externalLink: "https://github.com/drunkint/Election-Monopoly-SFML",
    category: "C++, SFML, MakeFile, Agile, Git, Github",
    description:
      "In this project, I researched, architeched, and implemented all the non-UI code for building a 2D Monopoly-like Board Game app in C++, while coordinating with other 4 members. I learned about finite state machines, game engines, rendering, and C++ from a low level. If I were to make changes to the project, I'll use more advanced C++ features such as virtual base classes, or even create my own namespace.",
    date: "JAN 2021",
  },
  {
    title: "Laser and Lightning",
    projectLink: `${PROJECT_BASE}laser-and-lightning`,
    imageLink: "/project-photos/laser-and-lightning-laser.png",
    imageCaption: "Screenshot of Spacecraft Destroying Astroids",
    externalLink: "https://youtu.be/EktwFTGCgSk",
    category: "MIPS, Assembly (functions, conditional, constants, variables)",
    description:
      "In this project, I built a classic horizontal scrolling game using MIPS (Assembly). Features include: Collision Detection, HP/MP, Lightning Attack, pick-up-armo/health, score management, etc. In the process, I learned how functions, if-else statements, and memory works in a low level, and learned to modularize assembly code. In the end, this project earned full marks.",
    date: "AUG 2021",
  },
  {
    title: "Doctor App",
    projectLink: `${PROJECT_BASE}doctor-app`,
    imageLink: "/project-photos/doctor-app.png",
    imageCaption: "Screenshot of Home Page when Logging in as a Doctor",
    externalLink: "https://github.com/B07-R2D2/Doctor-App",
    category: "Java, Android Studio, Firebase, Agile, Unit Test, XML, Expresso Test",
    description: "We created a appointment booking app as a team of 5. Features include: sign in as different roles, search, tags, and saving to firebase as a JSON object. In this process we used MVC structure, created unit tests for login, and implemented agile by having daily standup meetings. In the end, this project got 18.5/20 ",
    date: "AUG 2021",
  }
];
