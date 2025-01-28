import type { Metadata } from "next"
import { Mission } from "@/components/sections/about/mission"
import { Values } from "@/components/sections/about/values"
import { Team } from "@/components/sections/about/team"

export const metadata: Metadata = {
  title: "About | Turbo MIS",
  description:
    "Learn about Turbo MIS - The next generation learning management system.",
}

export default function About() {
  return (
    <main className="flex-1">
      <Mission />
      <Values />
      <Team />
    </main>
  )
}
