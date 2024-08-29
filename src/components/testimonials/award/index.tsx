"use client";
interface AwardProps {
  alt?: string | null;
  url: string;
  title: string;
}
export default function Award({ url, title, alt }: AwardProps) {
  return <img className="w-auto h-[100px]" src={url} alt={alt || title} />;
}
