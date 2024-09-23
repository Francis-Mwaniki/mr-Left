import React from 'react';
import { ThemeProvider } from 'next-themes';
import { Oswald } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import theme from "@/config/theme.json";
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
export const metadata = {
  title: 'Francis Mwaniki - Software Developer',
  description: 'Portfolio of Francis Mwaniki, Software Developer at Mitsumi Distribution',
};
const oswald = Oswald({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
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
      <body className={`${oswald.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
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