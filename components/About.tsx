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
      <SectionHeading>Qui suis-je ?</SectionHeading>
      <p>
        Polonais de naissance, diplômé de Sciences Humaines et installé à Paris
        depuis 12 ans, je me suis découvert il y a 5 ans une passion pour la
        programmation. Je me suis donné les moyens de me reconvertir en suivant
        des programmes intensifs qui me permettent de maitriser aujourd'hui les
        principaux langages et frameworks du{" "}
        <span className="font-medium">développement front-end</span>.
      </p>
      <p>
        Mon baptême du feu a été au sein d'une start-up du numérique sur une
        offre en constante évolution où mes responsabilités se sont accrues au
        fur et à mesure du déploiement de l'outil Admin que j'avais développé.
      </p>
      <p>
        Je crois être <span className="italic">curieux</span> et{" "}
        <span className="italic">rigoureux</span>. Je possède également un bon{" "}
        <span className="italic">esprit analytique</span>. Ces qualités m'aident
        dans la résolution des problèmes et la recherche de nouvelles solutions.
        Je suis impatient de rejoindre une équipe de développeurs pour
        participer à la création de nouveaux projets et relever ainsi de
        nouveaux défis.
      </p>
    </motion.section>
  );
}
