import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BriefcaseIcon,
  CheckCircle2Icon,
  HeartIcon,
  ListChecksIcon,
  StarIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getJobData } from "@/app/actions/get-job-data";

interface PageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  if (!id) return {};

  const data = await getJobData(id);
  if (!data.position) return {};

  return {
    title: `${data.position.title} | Careers at Turbo MIS`,
    description:
      data.details?.description ??
      "Join our team and help build the future of education.",
  };
}

export default async function JobDetail({ params }: PageProps) {
  const { id } = await params;
  if (!id) notFound();

  const { position, details } = await getJobData(id);
  if (!position) notFound();

  return (
    <main className="flex-1">
      <div className="relative h-[400px] bg-gradient-to-r from-primary to-primary/50">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              "url('https://nsia.com.ng/wp-content/uploads/2023/11/careers-1.png')",
          }}
        />
        <div className="relative container mx-auto max-w-7xl h-full flex flex-col justify-center px-4">
          <div className="flex flex-col gap-8">
            <Link
              href="/careers"
              className="underline text-background hover:text-background/90 flex items-center gap-1 group"
            >
              <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Careers
            </Link>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <BriefcaseIcon className="size-5 text-primary-foreground" />
                <Badge variant="secondary">{position.category}</Badge>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
                {position.title}
              </h1>

              <p className="md:text-lg text-primary-foreground/80 max-w-[600px]">
                {details?.description ??
                  "Join our team and make an impact in education technology."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr,300px]">
          {/* Main Content */}
          <div className="space-y-12">
            {details?.requirements && (
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <ListChecksIcon className="w-5 h-5 text-yellow-500" />
                  <h2 className="text-2xl font-semibold">Requirements</h2>
                </div>
                <ul className="space-y-4">
                  {details.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2Icon className="w-5 h-5 text-yellow-500 mt-1 shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {details?.responsibilities && (
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <StarIcon className="w-5 h-5 text-yellow-500" />
                  <h2 className="text-2xl font-semibold">Responsibilities</h2>
                </div>
                <ul className="space-y-4">
                  {details.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2Icon className="w-5 h-5 text-yellow-500 mt-1 shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {details?.benefits && (
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <HeartIcon className="w-5 h-5 text-yellow-500" />
                  <h2 className="text-2xl font-semibold">Benefits</h2>
                </div>
                <ul className="space-y-4">
                  {details.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2Icon className="size-5 text-yellow-500 mt-1 shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-muted/50 rounded-lg p-6 space-y-6">
              <h3 className="text-lg font-semibold">Quick Apply</h3>
              <p className="text-sm text-muted-foreground">
                Ready to join our team? Apply now and we will get back to you
                soon.
              </p>
              <Link
                href={`/careers/${id}/apply`}
                className="inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-background shadow-sm hover:bg-primary/90 h-10 w-full px-8"
              >
                Apply Now
              </Link>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Share this position</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <LinkedInIcon className="size-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <TwitterIcon className="size-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <MailIcon className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Social Icons Components
function LinkedInIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function MailIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
