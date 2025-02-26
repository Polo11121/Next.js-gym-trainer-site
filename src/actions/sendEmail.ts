"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({
  name,
  email,
  phone,
  message,
}: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  try {
    await resend.emails.send({
      from: email,
      to: "habantmonika@gmail.com",
      subject: `Nowa wiadomość od ${name}`,
      text: `Od: ${name} \nEmail: ${email} \nTelefon: ${phone} \n\nWiadomość:\n${message}`,
    });

    return { success: true, message: "E-mail wysłany!" };
  } catch (error) {
    console.error("Błąd:", error);
    return { success: false, message: "Wystąpił błąd." };
  }
}
