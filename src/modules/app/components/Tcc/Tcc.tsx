import { APP_IMAGES } from "@modules/app/domain/app-images";
import Image from "next/image";
import React from "react";

export default function Tcc() {
  return (
    <Image
      className="mt-3"
      width={100}
      height={100}
      src={APP_IMAGES.TCC.src}
      alt={APP_IMAGES.TCC.alt}
    />
  );
}
