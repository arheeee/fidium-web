import dynamic from "next/dynamic";
import React from "react";

// Dynamically import HeroSSR or HeroCSR based on SSR setting
const HeroSSR = dynamic(() => import("./HeroSSR"), { ssr: true });
const HeroCSR = dynamic(() => import("./HeroCSR"), { ssr: false });

export default function HeroPage() {
  const useSSR = process.env.NEXT_PUBLIC_USE_SSR === "true";

  if (useSSR) {
    return <HeroSSR />;
  } else {
    return <HeroCSR />;
  }
}
