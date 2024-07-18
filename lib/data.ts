import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaVuejs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import trekbagImg from "@/public/trekbag.png";
import petdaycareImg from "@/public/petdaycare.png";
import eventoImg from "@/public/evento.png";

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
    location: "Ecole O’clock, labellisée Grande Ecole du Numérique",
    description: "React, Redux, Next.js",
    icon: React.createElement(LuGraduationCap),
    date: "mars 2024 - mai 2024",
  },
  {
    title: "Développeur web front-end | Vue.js",
    location: "Marmelade App",
    description:
      "J'ai travaillé sur la création et la maintenance d'un outil interne destiné au suivi des utilisateurs et à la gestion du conentu sur l'application mobile",
    icon: React.createElement(FaVuejs),
    date: "décembre 2020 - août 2023",
  },
  {
    title:
      "Formation Développeur fullstack JavaScript | Spécialisation React. JS",
    location: "Ecole O’clock, labellisée Grande Ecole du Numérique",
    description:
      "Après 6 mois d'études intensives, j'ai terminé la formation et décroché un premier emploi de développeur web",
    icon: React.createElement(LuGraduationCap),
    date: "mars 2020 - septembre 2020",
  },
  {
    title: "Chef de projet amélioration continue",
    location: "SHOWROOMPRIVÉ",
    description:
      "Analyse des besoins des clients et suivi du projet, élaborations des cahiers des charges, conception d'ateliers et animation de réunions",
    icon: React.createElement(CgWorkAlt),
    date: "mars 2019 - février 2020",
  },
] as const;

export const projectsData = [
  {
    title: "Pet Daycare",
    description:
      "Cette plateforme vous permettra de suivre facilement les animaux que vous accueillez",
    tags: [
      "Next.js",
      "Typescript",
      "React",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "Next-auth",
      "Shadcn UI",
      "ZOD",
    ],
    imageUrl: petdaycareImg,
    link: "https://petdaycare.vercel.app/",
  },
  {
    title: "Evento",
    description: "Ce site vous aidera à trouver des événements autour de vous",
    tags: [
      "Next.js",
      "Typescript",
      "React",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Framer motion",
      "ZOD",
    ],
    imageUrl: eventoImg,
    link: "https://evento-wine.vercel.app/",
  },
  {
    title: "CorpComment",
    description:
      "Cette application permet aux utilisateurs de donner publiquement leurs avis sur les entreprises",
    tags: ["Vite", "React", "Zustand", "Tailwind CSS"],
    imageUrl: corpcommentImg,
    link: "https://corpcomment-nu.vercel.app/",
  },
  {
    title: "rmtDev",
    description:
      "Ce site permet de trouver un emploi à distance pour les développeurs web",
    tags: ["React", "TypeScript", "Vite", "CSS"],
    imageUrl: rmtdevImg,
    link: "https://rmtdev-ten.vercel.app/",
  },
  {
    title: "TrekBag",
    description:
      "Cette application permet aux utilisateurs de préparer une check-list avant de partir en vacances et de ne rien oublier",
    tags: ["React", "Zustand", "CSS"],
    imageUrl: trekbagImg,
    link: "https://trekbag-portfolio.vercel.app/",
  },
  {
    title: "Word Analytics",
    description:
      "Cette application permet une analyse rapide du texte : le nombre de mots, le nombre de caractères et les limites de publication sur les réseaux sociaux",
    tags: ["React", "Vite", "CSS"],
    imageUrl: wordanalyticsImg,
    link: "https://wordanalytics-ruddy.vercel.app/",
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
  "Tailwind CSS",
  "Redux",
  "Framer Motion",
  "Zustand",
  "ZOD",
  "Next-auth",
] as const;
