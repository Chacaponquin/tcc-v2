import React from "react";
import ItalicLink from "../ItalicLink/ItalicLink";
import { APP_ROUTES } from "@modules/app/domain/app-routes";

export default function SendText() {
  return (
    <p className="text-base">
      Send a <ItalicLink to={APP_ROUTES.HOME}>SOS</ItalicLink> to heavens
    </p>
  );
}
