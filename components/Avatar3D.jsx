"use client";

"use client";

import Image from "next/image";

export const Avatar3D = () => {
  return (
    <div className="relative h-[280px] w-full max-w-[280px] overflow-hidden rounded-[40px] border border-white/15 bg-gradient-to-b from-[#15052d] via-[#0a0315] to-[#020108] shadow-[0_25px_60px_rgba(8,0,32,0.55)]">
      <div className="absolute inset-3 rounded-[34px] border border-white/10" />
      <Image
        src="/avatar.png"
        alt="Retrato profesional"
        width={280}
        height={280}
        className="h-full w-full object-cover"
        priority
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
    </div>
  );
};
