"use client";

import React from "react";
import { motion } from "framer-motion";
// Components
import SectionHeading from "./SectionHeading";
// Functions, hooks
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Qui suis-je");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      id="about"
    >
      <SectionHeading>Qui suis-je</SectionHeading>
      <p>
        Après m'être découvert une passion pour la programmation, j’ai décidé de
        me plonger dans ce nouveau monde et de me reconvertir. Après 5 mois
        d’une formation très intensive{" "}
        <span className="font-medium">full-stack web development</span> à{" "}
        <span className="font-medium">o'Clock</span>, une école labellisée
        Grande Ecole du Numérique et la réalisation de quelques premiers
        projets, j'ai obtenu mon premier post dans une start-up innovante. Après
        presque trois ans de travail en tant que
        <span className="font-medium">développeur front Vue.js</span>, j'ai
        décidé de changer de cap et rejoindre la team{" "}
        <span className="font-medium">React</span>. Pour bien entamer cette
        nouvelle étape dans ma carrière, j'ai effectué une nouvelle formation
        <span className="font-medium"> React</span> chez o'Clock.
      </p>
      <p>
        <span className="italic">Curieux et rigoureux</span>, je possède un
        <span className="italic"> esprit analytique</span>. Ces qualités
        m'aident dans la résolution des problèmes et la recherche de nouvelles
        solutions. Ma motivation est au zénith, je suis impatient de rejoindre
        une équipe de développeurs pour participer à la création de nouveaux
        projets et relever ainsi de nouveaux défis.
      </p>
    </motion.section>
  );
}
