"use client";

import dynamic from "next/dynamic";
import BasicInfo from "@modules/shared/components/BasicInfo/BasicInfo";
import React from "react";

const Playground = dynamic(() => import("./components/Playground/Playground"), {
  ssr: false,
});

export default function Work() {
  return (
    <div
      className="flex flex-col h-screen w-full py-20 px-6 items-center text-center"
      style={{ background: `url('/ui/bg.jpg') center/cover` }}
    >
      <header className="w-max pb-10 h-max">
        <BasicInfo links={{ home: true, info: true, work: false }} />
      </header>

      <Playground />
    </div>
  );
}
