import ReactPlayer from "react-player";
interface VideoProps {
  videoType: string;
  vimeoId?: string | null;
  youtubeId?: string | null;
  customUrl?: string | null;
}
export default function Video({
  videoType,
  vimeoId,
  youtubeId,
  customUrl,
}: VideoProps) {
  let url = "";
  switch (videoType) {
    case "youtubeOption":
      url = `https://www.youtube.com/watch?v=${youtubeId}`;
      break;
    case "vimeoOption":
      url = `https://vimeo.com/${vimeoId}`;
      break;
    case "html5Option":
      url = customUrl
        ? `${process.env.NEXT_PUBLIC_CRAFT_CMS_BASE_PATH}${customUrl}`
        : "";
      break;
  }

  return (
    <ReactPlayer
      url={url}
      width="100%"
      height="100%"
      light={true}
      controls={true}
    />
  );
}
