import StaticCards from "@/components/modules/featurecard/static-cards/StaticCards";
import { StaticCardsEntries } from "@/interfaces/featurecard/StaticCards";
import client from "@/lib/apolloClient";
import { getStaticCards } from "@/utils/queries";

export const fetchCache = "force-no-store";
const getStaticCardsEntries = async (): Promise<StaticCardsEntries> => {
  const { data } = await client.query({
    query: getStaticCards,
    fetchPolicy: "no-cache",
  });

  return data;
};

export default async function StaticCardsPage() {
  const staticCards = await getStaticCardsEntries();
  return <StaticCards staticCards={staticCards} />;
}
