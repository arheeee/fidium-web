interface AwardProps {
  alt?: string | null;
  url: string;
  title: string;
}
export default function Award({ url, title, alt }: AwardProps) {
  return (
    <img
      className="w-auto h-[100px]"
      src={`${process.env.NEXT_PUBLIC_CRAFT_CMS_BASE_PATH}${url}`}
      alt={alt || title}
    />
  );
}
