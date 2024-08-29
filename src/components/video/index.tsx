"use client";
import ReactPlayer from "react-player/lazy";
interface VideoProps {
  videoType: string;
  vimeoId?: string | null;
  youtubeId?: string | null;
  customUrl?: string | null;
  width?: string;
  height?: string;
}
export default function Video({
  videoType,
  vimeoId,
  youtubeId,
  customUrl,
  width = "100%",
  height = "50vh",
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
      width={width}
      height={height}
      style={{
        backgroundColor: "black",
      }}
      light={true}
      controls={true}
      playIcon={
        <svg
          width="100"
          height="101"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="1.5"
            width="98"
            height="98"
            rx="49"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M60.1593 52.1385C61.2968 51.3423 61.2968 49.6577 60.1593 48.8615L45.6469 38.7028C44.3214 37.775 42.5 38.7233 42.5 40.3413V60.6587C42.5 62.2767 44.3214 63.225 45.6469 62.2972L60.1593 52.1385Z"
            fill="white"
          />
        </svg>
      }
      fallback={<></>}
    />
  );
}
