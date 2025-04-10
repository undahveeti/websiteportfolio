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
import ai_icon from './ai-icon.png';
import cloud_icon from './cloud-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import voodies_logo from './voodies_logo.png';
import vitalis_icon from './vitalis_icon.png';
import ucr_logo from './ucr-logo.png';
import jjamppong_logo from './jjamppong_logo.png';
import gatech_logo from './gatech-logo.png';
import js_icon from './javascript-icon.png';
import ts_icon from './typescript-icon.png';
import python_icon from './python-icon.png';
import java_icon from './java-icon.png';
import react_icon from './react-icon.png';
import flutter_icon from './flutter-icon.png';
import swift_icon from './swift-icon.png';
import sql_icon from './sql-icon.png';
import dart_icon from './dart-icon.png';
import cplusplus_icon from './cplusplus-icon.png';
import docker_icon from './docker-icon.png';
import supabase_icon from './supabase-icon.png';
import next_icon from './next-icon.png';
import evara_logo from './evara_logo.png';
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
    mail_icon,
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
    right_arrow_bold_dark,
    ucr_logo,
    gatech_logo,
    js_icon,
    ts_icon,
    python_icon,
    java_icon,
    react_icon,
    flutter_icon,
    swift_icon,
    sql_icon,
    dart_icon,
    cplusplus_icon,
    docker_icon,
    supabase_icon,
    next_icon,
    ai_icon,
    cloud_icon,
    vitalis_icon,
    voodies_logo,
    jjamppong_logo,
    evara_logo
};

export const workData = [
    {
        title: 'Spoiler Alert',
        description: 'AI/NLP based TV Series Analysis System',
        bgImage: '/work-1.png',
    },
    {
        title: 'Voodies',
        description: 'Food Centric Mobile App',
        bgImage: '/work-2.png',
    },
    {
        title: 'LMS for Stealth Startup',
        description: 'Industry Level Learning Management System',
        bgImage: '/work-3.png',
    },
    {
        title: 'JJamppong Zizon',
        description: 'Full Stack Website Redesign ',
        bgImage: '/work-4.png',
    },
]

export const serviceData = [
    { 
        icon: assets.web_icon, 
        title: 'Full Stack Development', 
        description: 'Building scalable web applications using React, Next.js, Node.js, and modern web technologies. Expertise in both frontend and backend development.',
        link: '' 
    },
    { 
        icon: assets.mobile_icon, 
        title: 'Mobile Development', 
        description: 'Creating cross-platform mobile applications using Flutter and native iOS development with Swift. Focus on performance and user experience.',
        link: '' 
    },
    { 
        icon: assets.ai_icon, 
        title: 'Machine Learning & AI', 
        description: 'Developing and deploying machine learning models, working with TensorFlow, and implementing AI solutions for real-world applications.',
        link: '' 
    },
    { 
        icon: assets.cloud_icon, 
        title: 'Cloud & Infrastructure', 
        description: 'Designing and implementing cloud architectures, containerization with Docker, and setting up scalable infrastructure solutions.',
        link: '' 
    }
];

export const infoList = [
    { 
        icon: assets.code_icon, 
        iconDark: assets.code_icon_dark, 
        title: 'Languages', 
        description: '',
        icons: [
            { src: assets.js_icon, alt: 'JavaScript' },
            { src: assets.ts_icon, alt: 'TypeScript' },
            { src: assets.python_icon, alt: 'Python' },
            { src: assets.java_icon, alt: 'Java' },
            { src: assets.dart_icon, alt: 'Dart' },
            { src: assets.swift_icon, alt: 'Swift' },
            { src: assets.cplusplus_icon, alt: 'C++' },
            { src: assets.sql_icon, alt: 'SQL' }
        ]
    },
    { 
        icon: assets.edu_icon, 
        iconDark: assets.edu_icon_dark, 
        title: 'Education', 
        description: '',
        logos: [
            { src: assets.ucr_logo, alt: 'UC Riverside', text: 'B.S in Computer Science' },
            { src: assets.gatech_logo, alt: 'Georgia Tech', text: 'M.S in Computer Science' }
        ]
    },
    { 
        icon: assets.project_icon, 
        iconDark: assets.project_icon_dark, 
        title: 'Projects', 
        description: 'Built more than 10 projects',
        link: '#work'
    }
];

export const toolsData = [
    // Frontend Frameworks
    { src: assets.react_icon, alt: 'React' },
    { src: assets.next_icon, alt: 'Next.js' },
    { src: assets.flutter_icon, alt: 'Flutter' },
    { src: assets.swift_icon, alt: 'Swift' },
    
    // Backend & Databases
    { src: assets.firebase, alt: 'Firebase' },
    { src: assets.mongodb, alt: 'MongoDB' },
    { src: assets.supabase_icon, alt: 'Supabase' },
    
    // Development Tools
    { src: assets.vscode, alt: 'VS Code' },
    { src: assets.git, alt: 'Git' },
    { src: assets.figma, alt: 'Figma' },
    { src: assets.docker_icon, alt: 'Docker' }
];