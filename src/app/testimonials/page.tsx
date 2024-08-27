"use client";
import { TESTIMONIALS_QUERY } from "@/utils/queries";
import { useQuery } from "@apollo/client";
import QuoteIcon from "@/components/icons/quote-icon";
import { HomePageData } from "@/types/types";
import Testimonial from "@/components/testimonials/testimonial";
import TestimonialSwiper from "@/components/testimonials/testimonialSwiper";
import Award from "@/components/testimonials/award";
import AwardSwiper from "@/components/testimonials/awardSwiper";
import Video from "@/components/testimonials/video";

export default function Testimonials() {
  const { data, loading, error } = useQuery<HomePageData>(TESTIMONIALS_QUERY);

  // Perform checks and data handling to ensure data retrieval
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  if (!data || data.entries.length === 0) {
    return <p>No data found</p>;
  }

  const entry = data.entries[0];

  const testimonial = entry.pageBlocks.find(
    (block) => block.__typename === "testimonialBlock_Entry",
  );

  if (!testimonial) {
    return <p>No data found</p>;
  }

  return (
    <div className="max-w-full relative flex flex-col items-center justify-center bg-[#EBECF2]">
      <div className="w-full py-6">
        {/* <div className="bg-brand-yellow border-[20px] absolute top-[60px] left-0 right-0 bottom-0"></div> */}
        <div className="flex flex-col z-50 pt-12">
          <div
            className={`pb-12 bg-brand-yellow
              ${testimonial.testimonialAwards.length <= 0 ? "rounded-[20px]" : "rounded-t-[20px]"}
            `}
          >
            {/* Heading */}
            <div className="px-12 flex flex-col gap-6 lg:gap-0 lg:flex-row items-center pb-16">
              {/* Testimonial Icon */}
              {!testimonial.testimonialHideIcon && (
                <div className="min-w-[120px] h-[120px] hidden lg:flex rounded-full bg-gradient-to-r from-brand-green to-brand-lime flex-col items-center justify-center self-start -mt-[60px]">
                  <QuoteIcon />
                </div>
              )}
              <div className="lg:px-12 pt-12 grow self-end">
                <p
                  className={`heading text-5xl font-bold leading-[3.3rem]
                    ${!testimonial.addTestimonialVideo ? "text-center" : ""}
                  `}
                >
                  {testimonial.testimonialHeader}
                </p>
                <p
                  className={`subheading text-lg my-4 ${!testimonial.addTestimonialVideo ? "text-center" : ""}`}
                >
                  {testimonial.testimonialSubHeader}
                </p>
              </div>
              {testimonial.addTestimonialVideo && (
                <div className="min-w-full h-[320px] lg:min-w-[650px] md:h-[360px] lg:h-[400px] rounded-[20px] overflow-hidden relative self-start lg:-mt-[60px] bg-black">
                  <Video
                    videoType={testimonial.testimonialVideoType}
                    vimeoId={testimonial.testimonialVimeoId}
                    youtubeId={testimonial.testimonialYoutubeId}
                    customUrl={
                      (testimonial.testimonialHtml5Video &&
                        testimonial.testimonialHtml5Video[0].url) ||
                      ""
                    }
                  />
                </div>
              )}
            </div>
            {/* Testimonials */}
            <div className="w-full px-12">
              <TestimonialSwiper>
                {testimonial.testimonialModule.map((testimonialModule) => (
                  <Testimonial
                    key={testimonialModule.id}
                    content={testimonialModule.testimonialContent}
                    name={testimonialModule.testimonialName}
                    location={testimonialModule.testimonialLocation}
                  />
                ))}
              </TestimonialSwiper>
            </div>
          </div>
        </div>
        {/* Awards */}
        {testimonial.testimonialAwards.length > 0 && (
          <div className="bg-white py-8 rounded-b-[20px] z-50">
            <AwardSwiper>
              {testimonial.testimonialAwards.map((award) => (
                <Award key={award.title} {...award} />
              ))}
            </AwardSwiper>
          </div>
        )}
      </div>
    </div>
  );
}
