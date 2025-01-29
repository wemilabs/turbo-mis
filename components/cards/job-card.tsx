import { ArrowRight, Briefcase } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface JobCardProps {
  id: string;
  title: string;
  category: string;
  description: string;
}

export function JobCard({ id, title, category, description }: JobCardProps) {
  return (
    <Card className="flex flex-col hover:shadow-md hover:shadow-yellow-500/50 transition-all duration-300">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Briefcase className="size-4 text-yellow-500" />
          <Badge variant="secondary">{category}</Badge>
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1" />
      <CardFooter>
        <Link
          href={`/careers/${id}`}
          className="inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 h-10 w-full px-8 group"
        >
          View Position{" "}
          <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </CardFooter>
    </Card>
  );
}
