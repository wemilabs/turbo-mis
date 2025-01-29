import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.css";

import { ThemeProvider } from "@/components/provider/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  adjustFontFallback: true,
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  adjustFontFallback: true,
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Turbo MIS | Powering the smartest academic institutions",
  description: "A fast and easy-to-use learning management system.",
  metadataBase: new URL("https://turbo-mis.vercel.app/"),
  openGraph: {
    title: "Turbo MIS | Powering the smartest academic institutions",
    description: "A fast and easy-to-use learning management system.",
    url: "https://turbo-mis.vercel.app/",
    siteName: "Turbo MIS",
    images: [
      {
        url: "https://turbo-mis.vercel.app/images/turbo.webp",
        width: 1200,
        height: 630,
        alt: "Turbo MIS",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Turbo MIS | Powering the smartest academic institutions",
    description: "A fast and easy-to-use learning management system.",
    images: ["https://turbo-mis.vercel.app/images/turbo.webp"],
  },
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange={false}
          enableSystem
        >
          {children}
          <Analytics />
          <Toaster richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
