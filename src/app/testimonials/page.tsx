import { getTestimonialsQuery } from "@/utils/queries";
import client from "@/lib/apolloClient";
import { HomePageData } from "@/types/types";
import Testimonials from "@/components/testimonials";

const getTestimonials = async (): Promise<HomePageData> => {
  const { data } = await client.query({
    query: getTestimonialsQuery,
    fetchPolicy: "no-cache",
  });

  return data;
};

export default async function TestimonialsPage() {
  const data = await getTestimonials();

  const entry = data.entries[0];

  const testimonial = entry.pageBlocks.find(
    (block) => block.__typename === "testimonialBlock_Entry",
  );

  if (!testimonial) {
    return <p>No data found</p>;
  }

  return (
    <div className="max-w-full relative flex flex-col items-center justify-center bg-[#EBECF2]">
      <Testimonials testimonial={testimonial} />
    </div>
  );
}
