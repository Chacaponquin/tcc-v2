import A from "@modules/app/components/A/A";
import { APP_INFO } from "@modules/app/domain/app-info";
import React from "react";

export default function Bottom() {
  return (
    <div className="text-base">
      <A to={APP_INFO.INSTAGRAM}>
        <p className="mb-2">@crystalchapel</p>
      </A>

      <A to={APP_INFO.MAIL}>
        <p>goodnews@crystalchapel.com</p>
      </A>
    </div>
  );
}
