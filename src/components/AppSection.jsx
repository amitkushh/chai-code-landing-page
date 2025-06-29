"use client";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import OfflineIcon from "@/icons/Offline";
import BellIcon from "@/icons/BellIcon";
import MobileIcon from "@/icons/Mobile";
import PlayStoreImg from "../../public/playstore.png";
import AppStoreImg from "../../public/appstore.png";
import ChaiCodeMobileApp from "../../public/chaicode-app.png";

function AppSection() {
  return (
    <div className="flex flex-col justify-center items-center pt-20 px-5  mx-5 my-20 md:mx-20 bg-[#11101c]">
      <div className="flex flex-col justify-center items-center">
        <span className="py-2 px-4 rounded-full border mb-5 ">App</span>
        <h2 className="text-3xl md:min-w-[400px] text-center md:text-5xl font-extrabold bg-linear-90 from-orange-500 via-orange-400 to-white text-transparent bg-clip-text mb-5">
          Learn on the go
        </h2>
        <p className="md:max-w-[600px] mb-12 md:mb-7 text-center">
          Take your coding journey anywhere with the ChaiCode mobile app. Access
          courses, join live sessions, and connect with the community - all from
          your pocket.
        </p>
        <div className="flex justify-center items-center gap-3">
          <a href="https://apps.apple.com/in/app/chaicode/id6504993143">
            <Image
              src={AppStoreImg}
              height={150}
              width={150}
              alt="appstore"
              className="border border-gray-400 rounded-full bg-black cursor-pointer"
            />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.chaicode.courses&pcampaignid=web_share">
            <Image
              src={PlayStoreImg}
              height={150}
              width={150}
              alt="playstore"
              className="border border-gray-400 rounded-full bg-black cursor-pointer"
            />
          </a>
        </div>

        {/* App Image section */}
        <div>
          <Image
            src={ChaiCodeMobileApp}
            height={600}
            width={600}
            alt="chaicode"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default AppSection;
