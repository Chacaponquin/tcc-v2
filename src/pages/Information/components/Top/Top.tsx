import X from "@modules/app/components/X/X";
import BasicInfo from "@modules/shared/components/BasicInfo/BasicInfo";
import SendText from "@modules/shared/components/SendText/SendText";
import React from "react";

export default function Top() {
  return (
    <div className="flex flex-col items-center w-full">
      <X />

      <BasicInfo
        className="mb-2 mt-4"
        links={{ home: true, info: false, work: true }}
      />

      <SendText />
    </div>
  );
}
