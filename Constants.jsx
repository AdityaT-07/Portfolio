import React from "react";
import {
  Code2,
  Layers,
  Wrench,
  Cloud,
  Database,
  Github,
  Linkedin,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";

export const SOCIAL_LINKS = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    href: "mailto:adityathakur6076@email.com",
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    label: "Mobile",
    href: "https://wa.me/qr/MZIICFFKZIPHE1",
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aditya-thakur-4b34b230a",
  },
  {
    icon: <Github className="w-5 h-5" />,
    label: "GitHub",
    href: "https://github.com/AdityaT-07",
  },
];


export const PROJECTS = [
  {
    id: "1",
    title: "Departmental Portal",
    description:
      "A comprehensive management system for college departments handling student data, faculty coordination, and event tracking.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "#",
    image: "/images/ITportal.jpg",
  },
  {
    id: "2",
    title: "Real-Time Chat App",
    description:
      "High-performance messaging platform with instant delivery, image sharing via Cloudinary, and secure JWT authentication.",
    tech: ["Socket.IO", "React", "JWT", "Cloudinary"],
    github: "https://github.com/AdityaT-07/realtime-chat-app",
    image: "/images/realtime.jpg",
  },
  {
    id: "3",
    title: "Study Planner",
    description:
      "Smart scheduling assistant with an analytics dashboard to track learning progress and optimize study hours.",
    tech: ["React", "Tailwind CSS", "Node JS", "Chart.js"],
    github: "https://github.com/AdityaT-07/study-planner",
    image: "/images/studyplanner.jpg",
  },
  {
    id: "4",
    title: "Site Master",
    description:
      "Construction field management tool designed for mobile-first usage to track site progress and resource allocation.",
    tech: ["React", "PWA", "Firebase", "Material UI"],
    github: "https://github.com/AdityaT-07/site-master",
    image: "/images/sitemaster.avif",
  },
];


export const SKILLS = [
  { name: "JavaScript", level: 90, icon: "Code2", category: "Language" },
  { name: "C++", level: 85, icon: "Code2", category: "Language" },
  { name: "Python", level: 80, icon: "Code2", category: "Language" },
  { name: "React", level: 88, icon: "Layers", category: "Framework" },
  { name: "Node.js", level: 82, icon: "Layers", category: "Framework" },
  { name: "Express.js", level: 80, icon: "Layers", category: "Framework" },
  { name: "Git/GitHub", level: 90, icon: "Wrench", category: "Tool" },
  { name: "Docker", level: 90, icon: "Wrench", category: "Tool" },
  { name: "Postman", level: 85, icon: "Wrench", category: "Tool" },
  { name: "MySQL", level: 80, icon: "Database", category: "Cloud" },
  { name: "MongoDB", level: 82, icon: "Database", category: "Cloud" },
  { name: "AWS", level: 70, icon: "Cloud", category: "Cloud" },
  { name: "PostgreSQL", level: 70, icon: "Cloud", category: "Cloud" },
];


export const EXPERIENCES = [
  {
    company: "Ignitech",
    role: "Python Intern",
    duration: "Jun 2023 - Aug 2023",
    description: [
      "Developed email automation scripts using Python to streamline client communication.",
      "Implemented NLP techniques for basic sentiment analysis of incoming customer feedback.",
      "Integrated third-party APIs for data synchronization across platforms.",
    ],
    skills: ["Python", "API Integration", "Automation"],
  },
  {
    company: "Infinity Forum GPT",
    role: "Vice Chairman",
    duration: "Aug 2023 - Apr 2024",
    description: [
      "As Vice Chairman of the Infinity Forum, I played a key role in planning, organizing, and managing technical and professional events.",
      "I coordinated with teams, speakers, and faculty to ensure smooth execution of sessions and initiatives.",
      "This role strengthened my leadership, communication, and event-management skills while contributing to a collaborative student community.",
    ],
    skills: ["Leadership", "Event Management", "JavaScript"],
  },
];
