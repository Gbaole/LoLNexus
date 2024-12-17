import { MainNav } from "@/components/main-nav"
import { SummonerProfile } from "@/components/summoner-profile"
import { MatchHistory } from "@/components/match-history"
import { AdSpace } from "@/components/ad-space"

export default function SummonerPage({ params }: { params: { name: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-void-900 via-void-800 to-shadowIsles-900">
      <MainNav />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-8">
            <SummonerProfile name={params.name} />
            <AdSpace width="100%" height="250px" />
          </div>
          <div className="lg:col-span-2 space-y-8">
            <AdSpace width="100%" height="100px" />
            <MatchHistory name={params.name} />
            <AdSpace width="100%" height="250px" />
          </div>
        </div>
      </main>
    </div>
  )
}

