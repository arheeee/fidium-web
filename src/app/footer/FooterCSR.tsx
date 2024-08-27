"use client";

import React, { useEffect, useState } from 'react';
import Footer from '@/components/ui/footer/footer';
import { getFooterQuery } from '@/components/ui/footer/footer.queries';
import client from '@/lib/apolloClient';
import { FooterGlobal } from '@/components/ui/footer/footer.types';

const getFooterData = async (): Promise<FooterGlobal | null> => {
  const { data } = await client.query<{ globalSets: FooterGlobal[] }>({
    query: getFooterQuery,
    fetchPolicy: "no-cache",
  });
  const footerSet = data.globalSets.find(set => set.__typename === 'footer_GlobalSet') || null;
  return footerSet;
};

export default function FooterCSR() {
  const [footerData, setFooterData] = useState<FooterGlobal | null>(null);

  useEffect(() => {
    getFooterData().then(data => setFooterData(data));
  }, []);

  if (!footerData) {
    return <p>Loading footer data...</p>;
  }

  return (
    <main className="w-full">
      <Footer {...footerData} />
    </main>
  );
}
