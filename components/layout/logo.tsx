import Link from "next/link";
import Image from "next/image";

import TurboLogo from "@/public/images/turbo-logo.webp";

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-1">
      <Image
        src={TurboLogo}
        alt="Turbo MIS Logo"
        width={40}
        height={40}
        className="rounded-md"
      />
      <h1 className="text-2xl font-bold">
        urbo<span className="text-yellow-500 text-base">.MIS</span>
      </h1>
    </Link>
  );
}
