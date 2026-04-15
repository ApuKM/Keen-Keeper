"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MyLink = ({ href, children }) => {
  const pathName = usePathname();
  return (
    <div>
      <Link
        href={href}
        className={`${pathName === href ? "bg-[#244D3F] text-white" : ""} btn  text-gray-800`}
      >
        {children}
      </Link>
    </div>
  );
};

export default MyLink;
