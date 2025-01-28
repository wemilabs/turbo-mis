import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";

interface JobApplicationLayoutProps {
  children: React.ReactNode;
}

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
    <div className="flex flex-col min-h-screen">
      {children}
      <Footer />
    </div>
  );
}
