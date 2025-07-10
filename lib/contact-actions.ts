"use server"

import { Resend } from "resend"

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    await resend.emails.send({
      from: `Portfolio Contact <onboarding@resend.dev>`,
      to: ["francis@mitsumidistribution.com"],
      subject: subject || "New Contact Message",
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b><br/>${message.replace(/\n/g, '<br/>')}</p>`
    })
    return { success: true }
  } catch (err) {
    return { success: false }
  }
} 