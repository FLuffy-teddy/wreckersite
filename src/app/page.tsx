"use client";

import Featured from "./components/featured";
import Hero from "./components/hero";
import Header from "./components/header";
import Stats from "./components/stats";

export default function Page() {
  return (
    <div>
      <Hero />
      <Featured />
      <Header />
      <Stats />
    </div>
  );
}
