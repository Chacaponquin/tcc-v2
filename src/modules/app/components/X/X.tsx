import { APP_IMAGES } from "@modules/app/domain/app-images";
import Image from "next/image";

export default function X() {
  return (
    <Image
      width={34}
      height={34}
      className=""
      src={APP_IMAGES.X.src}
      alt={APP_IMAGES.X.alt}
    />
  );
}
