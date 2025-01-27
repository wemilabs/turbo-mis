import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import notFoundIllustration from "@/public/404-under-construction.webp";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <Image
        src={notFoundIllustration}
        alt="404 Not Found"
        width={400}
        height={400}
        className="my-8 rounded-md"
      />
      {/* <h1 className="text-4xl font-bold mb-4">Oops! Page Not Found</h1>
      <p className="text-xl text-muted-foreground mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p> */}
      <h1 className="text-4xl font-bold mb-4">Oops!</h1>
      <p className="text-xl text-muted-foreground mb-8">
        v0.1.0: the page you are looking for is currently under construction.
      </p>

      <Link
        href="/"
        className="inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 h-10 px-8 group"
      >
        <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform duration-300 mr-1" />
        Go Back Home
      </Link>
    </div>
  );
}
