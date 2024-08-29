import VideoCards from "@/components/modules/featurecard/video-cards/VideoCards";
import { VideoCardsEntries } from "@/interfaces/featurecard/VideoCards";
import client from "@/lib/apolloClient";
import { getVideoCards } from "@/utils/queries";


export const fetchCache = "force-no-store";
const getVideoCardsEntries = async (): Promise<VideoCardsEntries> => {
  const { data } = await client.query({
    query: getVideoCards,
    fetchPolicy: "no-cache",
  });

  return data;
};

export default async function VideoCardsPage() {
  const videoCards = await getVideoCardsEntries();
  return (
   <div className="bg-slate-100">
     <VideoCards videoCards={videoCards} />
   </div>
  );
}
