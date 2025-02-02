"use client";
import { Search } from "@/components/search";
import { MainNav } from "@/components/main-nav";
import { FeaturedChampions } from "@/components/featured-champions";
import { RecentMatches } from "@/components/recent-matches";
import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      <MainNav />
      <main className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-4xl font-extrabold text-center text-white">
          LoL Nexus
        </h1>
        <div className="mb-12">
          <Search />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeaturedChampions />
          <RecentMatches />
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/summoner/Faker"
            className="text-purple-300 hover:text-purple-100 underline"
          >
            View Sample Summoner Profile: Faker
          </Link>
        </div>
      </main>
    </div>
  );
}
