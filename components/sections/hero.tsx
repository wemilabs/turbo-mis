import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-24 pb-20 px-4 md:px-6 lg:px-8 space-y-10">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center space-y-4 pt-8">
          <span className="text-sm text-primary font-medium -tracking-tight bg-yellow-500/55 px-4 py-2 rounded-full">
            Introducing Turbo C-25.3 v0.1.0
          </span>

          <h1 className="mt-8 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter">
            Powering the{" "}
            <span className="block -mt-2 bg-gradient-to-l from-yellow-500/10 via-yellow-500 to-yellow-500/10 bg-clip-text text-transparent">
              smartest academic institutions
            </span>
          </h1>
          <p className="max-w-xl mx-auto mt-4 lg:text-lg text-muted-foreground">
            The most powerful, fast and effective learning management system
            ever made.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 h-10 px-8 group"
            >
              Get Started{" "}
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary border border-input bg-background shadow-xs shadow-yellow-500 hover:bg-accent hover:text-accent-foreground h-10 px-8"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
