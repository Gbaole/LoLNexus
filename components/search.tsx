"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"

export function Search() {
  const [region, setRegion] = useState("na")
  const [summonerName, setSummonerName] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (summonerName) {
      router.push(`/summoner/${encodeURIComponent(summonerName)}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className="mx-auto max-w-2xl">
      <div className="flex gap-2">
        <Select defaultValue={region} onValueChange={setRegion}>
          <SelectTrigger className="w-[180px] bg-white/10 backdrop-blur-md text-white border-purple-500">
            <SelectValue placeholder="Select region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="na">North America</SelectItem>
            <SelectItem value="euw">Europe West</SelectItem>
            <SelectItem value="kr">Korea</SelectItem>
            <SelectItem value="jp">Japan</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex-1">
          <Input
            className="bg-white/10 backdrop-blur-md text-white border-purple-500"
            placeholder="Enter summoner name..."
            value={summonerName}
            onChange={(e) => setSummonerName(e.target.value)}
          />
        </div>
        <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white">Search</Button>
      </div>
    </form>
  )
}

