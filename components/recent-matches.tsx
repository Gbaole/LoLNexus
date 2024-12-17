import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const recentMatches = [
  { summoner: "Player1", champion: "Ahri", result: "Victory", kda: "10/2/8" },
  { summoner: "Player2", champion: "Zed", result: "Defeat", kda: "5/7/3" },
  { summoner: "Player3", champion: "Leona", result: "Victory", kda: "2/1/15" },
]

export function RecentMatches() {
  return (
    <Card className="bg-white/10 backdrop-blur-md border-purple-500">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-purple-300">Recent Matches</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-b border-purple-500">
              <TableHead className="text-purple-300">Summoner</TableHead>
              <TableHead className="text-purple-300">Champion</TableHead>
              <TableHead className="text-purple-300">Result</TableHead>
              <TableHead className="text-purple-300">KDA</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentMatches.map((match, index) => (
              <TableRow key={index} className="border-b border-purple-500/50">
                <TableCell className="text-white">{match.summoner}</TableCell>
                <TableCell className="text-white">{match.champion}</TableCell>
                <TableCell className={match.result === "Victory" ? "text-green-400" : "text-red-400"}>
                  {match.result}
                </TableCell>
                <TableCell className="text-white">{match.kda}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

