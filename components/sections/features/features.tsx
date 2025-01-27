import {
  BookOpen,
  Users,
  Calendar,
  BrainCircuit,
  Wallet,
  ArrowRight,
} from "lucide-react";
import { FeatureCard } from "./feature-card";
import Link from "next/link";

export function Features() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
            Powerful features designed to make education management simple and
            effective
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={BookOpen}
            title="Course Management"
            description="Create and manage courses with ease. Track progress and assignments efficiently."
          />
          <FeatureCard
            icon={Users}
            title="Student Portal"
            description="Give students access to their courses, grades, and resources in one place."
          />
          <FeatureCard
            icon={Calendar}
            title="Scheduling"
            description="Organize classes, events, and deadlines with our intuitive calendar system."
          />
          <FeatureCard
            icon={Users}
            title="Teacher Portal"
            description="Give teachers access to their courses, grades, and resources in one place."
          />
          <FeatureCard
            icon={Wallet}
            title="Accounting"
            description="Manage student accounts, payments, and enrollment with ease."
          />
          <FeatureCard
            icon={BrainCircuit}
            title="Embedded Intelligence Engine"
            description="Intelligent automation to streamline tasks and optimize workflows."
          />
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/features"
            className="underline text-primary hover:text-primary/90 flex items-center justify-center gap-1 group"
          >
            Discover more
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
