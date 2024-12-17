"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { MatchDetail } from "@/components/match-detail"

const mockMatches = [
  {
    id: 1,
    type: "Ranked Solo",
    result: "Victory",
    duration: "25:30",
    timestamp: "3 hours ago",
    champion: {
      name: "Katarina",
      level: 18
    },
    kda: {
      kills: 12,
      deaths: 3,
      assists: 7
    },
    cs: 180,
    csPerMin: 7.1,
    killParticipation: "68%",
    items: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg", // trinket
    ],
    summonerSpells: [
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    runes: [
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    team1: [
      { champion: "Katarina", name: "Player1" },
      { champion: "Lee Sin", name: "Player2" },
      { champion: "Yasuo", name: "Player3" },
      { champion: "Jinx", name: "Player4" },
      { champion: "Lulu", name: "Player5" }
    ],
    team2: [
      { champion: "Zed", name: "Player6" },
      { champion: "Vi", name: "Player7" },
      { champion: "Ahri", name: "Player8" },
      { champion: "Caitlyn", name: "Player9" },
      { champion: "Thresh", name: "Player10" }
    ]
  },
  // Add more mock matches here...
]

export function MatchHistory({ name }: { name: string }) {
  const [selectedMatch, setSelectedMatch] = useState<number | null>(null)

  return (
    <div className="space-y-2">
      {mockMatches.map((match) => (
        <Card 
          key={match.id}
          className={`${
            match.result === "Victory" ? "bg-shadowIsles-800/10" : "bg-spectral-800/10"
          } hover:bg-void-700/20 cursor-pointer transition-colors`}
          onClick={() => setSelectedMatch(match.id)}
        >
          <CardContent className="p-4">
            <div className="flex items-start gap-4">
              {/* Left section - Champion info */}
              <div className="w-20 text-center">
                <div className="relative w-16 h-16 mx-auto mb-1">
                  <Image
                    src="/placeholder.svg"
                    alt={match.champion.name}
                    layout="fill"
                    className="rounded-full"
                  />
                  <div className="absolute bottom-0 right-0 bg-void-800/80 text-shadowIsles-100 text-xs px-1 rounded">
                    {match.champion.level}
                  </div>
                </div>
                <div className="text-sm text-shadowIsles-200">{match.champion.name}</div>
              </div>

              {/* Middle section - Game info */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-sm text-spectral-300">{match.type}</div>
                  <Separator orientation="vertical" className="h-4 bg-void-600" />
                  <div className="text-sm text-spectral-300">{match.timestamp}</div>
                  <Separator orientation="vertical" className="h-4 bg-void-600" />
                  <div className={`text-sm font-medium ${
                    match.result === "Victory" ? "text-shadowIsles-400" : "text-spectral-400"
                  }`}>
                    {match.result}
                  </div>
                  <div className="text-sm text-spectral-300">{match.duration}</div>
                </div>

                <div className="flex items-center gap-4 mb-3">
                  {/* KDA */}
                  <div>
                    <div className="text-sm font-medium text-shadowIsles-100">
                      {match.kda.kills} / {match.kda.deaths} / {match.kda.assists}
                    </div>
                    <div className="text-xs text-spectral-300">
                      {((match.kda.kills + match.kda.assists) / Math.max(1, match.kda.deaths)).toFixed(2)} KDA
                    </div>
                  </div>

                  {/* CS */}
                  <div>
                    <div className="text-sm font-medium text-shadowIsles-100">{match.cs} CS</div>
                    <div className="text-xs text-spectral-300">
                      {match.csPerMin} CS/min
                    </div>
                  </div>

                  {/* Kill Participation */}
                  <div>
                    <div className="text-sm font-medium text-shadowIsles-100">P/Kill {match.killParticipation}</div>
                    <div className="text-xs text-spectral-300">Kill Participation</div>
                  </div>
                </div>

                {/* Items */}
                <div className="flex gap-1 mb-3">
                  {match.items.map((item, index) => (
                    <div key={index} className="relative w-8 h-8 bg-void-700/50 rounded">
                      <Image
                        src={item}
                        alt="Item"
                        layout="fill"
                        className="rounded"
                      />
                    </div>
                  ))}
                </div>

                {/* Teams */}
                <div className="flex gap-4 text-xs">
                  <div className="flex gap-1">
                    {match.team1.map((player, index) => (
                      <div key={index} className="relative w-6 h-6">
                        <Image
                          src="/placeholder.svg"
                          alt={player.champion}
                          layout="fill"
                          className="rounded-full"
                        />
                        <div className="absolute -bottom-4 left-0 right-0 text-center truncate text-shadowIsles-200">
                          {player.name}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-1">
                    {match.team2.map((player, index) => (
                      <div key={index} className="relative w-6 h-6">
                        <Image
                          src="/placeholder.svg"
                          alt={player.champion}
                          layout="fill"
                          className="rounded-full"
                        />
                        <div className="absolute -bottom-4 left-0 right-0 text-center truncate text-shadowIsles-200">
                          {player.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right section - Summoner spells and runes */}
              <div className="flex gap-1">
                <div className="space-y-1">
                  {match.summonerSpells.map((spell, index) => (
                    <div key={index} className="relative w-6 h-6">
                      <Image
                        src={spell}
                        alt="Summoner Spell"
                        layout="fill"
                        className="rounded"
                      />
                    </div>
                  ))}
                </div>
                <div className="space-y-1">
                  {match.runes.map((rune, index) => (
                    <div key={index} className="relative w-6 h-6">
                      <Image
                        src={rune}
                        alt="Rune"
                        layout="fill"
                        className="rounded"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
      {selectedMatch && (
        <MatchDetail matchId={selectedMatch} onClose={() => setSelectedMatch(null)} />
      )}
    </div>
  )
}

