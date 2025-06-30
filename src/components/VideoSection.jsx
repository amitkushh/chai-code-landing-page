"use client";

import { HeroVideoDialog } from "@/components/magicui/hero-video-dialog";
import Thumbnail from "../../public/thumbnail.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function VideoSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [inView, controls]);

  const fadeInUpAnimation = {
    hidden: { opacity: 0, x: 20 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.3,
        duration: 1,
      },
    },
  };

  return (
    <div className="py-20 px-5 sm:px-20 md:px-25 lg:px-40 border-t-2 flex justify-center items-center">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInUpAnimation}
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
