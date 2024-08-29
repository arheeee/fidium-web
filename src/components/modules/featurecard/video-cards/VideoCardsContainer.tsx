import { VideoCard, VideoCardsPageBlock } from "@/interfaces/featurecard/VideoCards";

const VideoCardsContainer = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="grid md:grid-cols-2 gap-10">
            {children}
        </div>
    )
}

export default VideoCardsContainer