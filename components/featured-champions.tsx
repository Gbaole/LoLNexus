import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const featuredChampions = [
  { name: "Lux", role: "Mage", difficulty: "Medium", winRate: "51.2%" },
  { name: "Yasuo", role: "Fighter", difficulty: "High", winRate: "49.8%" },
  { name: "Thresh", role: "Support", difficulty: "High", winRate: "50.5%" },
]

export function FeaturedChampions() {
  return (
    <Card className="bg-white/10 backdrop-blur-md border-purple-500">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-purple-300">Featured Champions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {featuredChampions.map((champion) => (
            <div key={champion.name} className="flex items-center space-x-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg"
                  alt={champion.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{champion.name}</h3>
                <div className="grid grid-cols-2 gap-x-4 text-sm">
                  <div className="text-purple-300">Role:</div>
                  <div className="text-white">{champion.role}</div>
                  <div className="text-purple-300">Difficulty:</div>
                  <div className="text-white">{champion.difficulty}</div>
                  <div className="text-purple-300">Win Rate:</div>
                  <div className="text-white">{champion.winRate}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

