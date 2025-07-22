import React from "react";
import BasicInfo from "@modules/shared/components/BasicInfo/BasicInfo";

export default function Content() {
  return (
    <main className="">
      <BasicInfo links={{ home: false, info: true, work: true }} />
    </main>
  );
}
