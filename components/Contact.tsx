"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import { useSectionInView } from "@/lib/hooks";
// Components
import SectionHeading from "./SectionHeading";
import SubmitBtn from "./SubmitBtn";
import toast from "react-hot-toast";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Entrons en contact !</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Vous pouvez m'adresser un message directement depuis ce formulaire
        ci-dessous, ou encore me joindre par mail ou par téléphone.
      </p>
      <p className="flex items-center justify-center">
        <span className="mr-2"></span>
        <a className="underline" href="mailto:michal.puczek@gmail.com">
          michal.puczek@gmail.com
        </a>{" "}
      </p>
      <p className="flex items-center justify-center">
        <span className="mr-2">📞</span>
        <span>+33 6 80 08 30 03</span>
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
          setEmail("");
          setMessage("");
        }}
      >
        <input
          type="email"
          name="senderEmail"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Votre email"
          required
          maxLength={500}
        />
        <textarea
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Votre message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
