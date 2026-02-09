import { ArrowRight } from "lucide-react";
import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { motion, Variants } from "framer-motion";

const Forge = () => {
  const forgeFramework = [
    "F - Frame for the future",
    "O - Own the current reality",
    "R - Rewire for results",
    "G - Grow strategic capacity",
    "E - Execute + expand",
  ];

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="flex flex-col bg-[#FFF] w-full h-full px-5 md:px-10 lg:px-20 py-10 md:py-20 justify-center items-center gap-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
    >
      <motion.div
        className="flex flex-col justify-center items-center gap-1"
        variants={fadeUp}
      >
        <h1 className="text-[#EB5752] text-sm font-medium uppercase">
          The F.O.R.G.E. Framework
        </h1>
        <p className="text-black text-xl md:text-4xl text-center font-semibold">
          A Proven System for Leadership Excellence
        </p>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="
    grid
    grid-cols-2
    md:grid-cols-3
    lg:grid-cols-5
    gap-2 md:gap-4 lg:gap-6
    place-items-center
    mx-auto
    w-fit
  "
      >
        {forgeFramework.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            className={`
        ${index === forgeFramework.length - 1 ? "col-span-2 md:col-span-3 lg:col-span-1" : ""}
      `}
          >
            <Badge className="bg-[#F7E5E3] text-[#EB5752] text-xs md:text-sm font-medium capitalize">
              {item}
            </Badge>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="max-w-5xl" variants={fadeUp}>
        <p className="text-gray-700/90 text-base md:text-lg text-center">
          My signature framework helps leaders escape overwhelm, gain
          crystal-clear direction, and execute with confidence—turning vision
          into action and ideas into results through structured thinking,
          focused priorities, and repeatable systems that drive consistent
          progress.
        </p>
      </motion.div>

      <motion.div variants={fadeUp}>
        <Button className="bg-[#EB5752] font-medium text-sm md:text-base hover:bg-[#EB5752]/90 transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer">
          Learn More About the Framework <ArrowRight />
        </Button>
      </motion.div>
    </motion.section>
  );
};

export default Forge;
