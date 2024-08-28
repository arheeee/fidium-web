import React from "react";
import Footer from "@/components/ui/footer/footer";
import { getFooterQuery } from "@/components/ui/footer/footer.queries";
import client from "@/lib/apolloClient";
import { FooterGlobal } from "@/components/ui/footer/footer.types";

const getFooterData = async (): Promise<FooterGlobal | null> => {
  const { data } = await client.query<{ globalSets: FooterGlobal[] }>({
    query: getFooterQuery,
    fetchPolicy: "no-cache", // Ensure we fetch the latest data
  });
  const footerSet =
    data.globalSets.find((set) => set.__typename === "footer_GlobalSet") ||
    null;
  return footerSet;
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function FooterSSR() {
  const footerData = await getFooterData();

  if (!footerData) {
    return <p>No footer data found.</p>;
  }

  return (
    <main className="w-full">
      <Footer {...footerData} />
    </main>
  );
}
