// lib/sendEmail.ts
import nodemailer from 'nodemailer';
import dotenv from "dotenv"

dotenv.config()
interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

export const sendEmail = async ({ to, subject, html }: EmailOptions): Promise<void> => {
  // Create a transporter object using the SMTP settings
  const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    secure: false,
    auth: {
      user: '7aa060001@smtp-brevo.com',
      pass: 'crY04Fnf8NSIZqJM',
    },
  });

  // Define email options
  const mailOptions = {
    from: '"Francis Mwaniki" <francis@mitsumidistribution.com>', // sender address
    to, // list of receivers
    subject, // Subject line
    html, // HTML body
  };

  // console.log("mailOptions", mailOptions);
  
  // Send the email
  await transporter.sendMail(mailOptions);

  console.log('Message sent: %s', mailOptions);
};