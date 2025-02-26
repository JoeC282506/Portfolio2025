import project1a from "../assets/webimg1.png";
import project2a from "../assets/web2img1.png";
import project3a from "../assets/web3img1.png";

export const HERO_CONTENT = `I am a passionate web developer who enjoys using my skills and creativity to bring design ideas to life. Through my learning experiences, I have honed my abilities in front-end technologies such as React, PHP, and WordPress theme design. I aim to utilize my knowledge to create innovative solutions that drive business growth and deliver an excellent user experience.`;

export const ABOUT_TEXT = `I am a dedicated web developer with a passion for creating efficient and user-friendly web applications. With my past learning experience, I have worked with a variety of technologies, including React, PHP, and WordPress.My journey into web development began with a curiosity about how websites work, and it has evolved into a passion for continuous exploration and learning. I hope to thrive in this industry, which is filled with knowledge sharing and collaboration, where I can grow alongside others, explore different solutions, and discover efficient and effective ways to tackle challenges.`;

export const EDUCATION = [
  {
    year: "2023",
    role: "Front-end Web Developer Program Cohort 8",
    company: "CLAP@JC x Generation",
  },
  {
    year: "2021 - 2022",
    role: "Bachelor of Applied Science (Aviation)",
    company: "VTC Shape RMIT University",
  },
  {
    year: "2019 - 2021",
    role: "Higher Diploma in Aviation",
    company: "VTC IVE",
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1a,
    link: "https://github.com/JoeC282506/Card-Shop-E-commerce-Demo",
    live: "https://joe28pract.com/",
    description:
      "This fully functional e-commerce website includes features like product listings, shopping cart, and search system. It supports multilingual capabilities and is designed to be responsive, ensuring a seamless shopping experience across all devices.",
    technologies: ["WordPress", "PHP", "SCSS", "JavaScript", "HTML"],
  },
  {
    title: "Fictional School Website",
    image: project2a,
    link: "https://github.com/JoeC282506/Wordpress-Theme-Develop-Course-Record-",
    live: "http://34.97.101.246/",
    description:
      "This project showcases a fictional university website developed during my online WordPress course. Utilizing a custom theme, it features various custom post types for courses, professors, events, and campus information, demonstrating my skills in WordPress development and API integration.",
    technologies: [
      "WordPress",
      "PHP",
      "SCSS",
      "JavaScript",
      "HTML",
      "AxiosAPI",
    ],
  },
  {
    title: "TMDB Movie Info Website",
    image: project3a,
    link: "https://github.com/JoeC282506/react-tmdb",
    live: "https://joec282506.github.io/react-tmdb/",
    description:
      "This is a movie information website built with React and the TMDB API, utilizing Appwrite as a backend server to track users' movie search counts for displaying search rankings on the site.",
    technologies: ["React", "CSS", "JavaScript", "HTML", "API", "AppWrite"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+852 9013 9345",
  email: "joec282506@gmail.com",
};
