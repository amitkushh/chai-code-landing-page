"use client";
import { HeroVideoDialog } from "./magicui/hero-video-dialog";
import Calender from "@/icons/Calender";
import Watch from "@/icons/Watch";
import DataScienceThumbnail from "@/assets/cohort-video/data-science.jpg";
import GenAiThumbnail from "@/assets/cohort-video/gen-ai.jpg";
import DevOpsThumbnail from "@/assets/cohort-video/devops.jpg";
import WebDevThumbnail from "@/assets/cohort-video/web-dev.jpg";
import CodingHerosThumbnail from "@/assets/cohort-video/coding-heros.jpg";
import { Button } from "./ui/button";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function CohortVideoSection() {
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

  const sections = [
    {
      youtubeLink:
        "https://www.youtube.com/embed/Kjd-SWpe1do?si=3gSIdKa1erMgnZCD",
      thumbnail: DataScienceThumbnail,
      title: "Full Stack Data Science 1.0",
      para: "From Python basics to project deployment",
      startDate: "Starts April 12, 2025",
      duration: "6 months",
      price: "6999",
      crossPrice: "8999",
      discount: "Save 22%",
      button: "Learn More",
    },
    {
      youtubeLink:
        "https://www.youtube.com/embed/VNb_LawBBWU?si=zEBcX34xwbCOzroP",
      thumbnail: GenAiThumbnail,
      title: "GenAI with Python | Concept",
      para: "Development side of AI application",
      startDate: "Starts April 7, 2025",
      duration: "1-2 months",
      price: "4999",
      crossPrice: "7999",
      discount: "Save 38%",
      button: "Learn More",
    },
    {
      youtubeLink:
        "https://www.youtube.com/embed/oBLpqSHc3lA?si=d-mOD3pSBtRshPIj",
      thumbnail: DevOpsThumbnail,
      title: "DevOps for developers 1.0",
      para: "Perfect guide to get started with DevOps",
      startDate: "Starts April 15, 2025",
      duration: "1-2 months",
      price: "4999",
      crossPrice: "7999",
      discount: "Save 38%",
      button: "Learn More",
    },
    {
      youtubeLink:
        "https://www.youtube.com/embed/yG8JMlldoCE?si=_cnA25n3ABBIbPLf",
      thumbnail: WebDevThumbnail,
      title: "Web Dev Cohort 1.0",
      para: "Ultimate guide to build software on web",
      startDate: "Starts January 11, 2025",
      duration: "6 months",
      price: "6999",
      crossPrice: "8999",
      discount: "Save 22%",
      button: "Learn More",
    },
    {
      youtubeLink:
        "https://www.youtube.com/embed/Fw3FezexzV0?si=s1RRswwqwP_Lty7U",
      thumbnail: CodingHerosThumbnail,
      title: "Coding Hero 2025",
      para: "Community focused program for students",
      startDate: "Starts Constantly going",
      duration: "Always running",
      price: "299",
      crossPrice: "599",
      discount: "Save 50%",
      button: "Learn More",
    },
  ];

  return (
    <div className="py-20 px-5 md:px-20 border-t-2 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <span className="py-2 px-4 rounded-full border">Cohorts</span>
        <h2 className="text-3xl text-center md:text-5xl font-extrabold bg-linear-90 from-orange-500 via-orange-400 to-white text-transparent bg-clip-text my-5">
          All Cohorts
        </h2>
        <p className="md:max-w-[600px] text-center mb-12 text-[16px] md:text-xl">
          Live training classes with love
        </p>
      </div>

      {/* All video section */}

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInUpAnimation}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
      >
        {sections.map((section, index) => (
          <motion.div
            variants={fadeInUpAnimation}
            className="flex flex-col bg-[#11101c] p-5 rounded-md border border-gray-600"
            key={index}
          >
            <div className="relative">
              <HeroVideoDialog
                animationStyle="from-center"
                videoSrc={section.youtubeLink}
                thumbnailSrc={section.thumbnail.src}
                thumbnailAlt={section.title}
              />
            </div>
            <div className="flex flex-col mt-4">
              <h3 className="text-xl md:text-2xl font-semibold mb-1">
                {section.title}
              </h3>
              <p className="text-gray-300">{section.para}</p>
            </div>
            <div className="flex justify-between mt-6">
              <span className="text-gray-400 text-sm flex gap-1">
                <Calender />
                {section.startDate}
              </span>
              <span className="text-gray-400 text-sm flex gap-1">
                <Watch />
                {section.duration}
              </span>
            </div>

            {/* price section */}
            <div className="flex items-center gap-3 mt-10">
              <div className="flex items-center gap-1">
                <span className="text-xl font-bold ">{section.price}</span>
                <span className="text-xl font-bold">INR</span>
              </div>
              <div className="flex gap-1 text-gray-400 text-sm line-through">
                <span>{section.crossPrice}</span>
                <span>INR</span>
              </div>
            </div>
            <div>
              <span className="text-[12px] font-normal text-orange-400">
                {section.discount}
              </span>
            </div>

            {/* button */}
            <div className="mt-10">
              <Button className="w-full bg-[var(--primary-orange)] hover:bg-orange-600 cursor-pointer rounded-full px-6 py-6">
                {section.button}
              </Button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Button section */}
      <div className="mt-12">
        <InteractiveHoverButton>View All Cohorts</InteractiveHoverButton>
      </div>
    </div>
  );
}

export default CohortVideoSection;
