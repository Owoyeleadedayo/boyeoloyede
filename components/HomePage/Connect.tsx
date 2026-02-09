import { motion, Variants } from "framer-motion";
import { ArrowRight, Mic } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

const Connect = () => {
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
      <motion.div variants={fadeUp}>
        <Card className="flex flex-col place-items-center bg-[#EB5752] mx-auto w-full max-w-5xl rounded-3xl px-5 shadow-sm hover:shadow-lg transition-all duration-300 gap-4">
          <Mic size={50} color="#FFF" />
          <p className="text-white text-xl md:text-3xl font-semibold">
            Ready to Lead with Clarity?
          </p>
          <p className="text-base md:text-xl font-normal text-center text-white w-full md:max-w-2xl">Whether you need 1:1 coaching, speaking, or strategic advisory—let's start a conversation.</p>
          <div>
            <Button className="bg-[#FFF] border border-black/10 font-normal text-black text-sm md:text-base transition-all duration-300 ease-in-out capitalize hover:bg-white cursor-pointer">
              Connect with Boye <ArrowRight />
            </Button>
          </div>
        </Card>
      </motion.div>
    </motion.section>
  );
};

export default Connect;
