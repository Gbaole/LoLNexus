import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { RankedSolo } from "./ranked-solo"
import { RankedFlex } from "./ranked-flex"
import { ChampionStats } from "./champion-stats"
import { RecentlyPlayedWith } from "./recently-played-with"

export function SummonerProfile({ name }: { name: string }) {
  // This would normally fetch data from an API
  const mockData = {
    level: 150,
    icon: "/placeholder.svg",
  }

  return (
    <div className="space-y-4">
      <Card className="bg-void-800/30 backdrop-blur-md border-shadowIsles-600">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-shadowIsles-500">
              <Image
                src={mockData.icon}
                alt="Summoner Icon"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-shadowIsles-100">{decodeURIComponent(name)}</h2>
              <p className="text-lg text-shadowIsles-300">Level {mockData.level}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <RankedSolo />
      <RankedFlex />
      <ChampionStats />
      <RecentlyPlayedWith />
    </div>
  )
}

