import Image from "next/image";
import React from "react";
import footerIcon from "@/assets/logo-xl.png";
import fbICon from "@/assets/facebook.png";
import instaICon from "@/assets/instagram.png";
import twiterIcon from "@/assets/twitter.png";

const Footer = () => {
  return (
    <div className="bg-[#244D3F] text-white   p-15">
      <footer className="footer footer-horizontal footer-center ">
        <aside>
          <Image
            src={footerIcon}
            alt="KeenKeeper"
            className="w-80 object-center object-contain"
          />
          <p className="text-white/80">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <h3 className="font-medium text-xl mt-4">Social Links</h3>
          <div className="flex items-center gap-2">
            <Image
              src={fbICon}
              alt="FacebookIcon"
              className="w-8 cursor-pointer"
            />
            <Image
              src={instaICon}
              alt="IstagramIcon"
              className="w-8 cursor-pointer"
            />
            <Image
              src={twiterIcon}
              alt="twiterIcon"
              className="w-8 cursor-pointer"
            />
          </div>
        </aside>
      </footer>
      <div className="flex items-center justify-between mt-8 text-white/80 text-sm border-t border-t-zinc-200 pt-5">
        <p>
          Copyright © {new Date().getFullYear()} KeenKeeper. All right reserved
        </p>
        <div className="flex items-center gap-2">
          <p>Privacy Policy</p>
          <p>Terms of Services</p>
          <p>Cookies</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
