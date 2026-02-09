"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import KnownFor from "@/components/HomePage/KnownFor";
import Forge from "@/components/HomePage/Forge";
import Tag from "@/components/HomePage/Tag";
import Insight from "@/components/HomePage/Insight";
import Expression from "@/components/HomePage/Expression";
import Connect from "@/components/HomePage/Connect";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <div className="flex flex-col lg:flex-row w-full h-full pt-30 justify-center items-center px-5 md:px-10 lg:px-20 bg-white gap-10">
        <motion.div className="flex flex-col w-full lg:w-175 gap-3">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.3, 1, 0.4, 1],
            }}
            className="text-black/90 font-bold text-5xl md:text-8xl "
          >
            Clarity.
          </motion.h1>
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.3, 1, 0.4, 1],
            }}
            className="text-black/90 font-bold text-5xl md:text-8xl "
          >
            Capacity.
          </motion.h2>
          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[#EB5752] font-bold text-5xl md:text-8xl "
          >
            Execution.
          </motion.h3>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-gray-700/80 text-base md:text-xl pl-1 md:pl-2"
          >
            I help high-performing leaders build strategic clarity, leadership
            capacity, and execution systems that scale their impact without
            burning them out.
          </motion.p>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex gap-4 pl-0 md:pl-2"
          >
            <Button className="bg-[#EB5752] font-medium text-sm md:text-base hover:bg-[#EB5752]/90 transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer">
              Connect with Boye <ArrowRight />
            </Button>

            <Button className="bg-transparent border border-black/90 font-medium text-black text-sm md:text-base transition-all duration-300 ease-in-out hover:bg-transparent hover:scale-105 cursor-pointer">
              Explore Resources
            </Button>
          </motion.div>
        </motion.div>
        <div className="relative w-100 h-125 lg:w-112.5 lg:h-137.5">
          {!isLoaded && (
            <div className="absolute inset-0">
              <Skeleton className="h-full w-full bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Skeleton className="h-40 w-40 rounded-full" />
              </div>
            </div>
          )}

          <Image
            src={"/img/boyeOImg.png"}
            alt="Boye Oloyede"
            fill
            className={`fixed object-contain transition-opacity duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setIsLoaded(true)}
          />
        </div>
      </div>
      <KnownFor />
      <Forge />
      <Tag />
      <Insight />
      <Expression />
      <Connect />
    </>
  );
}
