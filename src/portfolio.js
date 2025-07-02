/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Kusum's Portfolio",
  description:
    "A full stack developer passionate about building engaging, user-centric web applications, I specialize in React, JavaScript, and modern UI frameworks like Tailwind CSS. I bring a structured, problem-solving mindset to every project I work on.Beyond coding, I actively lead and build communities — as a campus ambassador, event organizer, and club leader — and have mentored fellow students through open-source programs.",
  og: {
    title: "Kusum's Portfolio",
    type: "website",
    url: "http://kusumkharayat.com/",
  },
};

//Home Page
const greeting = {
  title: "Kusum Kharayat",
  // logo_name: "AshutoshHathidara",
  nickname: "Hi, I'm Kusum Kharayat 👋  ",
  subTitle:
    "A full stack developer passionate about building engaging, user-centric web applications, I specialize in React, JavaScript, and modern UI frameworks like Tailwind CSS. I bring a structured, problem-solving mindset to every project I work on.Beyond coding, I actively lead and build communities as a campus ambassador, event organizer, and club leader and have mentored fellow students through open-source programs.",
  resumeLink:
    "https://drive.google.com/file/d/1169gqzqG508838spb_h1BuknskNq1slC/view?usp=drivesdk",
  // portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/KusumKr",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/KusumKr",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/kusumkharayat",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:kusumkr2004@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/KusumKharayat",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/_kussum.k/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ On the frontend, I craft intuitive and responsive user interfaces using technologies like React, JavaScript, and Tailwind CSS",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "ExpressJS",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Canva",
          fontAwesomeClassname: "simple-icons:canva",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Maharshi Dayanad University",
      subtitle: "B.Tech. in Electronics & Communication Engineering",
      logo_path: "mdu2 logo.jpg",
      alt_name: "MDU",
      duration: "2022 - 2026",
      descriptions: [
        "⚡ Studied core subjects like Digital Electronics, Communication Systems, Microprocessors, VLSI, and Signal Processing, building a solid base in electronics and embedded systems.",
        "⚡ Gained hands-on experience in both hardware and software, integrating programming, circuit design, and system-level understanding for real-world problem solving.",
        "⚡ I was felicitated for securing 13th rank in MDU in my 2nd Semester university examinations ",
      ],
      // website_link: "http://iiitk.ac.in",
    },
    {
      title: "Mayur Public School",
      subtitle: "PCM with CS",
      logo_path: "mps logo.png",
      alt_name: "Mayur Public School",
      // duration: "2021 - 2023",
      descriptions: [
        "⚡ Studied core subjects including Physics, Chemistry, Mathematics, and Computer Science, building analytical and problem-solving skills.",
        "⚡ Involved in academic and extracurricular activities that fostered leadership, discipline, and teamwork during school years.",
        "⚡ Top 1% in academics.",
      ],
      // website_link: "https://www.indiana.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship and Volunteership",
  description:
    "I have worked with many evolving startups as Full Stack Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "design.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Full Stack Developer",
          company: "Nebula Accelarator",
          company_url: "https://www.nebulaaccelerator.org/",
          logo_path: "nebula logo.png",
          duration: "May 2025 - Present",
          location: "New Delhi",
          description:
            "Building scalable and responsive web applications using modern frameworks & Contributing to dynamic startup projects working across the MERN Stack.My role involved designing responsive user interfaces, integrating REST APIs, and handling backend logic with Node.js and MongoDB.",
          color: "#000000",
        },
        {
          title: "Full Stack Developer",
          company: "Knax Technolgies",
          logo_path: "knax logo.png",
          duration: "Jan 2025 - April 2025",
          location: "Gujarat",
          description:
            " Collaborated remotely with a cross-functional team to design, develop and maintain responsive and user-friendly web applications.Debugged and resolved technical issues to ensure seamless functionality of web platforms.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Community Advocate",
          company: "devXsphere",
          logo_path: "devx-image.png",
          duration: "May 2024 - Present",
          description:
            "As a Community Advocate at devXsphere, I actively engage with the tech community by promoting open-source contributions, organizing events, and supporting developers through mentorship and resources. I'm currently working to build a collaborative and inclusive ecosystem that empowers developers to learn and grow together. ",
          color: "#4285F4",
        },
        {
          title: "Digital Head",
          company: "E-Cell MERI",
          logo_path: "meri e cell logo.jpeg",
          duration: "Oct 2024- May 2025",
          description:
            "Spearheading the digital strategy and online presence of the Entrepreneurship Cell, effectively managing social media platforms, creating engaging content, and enhancing outreach. Oversaw digital analytics to optimize strategies and ensure impactful online engagement.",
          color: "#D83B01",
        },

        {
          title: "Team Leader",
          company: "Coding Club- MERI",
          logo_path: "coding club logo.jpeg",
          duration: "Aug 2024- May 2025",
          description:
            "Emerging Technology Domain Lead at the coding Club of my college. I was responsible for guiding members through coding challenges, organizing peer learning sessions, and leading team participation in hackathons and coding competitions. I fostered a collaborative environment to help students improve their problem-solving and development skills.",
          color: "#0C9D58",
        },
        {
          title: "Campus Ambassador",
          company: "E-Cell IIT Bombay",
          logo_path: "iit b logo.jpeg",
          duration: "July 2024 - November 2024",
          description:
            "As a Campus Ambassador for E-Cell, IIT Bombay, I acted as a bridge between the organization and my college, promoting entrepreneurial initiatives and events like Eureka and NEC. I led outreach efforts, encouraged student participation, and helped cultivate an entrepreneurial mindset on campus.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Full Stack Web development projects.",
  avatar_image_path: "projects.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "kusum image new.jpg",
    description:
      "I look forward to connecting with you! Whether you have a question, a project idea, or just want to chat, I'm always open to engaging in meaningful discussions. Let's explore how we can collaborate and create something great together.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "West Vinod Nagar, New Delhi",
    locality: "I.P. Extensiom",
    country: "India",
    postalCode: "110092",
    avatar_image_path: "address.svg",
    location_map_link: "https://maps.app.goo.gl/mZ3GKo8QzQhBz2ND6",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
