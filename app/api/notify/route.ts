// pages/api/repair-product/create.ts
import { NextResponse } from "next/server";
import { sendEmail } from '@/lib/sendEmail';

export async function POST(req: Request) {
  try {
    const {username,email,message } = await req.json();

 
    const emailSubject = 'New Contact Form Submission';
    const html = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Thank you Notification</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 20px;
              color: #333;
            }
            .container {
              max-width: 600px;
              background-color: #ffffff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
              margin: 0 auto;
            }
            h1 {
              color: #333333;
              font-size: 24px;
              margin-bottom: 20px;
            }
            p {
              color: #666666;
              font-size: 16px;
              line-height: 1.5;
              margin: 10px 0;
            }
            .footer {
              text-align: center;
              margin-top: 30px;
              padding: 20px;
              background-color: #333333;
              color: #ffffff;
              border-radius: 8px;
            }
            .footer p {
              margin: 0;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Thank you</h1>
              <p>Hi Francis,</p>
            <p>
            ${username} has contacted you.
            ${email} is their email address.
            and this is their message: ${message}
            </p>
          </div>
          <div class="footer">
            <p>&copy; 2024 Francis. All rights reserved.</p>
          </div>
        </body>
      </html>
    `;
    await sendEmail({
        to: "francismwaniki630@gmail.com",
        subject: emailSubject,
        html,
      });

    return NextResponse.json({
      message: 'Success',
    });
  } catch (error) {
    console.error('Error :', error);
    return NextResponse.json({
      message: 'Failed',
      status: 500,
    });
  }
}



