import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export function RankedFlex() {
  // Mock data
  const rankedData = {
    tier: "Platinum",
    rank: "III",
    lp: 42,
    wins: 80,
    losses: 75,
    winRate: 51.6
  }

  return (
    <Card className="bg-void-800/30 backdrop-blur-md border-shadowIsles-600">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-shadowIsles-300">Ranked Flex</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center space-x-4">
        <div className="relative w-20 h-20">
          <Image
            src="/placeholder.svg"
            alt="Platinum Rank"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div>
          <p className="text-lg font-semibold text-shadowIsles-100">{rankedData.tier} {rankedData.rank}</p>
          <p className="text-sm text-shadowIsles-300">{rankedData.lp} LP</p>
          <p className="text-sm text-spectral-300">
            {rankedData.wins}W {rankedData.losses}L ({rankedData.winRate.toFixed(1)}% WR)
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

