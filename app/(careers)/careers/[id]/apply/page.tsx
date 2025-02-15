import { JobApplicationForm } from "@/components/forms/job-application-form";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function JobApplication({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="flex-1 bg-background">
      <div className="relative h-[400px] bg-gradient-to-r from-primary to-primary/50">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              "url('https://static3.bigstockphoto.com/1/5/1/large1500/151175858.jpg')",
          }}
        />
        <div className="relative container mx-auto max-w-7xl h-full flex flex-col justify-center px-4 text-primary-foreground">
          <div className="flex flex-col gap-2">
            <Link
              href={`/careers/${id}`}
              className="underline text-background hover:text-background/90 flex items-center gap-1 group pb-4"
            >
              <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform duration-300" />
              Previous
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Join Our Team
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-[600px]">
              Be part of something special. We are looking for talented
              individuals who are passionate about education and technology.
            </p>
          </div>
        </div>
      </div>

      {/* Application Form Section */}
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <div className="bg-card rounded-lg shadow-lg p-6 md:p-8">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-semibold mb-2">Apply Now</h2>
            <p className="text-muted-foreground">
              Fill out the form below to submit your application
            </p>
          </div>
          <JobApplicationForm />
        </div>
      </div>
    </div>
  );
}
