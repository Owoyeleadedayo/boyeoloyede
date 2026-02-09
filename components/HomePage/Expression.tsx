import { motion, Variants } from "framer-motion";
import { SquareArrowOutUpRight } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

const Expression = () => {
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
          Expressions
        </h1>
        <p className="text-black text-xl md:text-4xl text-center font-semibold ">
          Beyond This Website
        </p>
        <p className="text-gray-700/80 text-base font-normal pt-1">
          Discover the ventures and communities I'm building.
        </p>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center items-stretch gap-6"
      >
        <Card className="flex flex-col bg-[#F8F3F1] mx-auto w-full max-w-sm rounded-md px-4 shadow-sm hover:shadow-lg transition-all duration-300 gap-2">
          <div className="flex flex-col gap-2">
            <p className="text-xl text-black font-medium">Hupo Strategy</p>
            <p className="text-base text-gray-500/90 font-normal">
              Helping leaders define their North Star and build roadmaps that
              actually work.
            </p>
          </div>
          <div className="flex place-items-center gap-2">
            <p className="text-[#EB5752] text-base font-normal hover:underline cursor-pointer">
              Visit
            </p>
            <SquareArrowOutUpRight
              size={16}
              color="#EB5752"
              className="cursor-pointer"
            />
          </div>
        </Card>

        <Card className="flex flex-col bg-[#F8F3F1] mx-auto w-full max-w-sm rounded-md px-4 shadow-sm hover:shadow-lg transition-all duration-300 gap-2">
          <div className="flex flex-col gap-2">
            <p className="text-xl text-black font-medium">Sproutrs</p>
            <p className="text-base text-gray-500/90 font-normal">
              Nurturing the next generation of leaders
            </p>
          </div>
          <div className="flex place-items-center gap-2">
            <p className="text-[#EB5752] text-base font-normal hover:underline cursor-pointer">
              Visit
            </p>
            <SquareArrowOutUpRight
              size={16}
              color="#EB5752"
              className="cursor-pointer"
            />
          </div>
        </Card>

        <Card className="flex flex-col bg-[#F8F3F1] mx-auto w-full max-w-sm rounded-md px-4 shadow-sm hover:shadow-lg transition-all duration-300 gap-2">
          <div className="flex flex-col gap-2">
            <p className="text-xl text-black font-medium">The Vantage Forge</p>
            <p className="text-base text-gray-500/90 font-normal">
              A community for high-performing leaders
            </p>
          </div>
          <div className="flex place-items-center gap-2">
            <p className="text-[#EB5752] text-base font-normal hover:underline cursor-pointer">
              Visit
            </p>
            <SquareArrowOutUpRight
              size={16}
              color="#EB5752"
              className="cursor-pointer"
            />
          </div>
        </Card>
      </motion.div>
      <motion.div variants={fadeUp} className="flex place-items-center pt-5">
        <Button className="bg-[#F8F3F1] border border-black/10 font-normal text-black text-sm md:text-base transition-all duration-300 ease-in-out hover:bg-transparent cursor-pointer">
          View All Expressions
        </Button>
      </motion.div>
    </motion.section>
  );
};

export default Expression;
