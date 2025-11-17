import { Work } from "@pages/Work/domain/works";
import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  work: Work;
  onClose: () => void;
}

export default function ViewWork({ onClose, work }: Props) {
  const [selected, setSelected] = useState(work.cover);

  const CLASS = clsx(
    "flex items-center",
    "w-full h-dvh",
    "fixed top-0 left-0",
    "z-50",
    "bg-black/50",
    "px-4 py-5",
    "justify-center",
    "backdrop-blur-md"
  );

  const FORM_CLASS = clsx(
    "flex flex-col",
    "w-full max-h-full",
    "bg-transparent",
    "px-7 py-6",
    "overflow-auto",
    "animate-duration-500",
    "h-max",
    "animate-fade-down rounded-card"
  );

  return (
    <div className={CLASS} onClick={onClose}>
      <div
        style={{ maxWidth: `1000px` }}
        className={FORM_CLASS}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={selected}
          alt={work.title}
          width={600}
          height={400}
          loading="eager"
          className="object-contain w-full max-h-[550px]"
        />

        {work.images.length > 1 && (
          <div className="w-full mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-3 gap-y-2">
            {work.images.map((i, index) => (
              <Image
                onClick={() => setSelected(i)}
                width={200}
                height={200}
                src={i}
                alt={work.title}
                className={clsx(
                  "cursor-pointer object-contain w-full h-[160px]",
                  {
                    "outline-2 outline-gray-400": i === selected,
                  }
                )}
                key={index}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
