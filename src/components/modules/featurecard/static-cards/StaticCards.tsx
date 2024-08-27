"use client"
import { StaticCardsEntries, StaticCardsPageBlock } from "@/interfaces/featurecard/StaticCards";
import StaticCardsContainer from "./StaticCardsContainer";
import { filterEntryByTypeName } from "@/lib/utils";
import StaticCardContent from "./StaticCardContent";

const StaticCards = ({
  staticCards,
}: Readonly<{
  staticCards: StaticCardsEntries;
}>) => {

  const cardsEntries : StaticCardsPageBlock[] = filterEntryByTypeName(staticCards!, "staticFeatureCardBlock_Entry") as StaticCardsPageBlock[];
  return (
   <StaticCardsContainer 
        cardsEntries = {cardsEntries}
    >
    {
       cardsEntries[0].staticFeatureCard?.map((card) => <StaticCardContent key={card.id} card={card} />)! 
    }
   </StaticCardsContainer>
  )
}

export default StaticCards