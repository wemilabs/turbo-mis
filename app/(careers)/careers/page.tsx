import { Metadata } from "next";
import { Briefcase } from "lucide-react";
import { JobCard } from "@/components/cards/job-card";
import jobPositions from "@/data/job-positions.json";
import { jobDescriptions } from "@/data/job-descriptions";

export const metadata: Metadata = {
  title: "Careers | Turbo MIS",
  description: "Join our team and help build the future of education.",
};

export default function Jobs() {
  return (
    <div className="flex-1 bg-background">
      <div className="relative h-[400px] bg-gradient-to-r from-primary to-primary/50">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              "url('https://nsia.com.ng/wp-content/uploads/2023/11/careers-1.png')",
          }}
        />
        <div className="relative container mx-auto max-w-7xl h-full flex flex-col justify-center px-4 text-primary-foreground">
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="size-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Careers
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Join Our Mission
          </h1>
          <p className="md:text-lg text-primary-foreground/80 max-w-[600px]">
            Help us transform education through technology. We are looking for
            passionate individuals to join our growing team.
          </p>
        </div>
      </div>

      {/* Jobs Grid */}
      <section className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobPositions.positions.map((position) => (
            <JobCard
              key={position.id}
              id={position.id}
              title={position.title}
              category={position.category}
              description={
                jobDescriptions[position.id]?.description ??
                "Join our team and make an impact in education technology."
              }
            />
          ))}
        </div>
      </section>
    </div>
  );
}
