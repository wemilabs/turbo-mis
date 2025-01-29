import type { Metadata } from "next";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Job Application Success | Turbo MIS",
  description: "Your job application has been successfully submitted.",
};

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <Image
        src={
          "https://static.vecteezy.com/system/resources/previews/006/126/500/non_2x/success-send-email-message-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
        }
        alt="Job Application Success"
        width={400}
        height={400}
        className="my-8 rounded-md"
      />

      <h1 className="text-4xl font-bold mb-4">Great!</h1>
      <p className="text-muted-foreground mb-8">
        Your job application has been successfully submitted.
      </p>

      <Link
        href="/"
        className="inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 h-10 px-8 group"
      >
        <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform duration-300 mr-1" />
        Go Back Home
      </Link>
    </div>
  );
}
