import Link from "next/link";
import React from "react";

interface Props {
  children?: React.ReactNode;
  to: string;
}

export default function ItalicLink({ to, children }: Props) {
  return (
    <Link href={to} className="">
      <i className="underline underline-offset-4 decoration-gray-400">
        {children}
      </i>
    </Link>
  );
}
