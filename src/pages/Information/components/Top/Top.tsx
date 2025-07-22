import BasicInfo from "@modules/shared/components/BasicInfo/BasicInfo";
import SendText from "@modules/shared/components/SendText/SendText";
import React from "react";

export default function Top() {
  return (
    <div>
      <BasicInfo
        className="mb-2"
        links={{ home: true, info: false, work: true }}
      />

      <SendText />
    </div>
  );
}
