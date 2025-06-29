"use client";

import ProfessionalImage from "@/assets/benefits/professionals.webp";
import BountyImage from "@/assets/benefits/bounties.webp";
import HostelsImage from "@/assets/benefits/hostels.webp";
import PeercodeImage from "@/assets/benefits/peer-code.webp";
import LeetlabImage from "@/assets/benefits/leetlab.webp";
import RevisionImage from "@/assets/benefits/revision.webp";
import Image from "next/image";
import PeerlistImage from "../../public/peerlist.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export function BenifitsSection() {
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

  const sections = [
    {
      title: "Taught by Professionals",
      para: "Our cohorts are being taught by top industry experts and educators",
      image: ProfessionalImage,
      code: "class Teacher extends Professional { /* ...  */ }",
    },
    {
      title: "Bounties",
      para: "Earn rewards, from Cash to MacBook. Keeps you motivated to work hard",
      image: BountyImage,
      code: "const reward = solveChallenge(difficulty)",
    },
    {
      title: "Coding hostels",
      para: "There is nothing like late night discussion with fellow learners and solving bugs",
      image: HostelsImage,
      code: "while(night) { solveProblems(together) }",
    },
    {
      title: "Peer Code Reviews",
      para: "With Our internal tools like Masterji, every code assignment gets feedback to improve your code",
      image: PeercodeImage,
      code: "TODO: Refactor this for better performance",
    },
    {
      title: "Leet Lab",
      para: "Our in-house built LeetCode style platform that helps you to understand foundation of programming language",
      image: LeetlabImage,
      code: "function optimizeSolution(algorithm) { /* ... */ }",
    },
    {
      title: "Revision classes",
      para: "We have so many peer classes by fellow learners that you get so many chances to learn that topic",
      image: RevisionImage,
      code: "for(let i = 0; i < concepts.length; i++) { revise() }",
    },
  ];

  return (
    <div className="py-20 px-5 md:px-20 border-t-2 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <span className="py-2 px-4 rounded-full border">Features</span>
        <h2 className="text-3xl text-center md:text-5xl font-extrabold bg-linear-90 from-orange-500 via-orange-400 to-white text-transparent bg-clip-text my-5">
          Key Benefits of Cohorts
        </h2>
        <p className="md:max-w-[600px] text-center mb-12 text-[16px] md:text-xl">
          Cohorts are best way to learn because you finish the course in a
          timely manner
        </p>
      </div>

      {/* card section */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInDownAnimation}
        className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {sections.map((section, index) => (
          <motion.div
            variants={fadeInDownAnimation}
            className="max-w-sm items-center justify-center border-gray-600 border bg-[#11101c] p-8 rounded-md hover:border-orange-500"
            key={index}
          >
            <div className="mb-4">
              <Image
                alt={section.title}
                src={section.image}
                height={50}
                width={50}
                className="rounded-sm"
              />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-bold">{section.title}</h3>
              <p className="text-gray-300">{section.para}</p>
            </div>
            <div className="flex mt-5">
              <div className="bg-gray-900 rounded-md p-3">
                <span>{section.code}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* alumni section */}
      <div className="relative flex flex-col justify-center items-center bg-[#11101c] w-full py-10 mt-15">
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-orange-500 rounded-full blur-[120px] opacity-50 z-[-1]"></div>
        <h2 className="text-2xl text-center md:text-3xl max-w-92 font-extrabold bg-linear-90 from-orange-500 via-orange-400 to-white text-transparent bg-clip-text mb-5">
          Alumni Network and job listings
        </h2>
        <p className="md:max-w-[600px] text-center mb-5">
          The alumni Network that you always wished for in your college. We have
          a partnership with Peerlist.
        </p>
        <Image
          src={PeerlistImage}
          height={400}
          width={400}
          alt="chaicode and peelist"
        />
      </div>
    </div>
  );
}
