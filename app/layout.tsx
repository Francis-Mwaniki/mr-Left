// app/layout.tsx
import React from 'react';
import { ThemeProvider } from 'next-themes';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';
import { Lato } from "next/font/google";
import { Toaster } from "@/components/ui/toaster"
// const handjet = Handjet(

// );
const lato = Lato(
  {weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'] }
);
export const metadata = {
  title: 'Francis Mwaniki - Software Developer',
  description: 'Portfolio of Francis Mwaniki, Software Developer at Mitsumi Distribution',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
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