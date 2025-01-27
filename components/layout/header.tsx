import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex max-w-7xl items-center mx-auto py-5 px-4 md:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold">
            Turbo<span className="text-yellow-500 text-base">.MIS</span>
          </h1>
        </Link>
        <nav className="flex flex-1 items-center justify-end space-x-6">
          <Link
            href="/features"
            className="hidden sm:inline-block text-sm font-medium hover:text-yellow-500"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="hidden sm:inline-block text-sm font-medium hover:text-yellow-500"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="hidden sm:inline-block text-sm font-medium hover:text-yellow-500"
          >
            About
          </Link>
          <Link
            href="/signin"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-xs rounded-md font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary border border-input bg-background shadow-xs shadow-yellow-500 hover:bg-accent hover:text-accent-foreground h-8 px-3"
          >
            Sign In
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
