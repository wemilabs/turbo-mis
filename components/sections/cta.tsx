import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-primary">
      <div className="container mx-auto max-w-7xl text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
          Ready to Transform Your Institution?
        </h2>
        <p className="text-lg text-primary-foreground/80 max-w-[600px] mx-auto">
          Join hundreds of institutions already using Turbo C-25.3 to streamline
          their operations
        </p>
        <Link
          href="#"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-secondary-foreground border border-input bg-secondary shadow-sm shadow-yellow-500 hover:bg-secondary/80 hover:text-accent-foreground h-10 px-8 group"
        >
          Start Your Free Trial{" "}
          <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </section>
  );
}
