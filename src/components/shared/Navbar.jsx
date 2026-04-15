import React from "react";
import navIcon from "@/assets/logo.png";
import Image from "next/image";
import MyLink from "./MyLink";

const navLinks = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Timeline", href: "/timeline" },
  { id: 3, name: "Stats", href: "/stats" },
];

const Navbar = () => {
  return (
    <nav className=" shadow">
      <div className="flex justify-between gap-4 items-center  py-2 container mx-auto">
        <Image src={navIcon} alt="keen keeper logo" className="" />

        <ul className="flex justify-between gap-2 items-center">
          <div className="flex items-center gap-4">
            {navLinks.map(navlink => (
              <MyLink key={navlink.id} href={navlink.href}>
                {navlink.name}
              </MyLink>
            ))}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
