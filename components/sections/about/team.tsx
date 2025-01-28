import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "cuttypie.dev",
    role: "Founder & CEO",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    bio: "Former educator turned tech entrepreneur, passionate about transforming education through technology.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "https://randomuser.me/api/portraits/men/16.jpg",
    bio: "Tech veteran with 15+ years of experience in building scalable educational software solutions.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Product",
    image: "https://randomuser.me/api/portraits/women/18.jpg",
    bio: "Product strategist focused on creating intuitive and impactful educational tools.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
];

export function Team() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dedicated professionals working to revolutionize educational
            management.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-muted/50 rounded-xl p-6 text-center space-y-4"
            >
              <div className="relative size-32 mx-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
              </div>
              <p className="text-muted-foreground">{member.bio}</p>
              <div className="flex justify-center gap-4">
                <Button size="icon" variant="ghost">
                  <TwitterIcon className="size-4" />
                </Button>
                <Button size="icon" variant="ghost">
                  <LinkedinIcon className="size-4" />
                </Button>
                <Button size="icon" variant="ghost">
                  <GithubIcon className="size-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
