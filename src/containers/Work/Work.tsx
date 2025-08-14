"use client";

import dynamic from "next/dynamic";
import BasicInfo from "@modules/shared/components/BasicInfo/BasicInfo";
import React, { useState } from "react";
import type { Work } from "./domain/works";
import ViewWork from "./components/ViewWork/ViewWork";

const Playground = dynamic(() => import("./components/Playground/Playground"), {
  ssr: false,
});

export default function Work() {
  const [selected, setSelected] = useState<Work | null>(null);

  return (
    <div
      className="flex flex-col h-screen w-full py-20 px-6 items-center text-center"
      style={{ background: `url('/ui/bg.jpg') center/cover` }}
    >
      {selected && <ViewWork />}

      <header className="w-max pb-10 h-max">
        <BasicInfo links={{ home: true, info: true, work: false }} />
      </header>

      <Playground onSelect={setSelected} />
    </div>
  );
}
