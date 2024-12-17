import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export function MatchDetail({ matchId, onClose }: { matchId: number; onClose: () => void }) {
  // This would normally fetch data from an API based on the matchId
  const mockMatchDetail = {
    champion: "Katarina",
    result: "Victory",
    kda: "12/3/7",
    cs: 180,
    duration: "25:30",
    build: [
      { name: "Hextech Rocketbelt", image: "/placeholder.svg" },
      { name: "Sorcerer's Shoes", image: "/placeholder.svg" },
      { name: "Zhonya's Hourglass", image: "/placeholder.svg" },
      { name: "Rabadon's Deathcap", image: "/placeholder.svg" },
      { name: "Void Staff", image: "/placeholder.svg" },
      { name: "Morellonomicon", image: "/placeholder.svg" },
    ],
    skillOrder: ["Q", "E", "W", "Q", "Q", "R", "Q", "E", "Q", "E", "R", "E", "E", "W", "W"],
    runes: {
      primary: [
        { name: "Electrocute", image: "/placeholder.svg" },
        { name: "Sudden Impact", image: "/placeholder.svg" },
        { name: "Eyeball Collection", image: "/placeholder.svg" },
        { name: "Ravenous Hunter", image: "/placeholder.svg" },
      ],
      secondary: [
        { name: "Triumph", image: "/placeholder.svg" },
        { name: "Coup de Grace", image: "/placeholder.svg" },
      ],
    },
  }

  return (
    <Dialog open={true} onOpenChange={() => onClose()}>
      <DialogContent className="bg-gray-900 text-white max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-purple-300">Match Details</DialogTitle>
        </DialogHeader>
        <DialogClose />
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-purple-300">Champion:</p>
            <p className="font-semibold">{mockMatchDetail.champion}</p>
          </div>
          <div>
            <p className="text-purple-300">Result:</p>
            <p className={mockMatchDetail.result === "Victory" ? "text-green-400" : "text-red-400"}>
              {mockMatchDetail.result}
            </p>
          </div>
          <div>
            <p className="text-purple-300">KDA:</p>
            <p className="font-semibold">{mockMatchDetail.kda}</p>
          </div>
          <div>
            <p className="text-purple-300">CS:</p>
            <p className="font-semibold">{mockMatchDetail.cs}</p>
          </div>
          <div>
            <p className="text-purple-300">Duration:</p>
            <p className="font-semibold">{mockMatchDetail.duration}</p>
          </div>
        </div>
        <Tabs defaultValue="build">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="build">Build</TabsTrigger>
            <TabsTrigger value="skill-order">Skill Order</TabsTrigger>
            <TabsTrigger value="runes">Runes</TabsTrigger>
          </TabsList>
          <TabsContent value="build" className="py-4">
            <div className="grid grid-cols-6 gap-2">
              {mockMatchDetail.build.map((item, index) => (
                <div key={index} className="relative h-12 w-12">
                  <Image src={item.image} alt={item.name} layout="fill" objectFit="cover" />
                  <span className="absolute bottom-0 left-0 right-0 bg-black/50 text-xs text-center">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="skill-order" className="py-4">
            <div className="flex space-x-2">
              {mockMatchDetail.skillOrder.map((skill, index) => (
                <div key={index} className="w-8 h-8 flex items-center justify-center bg-purple-700 rounded">
                  {skill}
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="runes" className="py-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-semibold text-purple-300 mb-2">Primary</h4>
                <div className="grid grid-cols-4 gap-2">
                  {mockMatchDetail.runes.primary.map((rune, index) => (
                    <div key={index} className="relative h-12 w-12">
                      <Image src={rune.image} alt={rune.name} layout="fill" objectFit="cover" />
                      <span className="absolute bottom-0 left-0 right-0 bg-black/50 text-xs text-center">
                        {rune.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-300 mb-2">Secondary</h4>
                <div className="grid grid-cols-4 gap-2">
                  {mockMatchDetail.runes.secondary.map((rune, index) => (
                    <div key={index} className="relative h-12 w-12">
                      <Image src={rune.image} alt={rune.name} layout="fill" objectFit="cover" />
                      <span className="absolute bottom-0 left-0 right-0 bg-black/50 text-xs text-center">
                        {rune.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

