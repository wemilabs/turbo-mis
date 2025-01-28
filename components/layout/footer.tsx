import Link from "next/link";

const footerLinks = {
  product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
  ],
  resources: [
    { label: "Documentation", href: "/docs" },
    { label: "Blog", href: "/blog" },
    { label: "Support", href: "/support" },
  ],
  company: [
    { label: "Jobs", href: "/apply-for-a-job" },
    { label: "Contact", href: "/contact" },
    { label: "Terms & Privacy", href: "/legal" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto max-w-7xl py-12 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold">
                Turbo<span className="text-yellow-500 text-base">.MIS</span>
              </h1>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Making education management simple and effective
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold capitalize mb-3">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Wemi Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
