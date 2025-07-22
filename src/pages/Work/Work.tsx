import BasicInfo from "@modules/shared/components/BasicInfo/BasicInfo";
import React from "react";

export default function Work() {
  return (
    <div className="flex flex-col w-full py-20 px-10 items-center text-center">
      <header className="w-max">
        <BasicInfo links={{ home: true, info: true, work: false }} />
      </header>
    </div>
  );
}
