"use client";

import Image from "next/image";
import HiteshLogo from "../../public/hitesh-choudhary-logo.jpg";
import TickIcon from "@/icons/TickIcon";
import ChaiCodeLogo from "../../public/chaicode.jpg";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { Button } from "./ui/button";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function YoutubeSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [inView, controls]);

  const fadeInUpAnimation = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        duration: 1,
      },
    },
  };

  const youtubeChannels = [
    {
      image: HiteshLogo,
      title: "Hitesh Choudhary",
      username: "@HiteshCodeLab",
      about:
        "Hey there everyone, Hitesh here back again with another video! This means I create a lot of videos, every single week.",
      language: "English",
      subscribers: "1M Subscribers",
      videos: "1.6K Videos",
      subscribe: "https://www.youtube.com/@Hiteshcodelab",
    },
    {
      image: ChaiCodeLogo,
      title: "Chai aur Code",
      username: "@chaiaurcode",
      about:
        "A channel dedicated to chai and coding in HINDI. A lot happens over chai and I am a big-time chai lover. Let's sip tea and write some code and some chit-chat.",
      language: "Hindi",
      subscribers: "672K Subscribers",
      videos: "575 Videos",
      subscribe: "https://youtube.com/@chaiaurcode",
    },
  ];

  return (
    <div className="py-20 px-5 md:px-20 border-t-2 flex flex-col justify-center items-center gap-15">
      <div className="flex flex-col justify-center items-center">
        <span className="py-2 px-4 rounded-full border">Youtube</span>
        <h2 className="text-3xl text-center md:text-5xl font-extrabold bg-linear-90 from-orange-500 via-orange-400 to-white text-transparent bg-clip-text my-5 md:max-w-[600px]">
          Explore Our Engaging YouTube Channels
        </h2>
        <p className="md:max-w-[600px] text-center mb-12 text-[16px] md:text-xl">
          Our YouTube channels bring you practical knowledge, engaging
          tutorials, and learning tools.
        </p>
      </div>

      {/* Youtube section card */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInUpAnimation}
        className="flex flex-col lg:flex-row gap-4"
      >
        {youtubeChannels.map((channel, index) => (
          <motion.div
            variants={fadeInUpAnimation}
            className="flex flex-col bg-[#11101c] rounded-md p-5 lg:w-1/2 gap-6 border border-gray-600"
            key={index}
          >
            <div>
              <div className="flex justify-between items-center">
                <Image
                  src={channel.image}
                  height={100}
                  width={100}
                  alt="hitesh-choudhary"
                  className="rounded-full"
                />
                <span>{channel.language}</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold flex gap-1 items-center">
                {channel.title} <TickIcon />
              </h3>
              <span>{channel.username}</span>
            </div>
            <div>
              <span className="text-md md:max-w-12">{channel.about}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-md font-bold">{channel.subscribers}</span>
              <span className="text-md font-bold">{channel.videos}</span>
            </div>
            <div>
              <a href={channel.subscribe} target="_blank">
                <Button className="bg-red-500 hover:bg-red-600 rounded-full cursor-pointer">
                  Subscribe
                </Button>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div>
        <a href="https://courses.chaicode.com/learn">
          <InteractiveHoverButton>Explore All Tutorials</InteractiveHoverButton>
        </a>
      </div>
    </div>
  );
}

export default YoutubeSection;
