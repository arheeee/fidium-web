"use client";
interface TestimonialProps {
  id?: string;
  title?: string;
  name: string;
  location: string;
  content: string;
}
export default function TestimonialQuote({
  name,
  location,
  content,
}: TestimonialProps) {
  return (
    <div className="flex flex-col justify-between gap-6 bg-white px-8 py-12 rounded-[20px] h-full">
      <span
        className="text-lg"
        dangerouslySetInnerHTML={{ __html: content }}
      ></span>
      <p className="uppercase font-bold text-lg">
        {name} - {location}
      </p>
    </div>
  );
}
