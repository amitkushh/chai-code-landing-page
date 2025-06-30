"use client";
import { HeroVideoDialog } from "@/components/magicui/hero-video-dialog";
import UdemyImage from "@/assets/udemy/udemythumbnail.jpg";
import { Button } from "./ui/button";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function UdemySection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [inView, controls]);

  const fadeInDownAnimation = {
    hidden: { opacity: 0, y: -40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        duration: 1,
      },
    },
  };

  return (
    <div
      id="udemy"
      className="border-y-2 flex flex-col justify-center items-center py-20 px-5 lg:px-20"
    >
      <div className="flex flex-col justify-center items-center">
        <span className="py-2 px-4 rounded-full border">Udemy</span>
        <h2 className="text-3xl text-center md:text-5xl font-extrabold bg-linear-90 from-orange-500 via-orange-400 to-white text-transparent bg-clip-text my-5">
          Our Courses on Udemy
        </h2>
        <p className="md:max-w-[800px] text-center mb-12 text-[16px] md:text-xl">
          Join thousands of students who have transformed their careers with our
          comprehensive courses
        </p>
      </div>

      {/* both section started */}

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInDownAnimation}
        className="flex flex-col lg:flex-row gap-10 md:gap-4 items-center justify-center"
      >
        <motion.div
          className="flex flex-col md:w-1/2 bg-[#11101c] px-5 md:px-10 py-4 border-gray-500 border mb:gap-5 gap-8 rounded-md lg:h-[340px] lg:w-[600px]  box-border"
          variants={fadeInDownAnimation}
        >
          <div className="flex">
            <div className="flex flex-col gap-5 md:gap-2">
              <h3 className="text-2xl font-bold">
                Complete web development course
              </h3>
              <p>
                Only web development course that you will need. Covers HTML,
                CSS, Tailwind, Node, React, MongoDB, Prisma, Deployment etc
              </p>
              <div className="flex md:hidden lg:hidden xl:hidden">
                <span className="text-5xl font-bold">4.7</span>
                <span>Top Rated</span>
              </div>
            </div>
            <div className="hidden md:flex">
              <span className="text-5xl font-bold text-orange-500">4.7</span>
              <span>Top Rated</span>
            </div>
          </div>
          {/* //price */}
          <div className="mb-3">
            <span className="text-5xl font-bold text-orange-500">₹399</span>
            <span>one time</span>
          </div>
          <div>
            <Button className="bg-[var(--primary-orange)] hover:bg-orange-600 cursor-pointer rounded-md px-6 py-6">
              Check Udemy Courses
            </Button>
          </div>
        </motion.div>
        {/* video section */}
        <div className="md:w-1/2 lg:h-[340px] lg:w-[600px]">
          <motion.div className="relative" variants={fadeInDownAnimation}>
            <HeroVideoDialog
              className="block dark:hidden"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/KZ31wDjYleI?si=3-QI2NLF636wKoQu"
              thumbnailSrc={UdemyImage.src}
              thumbnailAlt="Hero Video"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default UdemySection;
