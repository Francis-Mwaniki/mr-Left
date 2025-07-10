import React from 'react';
import { ThemeProvider } from 'next-themes';
import { Montserrat } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BotpressChat from '../components/BotpressChat';
// import theme from "@/config/theme.json";
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata = {
  title: 'Francis Mwaniki - Software Engineer',
  description: 'Portfolio of Francis Mwaniki, Software Engineer specializing in web development',
  openGraph: {
    title: 'Francis Mwaniki - Software Engineer',
    description: 'Portfolio of Francis Mwaniki, Software Engineer specializing in web development',
    images: [
      {
        url: 'https://media.licdn.com/dms/image/v2/D4D03AQGN1nx6AD9h7A/profile-displayphoto-shrink_800_800/0/1729747078942?e=1739404800&v=beta&t=Z2iTp3i71FCwfaYKG0r722E3XdVcAGcZJWA51xU4E50',
        width: 800,
        height: 800,
        alt: 'Francis Mwaniki',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Francis Mwaniki - Software Engineer',
    description: 'Portfolio of Francis Mwaniki, Software Engineer specializing in web development',
    images: ['https://media.licdn.com/dms/image/v2/D4D03AQGN1nx6AD9h7A/profile-displayphoto-shrink_800_800/0/1729747078942?e=1739404800&v=beta&t=Z2iTp3i71FCwfaYKG0r722E3XdVcAGcZJWA51xU4E50'],
    creator: '@FRANCIS90776084',
  },
};

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${montserrat.variable}`}>
        <ThemeProvider attribute="class">
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <BotpressChat />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}