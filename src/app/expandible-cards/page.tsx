// import ExpandingCards from "@/components/modules/featurecard/ExpandingCards";
// import { ExpandingCardsEntries } from "@/interfaces/featurecard/ExpandingCards";
// import client from "@/lib/apolloClient";
// import { getExpandibleCards } from "@/utils/queries";

// const getFeaturedCards = async (): Promise<ExpandingCardsEntries> => {
//   const { data } = await client.query({
//     query: getExpandibleCards,
//   });

//   return data;
// };

// export default async function ExpandibleCardsPage() {
//   const featureExpandibleCards = await getFeaturedCards();
//   return <ExpandingCards featureExpandibleCards={featureExpandibleCards} />;
// }
