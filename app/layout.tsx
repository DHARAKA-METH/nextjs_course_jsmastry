import "./globals.css";
import React from "react";

import type { Metadata } from "next";
// eslint-disable-next-line camelcase
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

const inter = Inter({
  subsets: ["latin"], // Specify the subsets you want
  weight: ["400", "700"], // Choose font weights
  variable: "--font-inter", // Optional: Define a CSS variable
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"], // Specify the subsets you want
  weight: ["400", "500", "600", "700"], // Choose font weights
  variable: "--font-space-grotesk", // Optional: Define a CSS variable
});

export const metadata: Metadata = {
  title: "Dev Overflow",
  description:
    "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
  icons: {
    icon: "/images/site-logo.svg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session =await auth()

  return (
    <html lang="en" suppressHydrationWarning>
      <SessionProvider>
      <body
        className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      <Toaster/>
      </body>
      </SessionProvider>
    </html>
  );
}
