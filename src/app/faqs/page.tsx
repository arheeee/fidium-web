import FaqSection from "@/components/faq/faq-section";
import client from "@/lib/apolloClient";
import { FaqPageEntryData } from "@/types/types";
import { getFaqPageQuery } from "@/utils/queries";
import { Metadata } from "next";

const getFaqs = async (): Promise<FaqPageEntryData> => {
  const { data } = await client.query({
    query: getFaqPageQuery,
  });

  return data;
};

export async function generateMetadata(): Promise<Metadata> {
  const data = await getFaqs();

  return {
    title: data.pagesEntries[0].title,
    description: "Have questions? We've got answers",
  };
}

export default async function Faq() {
  const faqs = await getFaqs();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <FaqSection faqs={faqs.pagesEntries[0].pageBlocks[0].accordionGroup} />
    </div>
  );
}
