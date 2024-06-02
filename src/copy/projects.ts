import emergeVideo from "../assets/projects/EMERGE.mp4";
import changePwd1 from "../assets/projects/changepass.png";
import changePwd2 from "../assets/projects/changepass2.png";
import report1 from "../assets/projects/charts2.png";
import coffee from "../assets/projects/coffee.jpg";
import coffee2 from "../assets/projects/coffee2.png";
import coffee3 from "../assets/projects/coffee3.png";
import coffee4 from "../assets/projects/coffee4.png";
import componentLib from "../assets/projects/componentlibrary.png";
import emergePoster from "../assets/projects/emerge-thumbnail.png";
import floorDisplay from "../assets/projects/floordisplay.png";
import janet1 from "../assets/projects/janetreport1.png";
import janet2 from "../assets/projects/janetreport2.png";
import landing from "../assets/projects/landing.png";
import menu from "../assets/projects/menu.png";
import shapeClip1 from "../assets/projects/shapeclip-1.png";
import shapeClip2 from "../assets/projects/shapeclip2lq.png";
import snssystem from "../assets/projects/snsystem.png";

export const projectsData = [
  {
    images: [report1],
    videos: [],
    title: "Website feature (React) - service usage reports",
    grid: false,
    description: [
      "Reporting feature that provides users with high level usage metrics for services they are subscribed to. This was built using React, Material-UI, and Highcharts (for the graphs). Some of the written content is anonymised due to data sensitivity.",
    ],
  },
  {
    images: [componentLib],
    videos: [],
    title: "Project - React UI component library and Storybook site",
    grid: false,
    description: [
      "React UI component library based on Material UI currently in its alpha phase. It aims to speed up front-end development for React applications in the company, establish design coherency, and ensure accessibility standards are being met. I architected the tooling and infrastructure (bundling, automated tests, build and deploy pipelines, etc), set up the Storybook site to showcase components, and also continuously work on the components with my team members. Users can use the components in their React applications as an NPM package.",
    ],
  },
  {
    images: [changePwd1, changePwd2, menu, landing],
    videos: [],
    title: "React Components",
    grid: true,
    description: [
      "Examples of React components developed as part of a subscription and services management site.",
    ],
  },
  {
    images: [],
    videos: [{ src: emergeVideo, poster: emergePoster }],
    title: "EMERGE - physical shape-changing bar chart",
    grid: false,
    description: [
      "The EMERGE project involved building a shape-changing physical, and also dynamic bar chart. Imagine if on-screen 3D bar chart visualisations came to life as physical bars which you can interact with. EMERGE is made up of 100 motor controlled plastic bars, illuminated by RGB LED lights, custom-made circuit boards, and 3 Arduinos. The software consists of a C# back-end, a JavaScript front-end, a Node server, gelled together using websocket communication.",
      "The project enabled me to gain a signficant amount of experience in leading and managing a large scale project, CAD modelling (i.e. Autodesk Inventor), fabrication using laser cutting and 3D printing for bespoke parts, working with various materials, developing a Node.js application combined with websockets, and lots and lots of soldering (and burning my fingers slightly).",
    ],
  },
  {
    images: [janet1, janet2],
    videos: [],
    title: "Website feature (React) - detailed data report",
    grid: false,
    description: [
      "Reporting feature that transformed user experience from receiving CSV reports to interactive visualisations. Some written content is anonymised due to data sensitivity.",
    ],
  },
  {
    images: [coffee, coffee2, coffee3, coffee4],
    videos: [],
    title: "Personal project - NFC Coffee app",
    grid: true,
    description: [
      "A Coffee logging app that I development as a personal project to be used in the office. It uses a NFC scanner and chip, Raspberry Pi device, and a web application to log coffee usage. It replaced a paper based logging system that we used.",
      "Users (after registering on the system) would select the number of coffee shots on a mobile phone set up next to the coffee machine and scan their chip on an NFC scanner. The administrator could then view users' balance, manage user details, and also configure NFC chips.",
      "Technologies used for this included: JavaScript, HTML, SCSS for the front-end. The back-end is a python Flask application hosted on the Raspberry Pi device. NFC read/write was also done via python on the Raspberry Pi. I also did some Android app development to show the mobile web UI and add some hidden controls for admins (eg long press to change the URL, scheduled the screen to turn off during office closure hours, etc.).",
    ],
  },
  {
    images: [floorDisplay],
    videos: [],
    title: "Website - floor display",
    grid: false,
    description: [
      "I developed website to showcase the Floor Display - an augmented reality advertising display that uses interactive projections to engage with customers.",
    ],
  },
  {
    images: [shapeClip1, shapeClip2],
    videos: [],
    title: "Website - Shapeclip",
    grid: false,
    description: [
      "This website showcased and provided resources for ShapeClip, a project that aimed to simplify the process of prototyping shape-changing interfaces.",
    ],
  },
  {
    images: [snssystem],
    videos: [],
    title: "Website - business management system",
    grid: false,
    description: [
      "While I was self-employed, I developed and deployed a business management system using PHP / JQuery for an engineering company. The web-based system was designed to enable the company administrators, employees, and partners to manage jobs, enquiries, quotes, purchase orders, and log timesheets.",
    ],
  },
];
