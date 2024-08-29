import Video from "@/components/video"
import { VideoCard } from "@/interfaces/featurecard/VideoCards"
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

const VideoCardContent = ({
    card
}: Readonly<{
    card: VideoCard
}>) => {

    const videoUrl = card.videoCardHtml5Video ? card.videoCardHtml5Video[0]?.url : null;
    return (
        <Card className="rounded-3xl" key={card.id}>
            <CardActionArea>
            <Video videoType={card.videoCardType} vimeoId={card.videoCardVimeoId} youtubeId={card.videoCardYoutubeId} customUrl={videoUrl} />
                <CardContent className="p-10">
                    <Typography gutterBottom variant="h5" component="div">
                        {card.videoCardHeading}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component="div">
                        {card.videoCardSubHeader}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component="div">
                        {card.videoCardSubText}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default VideoCardContent