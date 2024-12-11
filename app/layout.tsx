import React from 'react';
import { ThemeProvider } from 'next-themes';
import { Montserrat } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import theme from "@/config/theme.json";
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata = {
  title: 'Francis Mwaniki - Software Developer',
  description: 'Portfolio of Francis Mwaniki, Software Engineerspecializing in web development',
  openGraph: {
    title: 'Francis Mwaniki - Software Developer',
    description: 'Portfolio of Francis Mwaniki, Software Engineerspecializing in web development',
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
    title: 'Francis Mwaniki - Software Developer',
    description: 'Portfolio of Francis Mwaniki, Software Engineerspecializing in web development',
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
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${montserrat.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <Navbar />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
              {children}
              <Toaster />
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}