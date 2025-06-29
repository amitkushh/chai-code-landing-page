"use client";

import { HeroVideoDialog } from "@/components/magicui/hero-video-dialog";
import Thumbnail from "../../public/thumbnail.jpg";
import { motion } from "framer-motion";

function VideoSection() {
  return (
    <div className="py-20 px-5 sm:px-20 md:px-25 lg:px-40 border-t-2 flex justify-center items-center">
      <motion.div
        className="relative"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <HeroVideoDialog
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/VNb_LawBBWU?si=rHA8PRd-w2pSocIm"
          thumbnailSrc={Thumbnail.src}
          thumbnailAlt="Hero Video"
        />
      </motion.div>
    </div>
  );
}

export default VideoSection;
