"use client";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import CupImage from "../../public/cup.png";
import Image from "next/image";
import { motion } from "framer-motion";
import PeopleIcon from "@/icons/People";
import VideoIcon from "@/icons/VideoIcon";
import CodeReviews from "@/icons/CodeReviews";
import CommentIcon from "@/icons/Comment";
import Bouties from "@/icons/Bouties";

const fadeInUpAnimation = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 1.5,
    },
  },
};

function Hero() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeInUpAnimation}
      className="flex flex-col justify-center items-center py-20 px-5 md:px-20"
    >
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-orange-500 rounded-full blur-[120px] opacity-50 z-[-1]"></div>
      <motion.span variants={fadeInUpAnimation}>
        Trusted by 1.5M Code Learners
      </motion.span>
      <motion.h1
        variants={fadeInUpAnimation}
        className="text-5xl text-center md:text-6xl font-extrabold bg-linear-90 from-orange-500 via-orange-400 to-white text-transparent bg-clip-text my-5"
      >
        Connect. Learn. Grow
      </motion.h1>
      <motion.p
        variants={fadeInUpAnimation}
        className="md:max-w-[900px] text-center mb-12 text-[16px] md:text-xl"
      >
        Content is everywhere, but we provide a learning experience that is
        unmatched — bounties, peer learning, code reviews, virtual hostel,
        alumni network, doubt sessions, and group projects.
      </motion.p>
      <ShimmerButton className="mb-16">Check all Live Cohorts</ShimmerButton>

      {/* Floating icons */}

      <div className="relative mt-10 md:mt-4 lg:mt-0">
        <div className="absolute bottom-[150px] left-[-70px]  md:bottom-[220px] md:left-[-160px] lg:bottom-[280px] lg:left-[-200px]">
          <motion.span
            className="border border-gray-600 rounded-full flex justify-center items-center gap-2 text-[10px] md:text-base font-semibold text-gray-300 px-2 md:px-4 py-2"
            initial={{ y: -10 }}
            animate={{ y: 10 }}
            transition={{
              type: "smooth",
              repeatType: "mirror",
              duration: 2,
              repeat: Infinity,
            }}
          >
            <PeopleIcon />
            Peer learning
          </motion.span>
        </div>
        <div className="absolute bottom-[140px] right-[-60px]  md:bottom-[220px] md:right-[-140px] lg:bottom-[300px] lg:right-[-200px]">
          <motion.span
            className="border border-gray-600 rounded-full flex justify-center items-center gap-2 text-[10px] md:text-base font-semibold text-gray-300 px-2 md:px-4 py-2"
            initial={{ y: -10 }}
            animate={{ y: 10 }}
            transition={{
              type: "smooth",
              repeatType: "mirror",
              duration: 2,
              repeat: Infinity,
            }}
          >
            <CodeReviews />
            Code reviews
          </motion.span>
        </div>
        <div className="absolute bottom-[10px] left-[-50px]  md:bottom-[30px] md:left-[-100px] lg:bottom-[30px] lg:left-[-100px]">
          <motion.span
            className="border border-gray-600 rounded-full flex justify-center items-center gap-2 text-[10px] md:text-base font-semibold text-gray-300 px-2 md:px-4 py-2"
            initial={{ y: -10 }}
            animate={{ y: 10 }}
            transition={{
              type: "smooth",
              repeatType: "mirror",
              duration: 2,
              repeat: Infinity,
            }}
          >
            <VideoIcon />
            Virtual hostel
          </motion.span>
        </div>
        <div className="absolute bottom-[40px] right-[-77px]  md:bottom-[60px] md:right-[-150px] lg:bottom-[60px] lg:right-[-150px]">
          <motion.span
            className="border border-gray-600 rounded-full flex justify-center items-center gap-2 text-[10px] md:text-base font-semibold text-gray-300 px-2 md:px-4 py-2"
            initial={{ y: -10 }}
            animate={{ y: 10 }}
            transition={{
              type: "smooth",
              repeatType: "mirror",
              duration: 2,
              repeat: Infinity,
            }}
          >
            <CommentIcon />
            Doubt sessions
          </motion.span>
        </div>
        <div className="absolute bottom-[210px] left-[60]  md:bottom-[300px] md:left-[70] lg:bottom-[360px] lg:left-[100] ">
          <motion.span
            className="border border-gray-600 rounded-full flex justify-center items-center gap-2 text-[10px] md:text-base font-semibold text-gray-300 px-2 md:px-4 py-2"
            initial={{ y: -10 }}
            animate={{ y: 10 }}
            transition={{
              type: "smooth",
              repeatType: "mirror",
              duration: 2,
              repeat: Infinity,
            }}
          >
            <Bouties />
            Bounties
          </motion.span>
        </div>
        <div className="mt-9">
          <Image
            src={CupImage}
            alt="chaicode"
            className="h-48 w-48 sm:h-60 sm:w-60 md:h-80 md:w-80 lg:size-[400px]"
          />
        </div>
      </div>

      {/* icons */}
    </motion.div>
  );
}

export default Hero;
