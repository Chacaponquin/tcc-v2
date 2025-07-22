import { APP_ROUTES } from "@modules/app/domain/app-routes";
import React from "react";
import ItalicLink from "../ItalicLink/ItalicLink";
import clsx from "clsx";

interface Props {
  className?: string;
  links: { home: boolean; work: boolean; info: boolean };
}

export default function BasicInfo({ className, links }: Props) {
  return (
    <div className={clsx(className)}>
      <p className="mb-2 text-xl">
        <i className="font-extrabold text-text-bold">Crystal</i>
        <i>Chapel</i> -{" "}
        {links.info && (
          <ItalicLink to={APP_ROUTES.INFORMATION}>Information,</ItalicLink>
        )}{" "}
        {links.home && <ItalicLink to={APP_ROUTES.HOME}>Home,</ItalicLink>}{" "}
        {links.work && <ItalicLink to={APP_ROUTES.WORK}>Work</ItalicLink>}
      </p>

      <p className="text-base">Buenavista, Miramar</p>
    </div>
  );
}
