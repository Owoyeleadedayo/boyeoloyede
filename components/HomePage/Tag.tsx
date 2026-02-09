import { motion, Variants } from "framer-motion";
import AnimatedCounter from "../AnimatedCounter";

const Tag = () => {
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
      className="flex flex-col md:flex-row bg-[#EB5752] w-full h-full px-5 md:px-10 lg:px-30 py-10 md:py-20 justify-between items-center gap-6 md:gap-0"
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
      <motion.div className="flex flex-col gap-0.5 md:gap-2" variants={fadeUp}>
        <p className="text-center text-3xl md:text-4xl text-white font-semibold">
          <AnimatedCounter from={0} to={500} />+
        </p>
        <p className="text-center text-sm md:text-lg text-white font-medium">
          Leaders Influenced
        </p>
      </motion.div>
      <motion.div className="flex flex-col gap-0.5 md:gap-2" variants={fadeUp}>
        <p className="text-center text-3xl md:text-4xl text-white font-semibold">
          <AnimatedCounter from={0} to={15} />+
        </p>
        <p className="text-center text-sm md:text-lg text-white font-medium">
          Years Experience
        </p>
      </motion.div>
      <motion.div className="flex flex-col gap-0.5 md:gap-2" variants={fadeUp}>
        <p className="text-center text-3xl md:text-4xl text-white font-semibold">
          <AnimatedCounter from={0} to={50} />+
        </p>
        <p className="text-center text-sm md:text-lg text-white font-medium">
          Teams Transformed
        </p>
      </motion.div>
    </motion.section>
  );
};

export default Tag;
