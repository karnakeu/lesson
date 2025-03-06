import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Picture from "../assets/hero/1.svg";
import Amazon from "../assets/hero/amazon.svg";
import Dribbble from "../assets/hero/dribbble.svg";
import Hubspot from "../assets/hero/hubspot.svg";
import Notion from "../assets/hero/notion.svg";
import Netflix from "../assets/hero/netflix.svg";
import Zoom from "../assets/hero/zoom.svg";
import "./design/Hero.css";

const Hero = () => {
  const logosRef = useRef(null);

  useEffect(() => {
    const logosElement = logosRef.current;

    const timeoutId = setTimeout(() => {
      if (logosElement) {
        logosElement.classList.add("paused");
      }
    }, 10000);

    return () => clearTimeout(timeoutId);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <section className="hero-section pt-24 sm:pt-28 md:pt-32 lg:pt-30 xl:pt-30 2xl:pt-40 flex flex-col-reverse lg:flex-row justify-between items-center w-full px-5 sm:px-10 md:px-16 lg:px-20 xl:px-24 relative">
        <motion.div
          className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 max-w-[532px]"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl font-medium xl:pb-[30px] lg:pb-[20px] leading-[40px]"
            variants={fadeInUp}
            style={{ lineHeight: "1.2" }}
          >
            Navigating the digital landscape for success
          </motion.h1>

          <motion.img
            className="lg:hidden w-full max-w-[450px] sm:max-w-[550px] mt-6"
            src={Picture}
            alt="Illustration"
            width={550}
            height={500}
            variants={fadeInUp}
          />

          <motion.p
            className="text-base font-medium sm:text-lg md:text-xl lg:text-xl xl:text-xl xl:pb-[10px] lg:pb-[10px]"
            variants={fadeInUp}
          >
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </motion.p>

          <motion.button
            type="submit"
            className="bg-black text-white border-[1.5px] border-black transition-all duration-300 ease-in-out transform hover:scale-[1.03] active:scale-[0.98] hover:bg-green hover:text-black shadow-md hover:shadow-lg active:shadow-md text-base sm:text-lg md:text-xl px-8 py-4 sm:px-10 sm:py-5 rounded-[14px] hover:bg-gray-800 w-full sm:w-auto"
            variants={fadeInUp}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Book a consultation
          </motion.button>
        </motion.div>

        <motion.img
          className="hidden lg:block flex-shrink-0 mt-8 lg:mt-0"
          src={Picture}
          alt="Illustration"
          width={650}
          height={550}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        />
      </section>

      <div className="moving-logos-container sm:px-10 md:px-16 lg:px-20 xl:px-24 mt-[50px]">
        <motion.div
          ref={logosRef}
          className="moving-logos"
          animate={{ x: ["-100%", "0%"] }}
          transition={{ duration: 10, ease: "linear" }}
        >
          {[Amazon, Dribbble, Hubspot, Notion, Netflix, Zoom].map(
            (logo, index) => (
              <img key={index} src={logo} alt="Company Logo" className="logo" />
            )
          )}
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
