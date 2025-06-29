"use client";

import React from "react";
import Image from "next/image";
import Logo from "../../public/chaicode-icon.svg";
import Youtube from "@/icons/Youtube";
import Instagram from "@/icons/Instagram";
import Github from "@/icons/Github";
import Discord from "@/icons/Discord";
import Linkedin from "@/icons/Linkedin";
import Twitter from "@/icons/Twitter";

function Footer() {
  return (
    <footer className="flex flex-col  border-t-2 px-4 md:px-0 py-36  gap-12 ">
      <div className="flex flex-col md:flex-row md:justify-around md:items-center gap-9 md:gap-0">
        <div className="flex flex-col justify-center gap-6">
          <div>
            <a href="/">
              <Image src={Logo} alt="chaicode" width={200} height={200} />
            </a>

            <span className="text-[#d6d5dc]">Home for programmers</span>
          </div>
          <div className="flex  items-center gap-2 text-[#d6d5dc]">
            <a href="https://www.youtube.com/@chaiaurcode">
              <Youtube />
            </a>
            <a href="https://www.instagram.com/hiteshchoudharyofficial/?hl=en">
              <Instagram />
            </a>
            <a href="https://github.com/hiteshchoudhary">
              <Github />
            </a>
            <a href="https://x.com/hiteshdotcom">
              <Twitter />
            </a>
            <a href="https://in.linkedin.com/in/hiteshchoudhary">
              <Linkedin />
            </a>
            <a href="https://hitesh.ai/discord">
              <Discord />
            </a>
          </div>
          <div>
            <span className="text-[#d6d5dc]">
              © 2025 ChaiCode. All rights reserved.
            </span>
          </div>
        </div>
        <div>
          <span className="font-bold">Products</span>
          <ul className="text-[#d6d5dc] gap-1 flex flex-col mt-2">
            <a href="https://courses.chaicode.com/learn">
              <li>Courses</li>
            </a>
            <a href="https://courses.chaicode.com/learn/view-all?show=batch&type=17">
              <li>Cohort</li>
            </a>
            <a href="https://courses.chaicode.com/learn/batch/about?bundleId=226894">
              <li>Coding Hero</li>
            </a>
            <a href="https://freeapi.app/">
              <li>FreeAPI</li>
            </a>
            <a href="https://masterji.co/login">
              <li>Masterji</li>
            </a>
          </ul>
        </div>
        <div>
          <span className="font-bold ">Resources</span>
          <ul className="text-[#d6d5dc] gap-1 flex flex-col mt-2">
            <a href="https://www.chaicode.com/docs">
              <li>Docs</li>
            </a>
            <a href="https://www.chaicode.com/privacy-policy">
              <li>Privacy Policy</li>
            </a>
            <a href="https://www.chaicode.com/terms-of-services">
              <li>Terms of Service</li>
            </a>
            <a href="https://www.chaicode.com/pricing-policy">
              <li>Pricing Policy</li>
            </a>
            <a href="https://www.chaicode.com/refund-policy">
              <li>Refund Policy</li>
            </a>
          </ul>
        </div>
      </div>

      {/* Footer bar */}
      <div>
        <h2 className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[12rem] font-bold text-center tracking-tighter leading-none w-full mx-auto bg-linear-90 from-orange-500 via-orange-400 to-white text-transparent bg-clip-text opacity-80">
          चायCODE
        </h2>
      </div>
    </footer>
  );
}

export default Footer;
