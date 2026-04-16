import Image from "next/image";
import React from "react";
import footerIcon from "@/assets/logo-xl.png";
import fbICon from "@/assets/facebook.png";
import instaICon from "@/assets/instagram.png";
import twiterIcon from "@/assets/twitter.png";

const Footer = () => {
  return (
    <div className="bg-[#244D3F] text-white p-10 md:p-15">
      <footer className="footer footer-horizontal footer-center ">
        <aside>
          <Image
            src={footerIcon}
            alt="KeenKeeper"
            className="w-50 md:w-80 object-center object-contain"
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
   <div className="mt-8 border-t border-zinc-200 pt-8 text-sm text-white/80">
  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
    <p className="text-center md:text-left order-2 md:order-1">
      © {new Date().getFullYear()} KeenKeeper. All rights reserved.
    </p>
    <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 order-1 md:order-2">
      <a href="/privacy" className="hover:text-white transition-colors cursor-pointer">Privacy Policy</a>
      <a href="/terms" className="hover:text-white transition-colors cursor-pointer">Terms of Service</a>
      <a href="/cookies" className="hover:text-white transition-colors cursor-pointer">Cookies</a>
    </div>
    
  </div>
</div>
    </div>
  );
};

export default Footer;
