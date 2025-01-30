import type { Metadata } from "next";
import "./globals.css";

import { Space_Grotesk } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Interactive card details form",
  description: "Frontend Mentor | Interactive card details form",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} antialiased`}>
        <main className="grid max-h-screen grid-flow-row grid-rows-3 lg:grid-flow-col lg:grid-cols-3 lg:grid-rows-1">
          {children}
        </main>
      </body>
    </html>
  );
}
