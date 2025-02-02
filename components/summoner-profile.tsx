"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { RankedSolo } from "./ranked-solo";
import { RankedFlex } from "./ranked-flex";
import { ChampionStats } from "./champion-stats";
import { RecentlyPlayedWith } from "./recently-played-with";
import { useSuspenseQuery } from "@tanstack/react-query";
import createSummonerProfileOptions from "@/util/queryOptions/createSummonerProfileOptions";
export function SummonerProfile({ name }: { name: string }) {
  // This would normally fetch data from an API
  const mockData = {
    level: 150,
    icon: "/placeholder.svg",
  };
  const puuid =
    "PwJfUvlG7yAnjftkdTTgJpKOAIDJ7xm9jWyZ61SYe_X0_7heR5_gziUAiL7XcZY5ZF_XBiNkcPHESQ";
  const { data, isPending } = useSuspenseQuery(
    createSummonerProfileOptions(puuid)
  );

  return (
    <div className="space-y-4">
      <Card className="bg-void-800/30 backdrop-blur-md border-shadowIsles-600">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-shadowIsles-500">
              <Image
                src="/placeholder.svg"
                alt={`Icon profile ${data?.LoL.profileIconId}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-shadowIsles-100">
                {decodeURIComponent(data.gameName)} #{data.tagLine}
              </h2>
              <p className="text-lg text-shadowIsles-300">
                Level {data.LoL.summonerLevel}
              </p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                Update Profile
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
      <RankedSolo />
      <RankedFlex />
      <ChampionStats />
      <RecentlyPlayedWith />
    </div>
  );
}
