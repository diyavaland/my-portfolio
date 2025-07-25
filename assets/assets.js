import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import backend_icon from './backend_icon.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    backend_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/work-1.png',
    },
    {
        title: 'News Latter App',
        description: 'Mobile App',
        bgImage: '/work-2.png',
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/work-3.png',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
    },
]

export const serviceData = [
  { 
    icon: assets.web_icon, 
    title: 'Web Design', 
    description: 'Crafting responsive, modern, and SEO-friendly websites that deliver engaging user experiences.', 
    moreDetails: 'Experienced in HTML5, CSS3, JavaScript, React.js, Next.js, responsive layouts, cross-browser compatibility, and SEO optimization techniques.' 
  },
  { 
    icon: assets.mobile_icon, 
    title: 'Mobile App Development', 
    description: 'Developing high-performance, user-friendly mobile applications tailored for iOS and Android platforms.', 
    moreDetails: 'Skilled in React Native, Flutter, Firebase integration, push notifications, app store deployment, and performance optimization.' 
  },
  { 
    icon: assets.ui_icon, 
    title: 'UI/UX Design', 
    description: 'Designing intuitive interfaces that enhance user satisfaction and drive engagement.', 
    moreDetails: 'Proficient with wireframing, prototyping, user flows, Figma, Adobe XD, user testing, and accessibility standards.' 
  },
{
  icon: assets.backend_icon,  
  title: 'Backend Development',
  description: 'Building robust server-side logic and database architectures for scalable applications.',
  moreDetails: 'Proficient in Node.js, Python, SQL, REST APIs, and database systems like MongoDB and MySQL with a focus on performance and security.'
}

];


export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Diploma in Computer Programming' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const projectData = [
  {
    title: 'SQL Injection Prevention',
    description: 'Implemented parameterized queries and security testing to prevent SQL injection attacks. Used AWS S3, Redshift, and Glue for secure data handling.',
    image: '/work-1.png', 
    link: 'https://github.com/diyavaland/databaseProject'
  },
  {
    title: 'Flutter Mobile App',
    description: 'Developed a real-client cross-platform mobile app with Firebase integration for authentication and real-time database.',
    image: '/work-2.png',
    link: ''
  },
{
  title: 'Portfolio Website',
  description: 'Built a responsive portfolio using React.js and Next.js, showcasing skills in modern JavaScript, component design, and responsive layouts.',
  image: '/work-3.png',
  link: 'https://github.com/diyavaland/my-portfolio'
}

];


export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];