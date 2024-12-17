import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export function ChampionStats() {
  // Mock data
  const championStats = [
    { name: "Katarina", games: 50, winRate: 58, kda: "3.2:1" },
    { name: "Zed", games: 45, winRate: 53, kda: "2.8:1" },
    { name: "Yasuo", games: 40, winRate: 51, kda: "2.5:1" },
  ]

  return (
    <Card className="bg-void-800/30 backdrop-blur-md border-shadowIsles-600">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-shadowIsles-300">Champion Stats (All Ranked)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {championStats.map((champion) => (
            <div key={champion.name} className="flex items-center space-x-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/placeholder.svg"
                  alt={champion.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-shadowIsles-100">{champion.name}</p>
                <p className="text-xs text-spectral-300">{champion.games} games</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-shadowIsles-100">{champion.winRate}%</p>
                <p className="text-xs text-spectral-300">{champion.kda} KDA</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

