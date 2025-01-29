"use client";

import Featured from "./components/featured";
import Hero from "./components/hero";
import CTA from "./components/cta";
import Stats from "./components/stats";

export default function Page() {
  return (
    <div>
      <Hero />
      <Featured />
      <CTA />
      <Stats />
    </div>
  );
}
