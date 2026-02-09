import { motion, Variants } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

const Insight = () => {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
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
      <motion.div
        className="flex flex-col justify-center items-center gap-1"
        variants={fadeUp}
      >
        <h1 className="text-[#EB5752] text-sm font-medium uppercase">
          Latest Insight
        </h1>
        <p className="text-black text-xl md:text-4xl text-center font-semibold ">
          This Week's Featured Article
        </p>
      </motion.div>
      <motion.div variants={fadeUp}>
        <Card className="flex flex-col bg-[#FFF] mx-auto w-full max-w-2xl rounded-md px-5 shadow-sm hover:shadow-lg transition-all duration-300 gap-4">
          <div className="flex place-items-center gap-3">
            <div className="flex items-center justify-start w-10 h-10 rounded-full p-2 bg-[#EB5752]/20">
              <BookOpen size={35} color="#EB5752" />
            </div>
            <p className="text-black text-base font-normal">Leadership</p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-base md:text-xl text-black font-medium">
              The Hidden Cost of Delayed Decisions
            </p>
            <p className="text-gray-700/60 text-sm md:text-base font-normal">
              Why high-performing leaders must learn to decide faster—and how to
              build the confidence to make high-stakes calls without
              second-guessing yourself.
            </p>
          </div>
          <div>
            <Button className="bg-[#F8F3F1] border border-black/10 font-normal text-black text-sm md:text-base transition-all duration-300 ease-in-out hover:bg-transparent cursor-pointer">
              Read Article <ArrowRight />
            </Button>
          </div>
        </Card>
      </motion.div>
    </motion.section>
  );
};

export default Insight;
