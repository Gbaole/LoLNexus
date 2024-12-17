import Link from "next/link"
import { Button } from "@/components/ui/button"

export function MainNav() {
  return (
    <nav className="bg-void-800/30 backdrop-blur-md text-shadowIsles-100">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-shadowIsles-300">
            LoL Nexus
          </Link>
          <div className="flex space-x-4">
            <Button variant="ghost" className="text-shadowIsles-100 hover:text-shadowIsles-300">
              Champions
            </Button>
            <Button variant="ghost" className="text-shadowIsles-100 hover:text-shadowIsles-300">
              Leaderboards
            </Button>
            <Button variant="ghost" className="text-shadowIsles-100 hover:text-shadowIsles-300">
              Pro Matches
            </Button>
            <Button variant="ghost" className="text-shadowIsles-100 hover:text-shadowIsles-300">
              Stats
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

