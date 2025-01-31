import type { Metadata } from "next";
import { /*Geist,*/ Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
//   display: "swap",
//   adjustFontFallback: true,
// });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Turbo MIS | Powering the smartest academic institutions",
  description: "Next-generation school management system",
  metadataBase: new URL("https://turbo-mis.vercel.app/"),
  keywords: [
    "school management",
    "education",
    "learning management",
    "student portal",
    "teacher portal",
    "parent portal",
    "school administration",
    "academic management",
    "school software",
    "education technology",
  ],
  authors: [
    {
      name: "Wemi Labs",
      url: "https://wemilabs.vercel.app/",
    },
  ],
  creator: "Wemi Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://turbo-mis.vercel.app/",
    title: "Turbo MIS | Powering the smartest academic institutions",
    description: "Next-generation school management system",
    siteName: "Turbo MIS",
    images: [
      {
        url: "https://turbo-mis.vercel.app/images/turbo-logo.webp",
        width: 1200,
        height: 630,
        alt: "Turbo MIS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Turbo MIS | Powering the smartest academic institutions",
    description: "Next-generation school management system",
    images: ["https://turbo-mis.vercel.app/images/turbo.webp"],
    creator: "@DorianTho5",
  },
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geistMono.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange={false}
          enableSystem
        >
          {children}
          <Toaster richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
