import { meta, shopify, autodistribution, tesla, sacem, adot, leta } from "../assets/images";
import {
    angular,
    car,
    contact,
    css,
    estate,
    express,
    figma,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: figma,
        name: "Figma",
        type: "UI/UX",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: angular,
        name: "Angular",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Full stack Developer",
        company_name: "Auto distribution",
        icon: autodistribution,
        iconBg: "#FFF",
        date: "April 2023 - March 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
        langage : [typescript, react, tailwindcss, nodejs, mongodb, git, github]
    },
    {
        title: "React.Js Developer",
        company_name: "SACEM",
        icon: sacem,
        iconBg: "#fbc3bc",
        date: "August 2022 - February 2023",
        points: [
            "Take into account the different scenarios set up by the Product Owners.",
            "Develop an interactive map using Google API, customize its appearance, and ensure it is dynamic. Adapting the screens for an exclusively tablet forma",
            "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
        langage : [typescript, react, mui, redux, git, figma]
    },
    {
        title: "Front-end Developer",
        company_name: "Adot",
        icon: adot,
        iconBg: "#01174D",
        date: "February 2021 - March 2022",
        points: [
            "Cut and integrate the mockups into the project. Creating animations using JavaScript and CSS",
            "CDevelop animations using JavaScript and CSS. Testing advertising campaigns, debugging, and online deployment",
            "Test advertising campaigns, debug issues, and deploy them online.",
        ],
        langage : [html, css, javascript, git, ]
    },
    {
        title: "Web Developer",
        company_name: "L&A project",
        icon: leta,
        iconBg: "#FFF",
        date: "September 2019 - December 2020",
        points: [
            "Attaching the API to the frontend and testing directly in the browser: Connect the API to the frontend of the application and conduct direct testing in the browser.",
            "Creating the mobile version of the application using React Native",
            "Managing the global state of the application and its changes via Redux: Implement Redux to manage the global state of the application and handle its changes.",
        ],
        langage : [typescript, react, mui, angular, git, redux]
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/MousGamee',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/moussa-sagna-724b9899/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: '3D portfolio',
        description: 'creating this beautiful website using three.js and react.js',
        link: 'https://github.com/MousGamee/3d-portfolio',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/MousGamee/snapgram',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Lives',
        description: 'Social media like Tik Tok using react native (expo)',
        link: 'https://github.com/MousGamee/lives-react-native',
        
    }
];
