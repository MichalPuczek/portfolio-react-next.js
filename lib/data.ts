import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaVuejs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import trekbagImg from "@/public/trekbag.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Qui suis-je",
    hash: "#about",
  },
  {
    name: "Projets",
    hash: "#projects",
  },
  {
    name: "Compétences",
    hash: "#skills",
  },
  {
    name: "Expérience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Formation Développeur Web | Spécialisation React. JS",
    location: "Ecole O'clock",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "28/03/2024 - 02/05/2024",
  },
  {
    title: "Développeur web front-end | Vue.js",
    location: "Marmelade App",
    description:
      "J'ai travaillé sur la création et la maintenance d'un outil interne pour ",
    icon: React.createElement(FaVuejs),
    date: "décembre 2020 - août 2023",
  },
  {
    title:
      "Formation Développeur fullstack JavaScript | Spécialisation React. JS",
    location: "Ecole O'clock",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "mars 2020 - septembre 2020",
  },
  {
    title: "Chef de projet amélioration continue",
    location: "SHOWROOMPRIVÉ",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "mars 2019 - février 2020",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "Cette application permet aux utilisateurs de donner leur avis publiquement aux entreprises.",
    tags: ["React", "Zustand"],
    imageUrl: corpcommentImg,
    link: "https://corpcomment-nu.vercel.app/",
  },
  {
    title: "TrekBag",
    description:
      "Cette application permet aux utilisateurs de préparer une check-list avant de partir en vacances et de ne rien oublier",
    tags: ["React", "Zustand"],
    imageUrl: trekbagImg,
    link: "https://trekbag-portfolio.vercel.app/",
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
    link: "https://trekbag-portfolio.vercel.app/",
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
    link: "https://trekbag-portfolio.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vue.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Redux",
  "Framer Motion",
  "Zustand",
] as const;
