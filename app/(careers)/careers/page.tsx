import { Metadata } from "next";
import { Suspense } from "react";
import { SearchJobs } from "@/components/careers/search-jobs";
import { JobsList } from "@/components/careers/jobs-list";

export const metadata: Metadata = {
  title: "Careers | Turbo MIS",
  description: "Join our team and help build the future of education.",
};

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function CareersPage({ searchParams }: PageProps) {
  // Get the search query from URL params
  const params = await searchParams;
  const query = typeof params.position === "string" ? params.position : "";

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-primary to-primary/50">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              "url('https://nsia.com.ng/wp-content/uploads/2023/11/careers-1.png')",
          }}
        />
        <div className="relative container mx-auto max-w-7xl h-full flex flex-col justify-center px-4">
          <div className="max-w-[600px] space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Join Our Team
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Help us build the future of education. We're looking for talented
              individuals who are passionate about making a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="container mx-auto max-w-7xl px-4 py-16">
        <div className="max-w-[400px] mb-8">
          <SearchJobs />
        </div>
        <Suspense fallback={<JobsListSkeleton />}>
          <JobsList searchQuery={query} />
        </Suspense>
      </section>
    </div>
  );
}

function JobsListSkeleton() {
  return (
    <div className="space-y-6">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="animate-pulse rounded-lg border p-6 space-y-4">
          <div className="h-4 w-1/4 bg-muted rounded" />
          <div className="h-8 w-3/4 bg-muted rounded" />
          <div className="h-4 w-2/3 bg-muted rounded" />
        </div>
      ))}
    </div>
  );
}
