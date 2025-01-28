import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.css";

import { ThemeProvider } from "@/components/provider/theme-provider";
import { Footer } from "@/components/layout/footer";

interface JobApplicationLayoutProps {
  children: React.ReactNode;
}

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
  title: "Job Application | Turbo MIS",
  description: "Apply for a job at Turbo MIS",
  metadataBase: new URL("https://turbo-mis.vercel.app/apply-for-a-job"),
  openGraph: {
    title: "Job Application | Turbo MIS",
    description: "Apply for a job at Turbo MIS",
    url: "https://turbo-mis.vercel.app/apply-for-a-job",
    siteName: "Turbo MIS",
    images: [
      {
        url: "https://turbo-mis.vercel.app/og.png",
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
    title: "Job Application | Turbo MIS",
    description: "Apply for a job at Turbo MIS",
    images: ["https://turbo-mis.vercel.app/og.png"],
  },
};

export default function JobApplicationLayout({
  children,
}: JobApplicationLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange={false}
          enableSystem
        >
          <div className="flex flex-col min-h-screen">
            {children}
            <Analytics />
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
