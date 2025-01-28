import { HeartIcon, ShieldCheckIcon, ZapIcon } from "lucide-react";

const values = [
  {
    icon: HeartIcon,
    title: "User-Centric Design",
    description:
      "We prioritize intuitive interfaces and seamless experiences, making complex administrative tasks simple and efficient.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Security First",
    description:
      "Your data security is our top priority. We implement industry-leading security measures to protect sensitive information.",
  },
  {
    icon: ZapIcon,
    title: "Continuous Innovation",
    description:
      "We constantly evolve our platform with cutting-edge features and improvements based on user feedback and technological advancements.",
  },
];

export function Values() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Our Core Values</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These principles guide everything we do, from product development to
            customer support.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-8 shadow-sm transition-colors hover:shadow-yellow-500 duration-300 space-y-4"
            >
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <value.icon className="size-6 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
