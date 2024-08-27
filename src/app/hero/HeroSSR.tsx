import React from 'react';
import Hero from "@components/modules/herocard/hero";
import SubHero from "@components/modules/herocard/subHero";
import { getHomePageQuery } from "@utils/queries";
import client from "@/lib/apolloClient";
import { HomePageData } from "@/types/types";

const getHomePageData = async (): Promise<HomePageData> => {
  const { data } = await client.query({
    query: getHomePageQuery,
    fetchPolicy: "no-cache", // Ensure fresh data is fetched
  });

  return data;
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function HeroSSR() {
  const home = await getHomePageData();

  return (
    <main className="w-full">
      {home.entries[0].pageBlocks.map((block) => {
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
