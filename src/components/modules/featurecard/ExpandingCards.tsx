import FeatureCardContainer from "./FeatureCardContainer";
import FeatureCardContent from "./FeatureCardContent";
import { filterEntryByTypeName } from "@/lib/utils";
import { FeatureCardElem, ExpandingCardsEntries, ExpandableCardsPageBlock } from "@/interfaces/featurecard/ExpandingCards";

const ExpandingCards = ({
    featureExpandibleCards,
  }: Readonly<{
    featureExpandibleCards: ExpandingCardsEntries;
  }>) => {
    const cardsEntries: ExpandableCardsPageBlock[] = filterEntryByTypeName(featureExpandibleCards!, "featureCardBlock_Entry") as ExpandableCardsPageBlock[];
    return <FeatureCardContainer
    isBlockElement={false}>
       {
        cardsEntries[0].featureCard?.map((card) => <FeatureCardContent cardFeature={card} />)! 
       }
    </FeatureCardContainer>

}

export default ExpandingCards