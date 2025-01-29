import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";

interface JobApplicationLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Job Application | Turbo MIS",
  description: "Apply for a job at Turbo MIS",
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
