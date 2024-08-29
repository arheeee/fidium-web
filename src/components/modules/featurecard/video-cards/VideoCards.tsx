"use client"
import { VideoCardsEntries, VideoCardsPageBlock } from "@/interfaces/featurecard/VideoCards";
import VideoCardsContainer from "./VideoCardsContainer";
import { filterEntryByTypeName } from "@/lib/utils";
import VideoCardContent from "./VideoCardContent";

const VideoCards = ({
  videoCards,
}: Readonly<{
  videoCards: VideoCardsEntries;
}>) => {
  const cardsEntries : VideoCardsPageBlock[] = filterEntryByTypeName(videoCards!, "videoCardBlock_Entry") as VideoCardsPageBlock[];
  return (
    <VideoCardsContainer>
    {
       cardsEntries[0].videoCard?.map((card) => <VideoCardContent key={card.id} card={card} />)! 
    }
    </VideoCardsContainer>
  )
}

export default VideoCards