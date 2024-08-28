import dynamic from "next/dynamic";
import React from "react";

const FooterSSR = dynamic(() => import("./FooterSSR"), { ssr: true });
const FooterCSR = dynamic(() => import("./FooterCSR"), { ssr: false });

export default function FooterPage() {
  const useSSR = process.env.NEXT_PUBLIC_USE_SSR === "true";

  if (useSSR) {
    return <FooterSSR />;
  } else {
    return <FooterCSR />;
  }
}
