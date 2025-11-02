import React from "react";
import BasicInfo from "@modules/shared/components/BasicInfo/BasicInfo";

export default function Content() {
  return (
    <main className="flex flex-col w-full items-center">
      <BasicInfo links={{ home: false, info: true, work: true }} />
    </main>
  );
}
