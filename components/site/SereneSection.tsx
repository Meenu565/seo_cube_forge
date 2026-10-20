"use client";

import SereneHero from "./serene/SereneHero";
import SereneQuote from "./serene/SereneQuote";

export default function SereneSection() {
  return (
    <div className="relative bg-[#000000] w-full overflow-hidden">
      {/* Hero stays pinned while Quote slides up over it */}
      <div className="relative h-[180vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
          <SereneHero />
        </div>
      </div>
      <div className="relative z-10 -mt-[80vh]">
        <SereneQuote />
      </div>
    </div>
  );
}
