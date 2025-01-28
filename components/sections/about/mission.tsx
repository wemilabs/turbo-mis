import { RocketIcon } from "lucide-react";

export function Mission() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 p-8">
            <div className="inline-flex items-center gap-2 text-primary">
              <RocketIcon className="size-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                Our Mission
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Empowering Education Through Technology
            </h2>
            <p className="text-lg text-muted-foreground">
              Launching <span className="font-semibold">Turbo.MIS</span> has
              driven us on a mission to transform educational institutions by
              providing them with powerful, intuitive tools that streamline
              administration and enhance the learning experience.
            </p>
          </div>
          <div className="flex-1 aspect-square bg-muted/50 rounded-2xl p-8 flex items-center justify-center">
            <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
