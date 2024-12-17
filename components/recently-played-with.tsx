import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export function RecentlyPlayedWith() {
  // Mock data
  const recentPlayers = [
    { name: "Player1", games: 5, winRate: 60 },
    { name: "Player2", games: 4, winRate: 75 },
    { name: "Player3", games: 3, winRate: 33 },
  ]

  return (
    <Card className="bg-void-800/30 backdrop-blur-md border-shadowIsles-600">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-shadowIsles-300">Recently Played With</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentPlayers.map((player) => (
            <div key={player.name} className="flex items-center space-x-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/placeholder.svg"
                  alt={player.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-shadowIsles-100">{player.name}</p>
                <p className="text-xs text-spectral-300">{player.games} games</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-shadowIsles-100">{player.winRate}% WR</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

