"use client";
import './globals.css';
import type { ReactNode } from 'react';
import ParticlesBackground from '../components/ParticlesBackground';

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ParticlesBackground />
        <main className="relative z-10 flex flex-col min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
