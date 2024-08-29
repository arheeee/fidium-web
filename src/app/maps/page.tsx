import Map from "@/components/map";
import { getMapsQuery } from "@/utils/queries";
import client from "@/lib/apolloClient";
import { MapLocationEntry } from "@/types/types";

const getMapsLocation = async (): Promise<MapLocationEntry> => {
  const { data } = await client.query({
    query: getMapsQuery,
    fetchPolicy: "no-cache",
  });

  return data;
};

export default async function MapsPage() {
  const data = await getMapsLocation();

  return (
    <div className="container mx-auto">
      <Map locations={data} />
    </div>
  );
}
