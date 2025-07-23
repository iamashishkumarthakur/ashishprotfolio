/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section
const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ashish Thakur",
  title: "Hi all, I'm Ashish",
  subTitle: emoji(
    "A passionate Full Stack Senior Software Developer 🚀 having an experience of building Web applications with .Net Core / JavaScript / VueJs / SQL / CICD and some other cool libraries and frameworks and third-party API."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1DpbegSpc9x67Pp1wrrra1SfpPHxTcgQ_/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  // github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/ashishkrtr/",
  gmail: "iamashishkumarthakur@gmail.com",
  // twitter: "@IamAKTHAKUR",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */
  softwareSkills: [
  { skillName: "C#", fontAwesomeClassname: "fas fa-code" },
  { skillName: "Dot Net", fontAwesomeClassname: "fas fa-code" },
  { skillName: "Dot Net Core", fontAwesomeClassname: "fas fa-code" },
  { skillName: "sql-database", fontAwesomeClassname: "fas fa-database" },
  { skillName: "DevOps(CICD)", fontAwesomeClassname: "fas fa-code-branch" },
  { skillName: "reactjs", fontAwesomeClassname: "fab fa-react" },
  { skillName: "vuejs", fontAwesomeClassname: "fab fa-vuejs" },
  { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
  { skillName: "html-5", fontAwesomeClassname: "fab fa-html5" },
  { skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt" },
  { skillName: "npm", fontAwesomeClassname: "fab fa-npm" },
  { skillName: "aws", fontAwesomeClassname: "fab fa-aws" },
  { skillName: "Microsoft", fontAwesomeClassname: "fas fa-cloud" },     
  { skillName: "Plaid API", fontAwesomeClassname: "fas fa-link" },    
  { skillName: "Salesforce API", fontAwesomeClassname: "fas fa-chart-line" },
  { skillName: "Check bin API", fontAwesomeClassname: "fas fa-credit-card" },
  { skillName: "GIACT API", fontAwesomeClassname: "fas fa-shield-alt" }
],
  display: true // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Engineering With Honours",
      duration: "September 2013 - April 2017",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "MVC",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "Third-Party API",
      progressPercentage: "100%"
    },
    {
      Stack: "Frontend/Design",
      progressPercentage: "40%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Chetu",
      // companylogo: require("./assets/images/facebookLogo.png"),
      companylogo: require("./assets/images/ChetuLogo.PNG"),
      date: "December 2022 – Present",
      desc: "Engineered secure and scalable banking modules including user onboarding, transaction monitoring, and financial dashboards. Led the integration of third-party APIs such as Plaid, Stripe, and GIACT for seamless KYC and payment verification.",
      descBullets: [
  "Led end-to-end development of fintech modules using ASP.NET Core and SQL Server",
  "Handled direct client communication for requirement gathering and delivery demos",
  "Managed a team of 3–5 developers, assigning tasks and reviewing code for quality assurance",
  "Implemented CI/CD pipelines using Azure DevOps and GitHub Actions",
  "Created comprehensive technical documentation for modules and deployment processes",
  "Participated in daily standups, sprint planning, and agile ceremonies to ensure on-time delivery"
]
    },
    {
      role: "Software Engineer",
      company: "Ackeee Software",
      companylogo: require("./assets/images/AckeeLogo.PNG"),
      date: "September 2020 – December 2022",
      desc: "Contributed to multiple enterprise-level web applications using .NET Core, JavaScript, and SQL Server. Worked on client-specific modules including report generation, data analytics, and backend optimization.",
      descBullets: [
  "Contributed to development of enterprise-level web applications using .NET Core and SQL Server",
  "Built key modules including reporting tools, data analytics dashboards, and backend APIs",
  "Gained hands-on experience in C#, ASP.NET MVC, ADO.NET, and JavaScript",
  "Implemented user authentication, role management, and basic security measures",
  "Learned CI/CD pipeline fundamentals and practiced deployments using Azure DevOps",
  "Collaborated in a small agile team, improving communication, version control (Git), and documentation skills"
]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/LakeviewLogo.webp"),
      projectName: "Lakeview",
      projectDesc: "Developed a scalable and responsive online platform for Lakeview’s marine booking system using ASP.NET Core and Azure services. Integrated secure payment APIs and implemented advanced scheduling features to improve customer experience and internal operations.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://lakeview.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/BayviewLogo.webp"),
      projectName: "Bayview",
      projectDesc: "Led the backend development for Bayview’s property management system using .NET Core Web API and SQL Server. Streamlined tenant onboarding, lease tracking, and maintenance requests. Improved overall performance with optimized database queries and caching strategies.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://bayview.com/"
        }
      ]
    },
    {
      image: require("./assets/images/TAPLocalLogo.png"),
      projectName: "TAPLocal",
      projectDesc: "Collaborated on a hyper-local marketing platform for TAPLocal. Implemented RESTful APIs and a React-based admin dashboard for real-time ad campaign tracking. Integrated geolocation-based business targeting and CRM automation.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://taplocalnow.com/"
        }
      ]
    },
    {
      image: require("./assets/images/BankTechLogo.png"),
      projectName: "BankTech",
      projectDesc: "Engineered core modules of BankTech’s digital banking suite, including user onboarding, secure authentication, and financial dashboards. Utilized ASP.NET Core, SignalR for real-time data sync, and integrated with third-party APIs like Plaid and Stripe for fintech services.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://banktechpr.com/en/"
        }
      ]
    },
    {
      image: require("./assets/images/PortfolioLogo.PNG"),
      projectName: "SelfPortFolio",
      projectDesc: "Designed and developed a responsive personal portfolio using React.js and SCSS. Showcased projects, skills, and achievements with dynamic UI and modal popups. Integrated animations, dark mode, and mobile-friendly layouts for modern UX. Deployed on Netlify/Vercel with continuous updates via GitHub.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://banktechpr.com/en/"
        }
      ]
    },
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Promotion (Chetu - Certificate of Achievement)",
      subtitle:
        "Received a merit-based promotion at Chetu for consistent high performance, ownership of critical projects, and exceeding expectations in software development. Recognized for technical excellence, team collaboration, and leadership potential.",
      image: require("./assets/images/CirtificationPromotion.PNG"),
      //imageAlt: "Google Code-In Logo",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Dot Net Core Certification (Udemy)",
      subtitle:
        "Certified in .NET Core MVC – The Complete Guide 2024 with specialization in building modern e-commerce applications. Gained hands-on experience in REST APIs, Entity Framework, security, and deployment best practices.",
      image: require("./assets/images/CirtificationDotNetCore.PNG"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        // {
        //   name: "View Google Assistant Action",
        //   url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        // }
      ]
    },
    {
      title: "AI Master Class (SMIT)",
      subtitle: "Completed advanced training in Progressive Web App (PWA) development with a focus on AI integration. Gained practical exposure in building responsive, offline-capable apps with real-time AI features.",
      image: require("./assets/images/AICirtification.PNG"),
      imageAlt: "PWA Logo",
      footerLink: [
        // {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },
    {
      title: "BE Degree With Honours",
      subtitle: "Graduated with Honours in Bachelor of Engineering with a specialization in Web Application Development. Recognized for academic excellence and practical application of concepts in industry-grade projects.",
      image: require("./assets/images/ProvisionalDgree.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [
        // {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections
const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7000167522",
  email_address: "iamashishkumarthakur@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "IamAKTHAKUR", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
