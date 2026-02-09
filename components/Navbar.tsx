"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { link: "/", name: "Home" },
    { link: "/about", name: "About" },
    { link: "/work-with-boye", name: "Work With Boye" },
    { link: "/resources", name: "Resources" },
    { link: "/speaking", name: "Speaking" },
    { link: "/expressions", name: "Expressions" },
  ];

  const toggleMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`flex w-full justify-between items-center py-3 md:px-12 px-5 lg:px-20 fixed z-50 top-0 left-0 right-0 border-b transition-all duration-300 ${
          scrolled 
            ? "bg-white/30 backdrop-blur-sm shadow-sm border-white/20" 
            : "bg-white border-b-black/20 shadow-sm"
        }`}
      >
        {/* Glass morphism overlay when scrolled */}
        {scrolled && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-white/80 backdrop-blur-sm -z-10"
          />
        )}

        <Link href="/" className="flex flex-col items-center gap-0.75 z-10">
          <Image
            src={"/img/BO1.png"}
            alt="logo"
            width={60}
            height={60}
            className=""
            priority
          />
          <div className="flex">
            <p className={`text-xs sm:text-sm lg:text-sm text-center font-medium uppercase leading-tight transition-colors duration-300 ${
              scrolled ? "text-black/90" : "text-black"
            }`}>
              Boye Oloyede
            </p>
          </div>
        </Link>

        <div className="hidden lg:flex z-10">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.link;
              return (
                <li key={item.name}>
                  <Link href={item.link}>
                    <p
                      className={`relative font-medium text-base transition-colors duration-300 after:content-[''] after:absolute after:left-1/2 after:bottom-0 
                        after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-[#E47823] 
                        after:transition-all after:duration-300 
                        hover:after:w-full ${
                          isActive
                            ? "text-[#E47823] after:w-full"
                            : scrolled 
                              ? "text-black/80 hover:text-[#E47823]" 
                              : "text-black hover:text-[#E47823]"
                        }`}
                    >
                      {item.name}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="hidden lg:flex z-10">
          <Button className={`font-medium text-base transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer ${
            scrolled 
              ? "bg-[#EB5752]/90 hover:bg-[#EB5752]" 
              : "bg-[#EB5752] hover:bg-[#EB5752]/90"
          }`}>
            Connect with Boye
          </Button>
        </div>

        <button
          className="lg:hidden text-2xl z-10"
          onClick={toggleMenu}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={28} className={scrolled ? "text-black/80" : "text-black"} /> : <Menu size={28} className={scrolled ? "text-black/80" : "text-black"} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={closeMenu}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="lg:hidden fixed top-0 right-0 h-screen w-80 max-w-full bg-white/95 backdrop-blur-xl z-50 flex flex-col border-l border-white/20 shadow-2xl"
            >
              <div className="flex justify-end p-4">
                <button
                  className="text-black/80 p-2 hover:text-[#E47823] transition-colors duration-300 hover:bg-white/20 rounded-full"
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  <X size={28} />
                </button>
              </div>

              <div className="flex flex-col px-6 mt-2 flex-grow">
                <ul className="flex flex-col gap-2">
                  {navItems.map((item, index) => {
                    const isActive = pathname === item.link;
                    return (
                      <motion.li
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08 }}
                      >
                        <Link
                          href={item.link}
                          onClick={closeMenu}
                          className="block"
                        >
                          <span
                            className={`font-medium text-xl transition-all duration-300 py-3 block border-b border-black/10 last:border-b-0 hover:bg-white/30 rounded-lg px-3 ${
                              isActive
                                ? "text-[#E47823] bg-white/20"
                                : "text-black/80 hover:text-[#E47823]"
                            }`}
                          >
                            {item.name}
                          </span>
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.08 + 0.1 }}
                  className="pt-6"
                >
                  <Button className="w-full bg-[#EB5752] font-medium text-base hover:bg-[#EB5752]/90 transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer">
                    Connect with Boye
                  </Button>
                </motion.div>
              </div>

              <div className="p-6 border-t border-black/10">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-3"
                >
                  <div className="bg-white/30 p-2 rounded-lg backdrop-blur-sm">
                    <Image
                      src={"/img/BO1.png"}
                      alt="logo"
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-black/80 text-base uppercase">
                      BOYE OLOYEDE
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;