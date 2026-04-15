"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ImStatsDots } from "react-icons/im";
import { IoHomeOutline } from "react-icons/io5";
import { RiTimeLine } from "react-icons/ri";

const MyLink = ({ href, children }) => {
  const pathName = usePathname();
  return (
    <div>
      <Link
        href={href}
        className={`${pathName === href ? "bg-[#244D3F] text-white" : ""} btn  text-gray-800 flex items-center gap-1`}
      >
        <div>
        {href === "/" ? (
          <IoHomeOutline />
        ) : href === "/timeline" ? (
          <RiTimeLine />
        ) : (
          <ImStatsDots />
        )}
        </div>
        {children}
      </Link>
    </div>
  );
};

export default MyLink;
