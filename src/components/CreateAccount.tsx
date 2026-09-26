import Link from "next/link";
import React from "react";

interface Props {
    href: string;
    children: React.ReactNode;
}

export default function CreateAccount({ href, children }: Props) {
  return (
    <Link href={href} className="text-green-500 font-medium hover:underline">
      {children}
    </Link>
  );
}