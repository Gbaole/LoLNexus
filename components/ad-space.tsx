import { Card, CardContent } from "@/components/ui/card"

interface AdSpaceProps {
  width: string
  height: string
}

export function AdSpace({ width, height }: AdSpaceProps) {
  return (
    <Card className="bg-void-800/30 backdrop-blur-md border-shadowIsles-600">
      <CardContent className="p-4 flex items-center justify-center">
        <div 
          style={{ width, height }}
          className="bg-gradient-to-r from-shadowIsles-700 to-spectral-700 flex items-center justify-center text-shadowIsles-100 font-bold"
        >
          Ad Space
        </div>
      </CardContent>
    </Card>
  )
}

