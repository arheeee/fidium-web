"use client";
import Hero from "@components/modules/herocard/hero";
import SubHero from "@components/modules/herocard/subHero";
import { HOMEPAGE_QUERY } from "@utils/queries";
import { useQuery } from "@apollo/client";
import { HomePageData } from "@/types/types";

export default function Home() {
  // Loads the home page query
  const { data, loading, error } = useQuery<HomePageData>(HOMEPAGE_QUERY);

  // Perform checks and data handling to ensure data retrieval
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  if (!data || data.entries.length === 0) {
    return <p>No data found</p>;
  }

  // Access the data
  const entry = data.entries[0];

  return (
    <main className="w-full">
      {entry.pageBlocks.map((block) => {
        switch (block.__typename) {
          case 'heroBlock_Entry':
            return <Hero key={block.id} block={block} />;
          case 'subHeroBlock_Entry':
            return <SubHero key={block.id} block={block} />;
          case 'textBlock_Entry':
            return <p key={block.id}>{block.introductionText}</p>;
          default:
            return null;
        }
      })}
    </main>
  );
}