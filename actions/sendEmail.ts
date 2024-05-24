"use server";

import React from "react";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contactFormEmail";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  if (!message || typeof message !== "string") {
    return {
      error: "Invalid message",
    };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: "Portfolio contact form <onboarding@resend.dev>",
      to: "michal.puczek@gmail.com",
      subject: "messag from contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
