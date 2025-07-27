import BasicInfo from "@modules/shared/components/BasicInfo/BasicInfo";
import React from "react";
import WORKS from "./domain/works";
import WorkCard from "./components/WorkCard/WorkCard";

export default function Work() {
  return (
    <div className="flex flex-col w-full py-20 md:px-10 px-6 items-center text-center">
      <header className="w-max mb-14">
        <BasicInfo links={{ home: true, info: true, work: false }} />
      </header>

      <div className="grid xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-x-4 gap-y-4 md:gap-x-5 md:gap-y-7">
        {WORKS.map((w, index) => (
          <WorkCard image={w.image} title="Buenas" key={index} />
        ))}
      </div>
    </div>
  );
}
