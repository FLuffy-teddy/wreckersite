"use client";

import Featured from "./components/featured";
import Hero from "./components/hero";
import Stats from "./components/stats";
import Footer from "./components/footer";

export default function Page() {
  return (
    <div>
      <Hero />
      <Featured />
      <Stats />
      <Footer />
    </div>
  );
}
