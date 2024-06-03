import bbc from "../assets/media/bbc.png";
import conversation from "../assets/media/conversation.png";
import ict from "../assets/media/ict.png";
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
import emerge from "../assets/publications/emerge.pdf";
import formativeStudies from "../assets/publications/formativeStudies.pdf";
import thesis from "../assets/publications/ft_thesis.pdf";
import shapeCanvas from "../assets/publications/shapeCanvas.pdf";
import shapeclip from "../assets/publications/shapeclip.pdf";
import toolSupport from "../assets/publications/toolsupport.pdf";
import touchInput from "../assets/publications/touchinput.pdf";
import userPreferences from "../assets/publications/userPreferences.pdf";

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

export const publicationsData = [
  {
    citation:
      "Taher, F., Vidler, J., & Alexander, J. (2016). A Characterization of Actuation Techniques for Generating Movement in Shape-Changing Interfaces. International Journal of Human–Computer Interaction.",
    url: "http://www.tandfonline.com/doi/abs/10.1080/10447318.2016.1250372?journalCode=hihc20",
    title: "Link to Actuation Techniques article",
  },
  {
    citation:
      "Taher F., Jansen, Y., Woodruff, J., Hardy, J., Hornbaek, K., & Alexander, J. (2016). Investigating the Use of a Dynamic Physical Bar Chart for Data Exploration and Presentation. IEEE Information Visualization 2016, Baltimore, USA.",
    url: "https://doi.org/10.1109/TVCG.2016.2598498",
    title: "Link to Data Exploration paper",
  },
  {
    citation:
      "Everitt, A., Taher, F., & Alexander, J. (2016). ShapeCanvas: An Exploration of Shape-Changing Content Generation by Members of the Public. CHI 2016, San Jose, USA.",
    url: shapeCanvas,
    title: "Link to Shape Canvas paper",
  },
  {
    citation:
      "Taher, F., Hardy, J., Karnik, A., Weichel, C., Jansen, Y., Hornbaek, K., & Alexander, J. (2015). Exploring Interactions with Physically Dynamic Bar Charts. CHI 2015, Seoul, South Korea. ",
    url: emerge,
    title: "Link to Emerge paper",
  },
  {
    citation:
      "Hardy, J., Weichel, C., Taher, F., Vidler, J., & Alexander, J. (2015) ShapeClip: Towards Rapid Prototyping with Shape-Changing Displays for Designers. CHI 2015, Seoul, South Korea.",
    url: shapeclip,
    title: "Link to ShapeClip paper",
  },
  {
    citation:
      "Taher, F., Alexander, J., Hardy, J., and Velloso, E. (2014). An Empirical Characterization of Touch-Gesture Input- Force on Mobile Devices. Proceedings of the 2014 ACM International Conference on Interactive Tabletops and Surfaces (ITS’14), Dresden, Germany.",
    url: touchInput,
    title: "Link to Touch Input paper",
  },
  {
    citation:
      "Taher, F. 2013. Exploring the User Interaction Design and Contextual Aspects of an Indoor Navigation System. PhD Thesis.",
    url: thesis,
    title: "Link to my thesis",
  },
  {
    citation:
      "Cheverst, K., Taher, F., Fisher M., Fitton, D. and Taylor, N. (2012). The design, deployment and evaluation of situated display-based systems to support coordination and community. Krüger, A. and Kuflik, T. (Eds.), Ubiquitous Display Environments, Springer, 105–124.",
    url: "http://link.springer.com/chapter/10.1007/978-3-642-27663-7_7",
    title: "Link to book chapter",
  },
  {
    citation:
      "Taher, F. and Cheverst, K. (2011). Exploring user preferences for indoor navigation support through a combination of mobile and fixed displays. In Proceedings of the 13th international Conference on Human Computer interaction with Mobile Devices and Services (Stockholm, Sweden, August 30 - September 02, 2011). MobileHCI '11. ACM, New York, NY, 201-210.",
    url: userPreferences,
    title: "Link to Indoor Navigation User Preferences paper",
  },
  {
    citation:
      "Taher, F., Cheverst, K., and Harding, M. (2010). Exploring Personal Mobile Phones and Digital Display Systems to Support Indoor Navigation by Formative Study Methods. International Journal of Handheld Computing Research 1, 3 (Jul. 2010), 32-50.",
    url: "Link to Indoor Navigation article",
    title:
      "https://scholar.google.co.uk/scholar?oi=bibs&cluster=6505939156732179895&btnI=1&hl=en",
  },
  {
    citation:
      "Taher, F., & Cheverst, K. (2010). Exploring requirements for tools to support a pervasive in-building navigation application. In Proceedings of the 12th International Conference on Human-Computer Interaction and Mobile Devices and Services. Workshop on Tool-Support for Mobile and Pervasive Application Development.",
    url: toolSupport,
    title: "Link to Indoor Navigation Tools paper",
  },
  {
    citation:
      "Taher, F., Cheverst, K., Harding, M., and Fitton, D. (2009). Formative studies for dynamic wayfinding support with in-building situated displays and mobile devices. In Proceedings of the 8th international Conference on Mobile and Ubiquitous Multimedia (Cambridge, United Kingdom, November 22 - 25, 2009). MUM '09. ACM, New York, NY, 1-10.",
    url: formativeStudies,
    title: "Link to Inoor Navigation Formative Studies paper",
  },
  {
    citation:
      "Schöning, J., Krüger, A., Cheverst, K., Rohs, M., Löchtefeld, M., and Taher, F. (2009). PhotoMap: using spontaneously taken images of public maps for pedestrian navigation tasks on mobile devices. In Proceedings of the 11th international Conference on Human-Computer interaction with Mobile Devices and Services (Bonn, Germany, September 15 - 18, 2009). MobileHCI '09. ACM, New York, NY, 1-10.",
    url: "http://dl.acm.org/citation.cfm?id=1613876",
    title: "Link to PhotoMap paper",
  },
  {
    citation:
      "Hart, J., Ridley, C., Taher, F., Sas, C., and Dix, A. 2008. Exploring the facebook experience: a new approach to usability. In Proceedings of the 5th Nordic Conference on Human-Computer interaction: Building Bridges (Lund, Sweden, October 20 - 22, 2008). NordiCHI '08, vol. 358. ACM, New York, NY, 471-474.",
    url: "http://dl.acm.org/citation.cfm?id=1463222",
    title: "Link to Facebook paper",
  },
];

export const mediaData = [
  {
    image: bbc,
    url: "http://www.bbc.co.uk/news/uk-england-lancashire-32296315",
    title: "EMERGE - BBC Northwest coverage",
    description:
      "The EMERGE prototype received coverage by BBC News in April 2015.",
  },
  {
    image: ict,
    url: "https://youtu.be/YgJhQtFXV0w?t=52",
    title: "GHOST project - ICT Portugal",
    description:
      "The GHOST project, which I worked on as a Research Associate at Lancaster University, received media coverage at a showcasing event at the ICT Conference in Portugal in November 2015.",
  },
  {
    image: conversation,
    url: "http://theconversation.com/five-years-ago-the-ipad-changed-clicks-to-touches-but-another-tablet-revolution-is-coming-39650",
    title: "EMERGE - The Conversation",
    description:
      "The EMERGE prototype was also featured in an article in April 2015 by The Conversation, a media outlet for the academic and research community.",
  },
];
