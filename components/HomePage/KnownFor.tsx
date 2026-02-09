import { Target, Users, Zap } from "lucide-react";
import React from "react";
import { Card } from "../ui/card";
import { motion, Variants } from "framer-motion";

const KnownFor = () => {
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
    className="flex flex-col bg-[#F8F3F1] w-full h-full px-5 md:px-10 lg:px-20 py-10 md:py-20 justify-center items-center gap-6"
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
      <motion.div className="flex flex-col justify-center items-center gap-1" variants={fadeUp}>
        <h1 className="text-[#EB5752] text-sm font-medium uppercase">
          what i'm known for
        </h1>
        <p className="text-black text-xl md:text-4xl text-center font-semibold ">
          Three Pillars of Transformative Leadership
        </p>
      </motion.div>
      <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6">
        <Card className="flex flex-col bg-[#F8F3F1] mx-auto w-full max-w-sm rounded-md px-4 shadow-sm hover:shadow-lg transition-all duration-300 gap-4">
          <div className="flex items-center justify-start w-10 h-10 rounded-full p-2 bg-[#EB5752]/20">
            <Target size={35} color="#EB5752" />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xl text-black font-medium">Strategic Clarity</p>
            <p>Helping leaders define their North Star and build roadmaps that actually work.</p>
          </div>
        </Card>

        <Card className="flex flex-col bg-[#F8F3F1] mx-auto w-full max-w-sm rounded-md px-4 shadow-sm hover:shadow-lg transition-all duration-300 gap-4">
          <div className="flex items-center justify-start w-10 h-10 rounded-full p-2 bg-[#EB5752]/20">
            <Users size={35} color="#EB5752" />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xl text-black font-medium">Leadership Judgement</p>
            <p>Developing the wisdom to make high-stakes decisions with confidence.</p>
          </div>
        </Card>

        <Card className="flex flex-col bg-[#F8F3F1] mx-auto w-full max-w-sm rounded-md px-4 shadow-sm hover:shadow-lg transition-all duration-300 gap-4">
          <div className="flex items-center justify-start w-10 h-10 rounded-full p-2 bg-[#EB5752]/20">
            <Zap size={35} color="#EB5752" />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xl text-black font-medium">Execution Systems</p>
            <p>Installing habits, rhythms, and frameworks that turn strategy into results.</p>
          </div>
        </Card>
      </motion.div>
    </motion.section>
  );
};

export default KnownFor;
