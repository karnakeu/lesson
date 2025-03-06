import React from "react";
import { motion } from "framer-motion";
import Arrow1 from "../assets/services/arrow.svg";

const textAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const caseAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const CaseStudies = () => {
  return (
    <section
      id="casestudies"
      className="flex flex-col px-[20px] md:px-[40px] lg:px-[100px] w-full xl:mt-[30px]"
    >
      <motion.div
        className="flex flex-col md:flex-row items-center pt-[80px] md:pt-[140px] gap-[20px] md:gap-[40px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textAnimation}
      >
        <h2 className="bg-green rounded-lg px-[7px] whitespace-nowrap text-center md:text-left">
          Case Studies
        </h2>
        <p className="w-full md:w-[580px] text-center md:text-left">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col lg:flex-row py-[40px] md:py-[70px] px-[20px] md:px-[60px] items-center gap-[40px] md:gap-[64px] flex-shrink-0 bg-black rounded-[20px] md:rounded-[45px] mt-[40px] md:mt-[80px] max-h-auto lg:max-h-[326px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.3 } },
        }}
      >
        <motion.div
          className="flex flex-col items-start gap-[20px] relative w-full lg:w-1/3"
          variants={caseAnimation}
        >
          <p className="text-white">
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <div className="flex items-center gap-[10px]">
            <h4 className="text-green">Learn more</h4>
            <img src={Arrow1} alt="Arrow1" />
          </div>

          <div className="w-full h-[1px] bg-white mt-[20px] lg:hidden"></div>

          <div className="absolute right-[-20px] md:right-[-32px] top-0 h-full w-[1px] bg-white hidden lg:block"></div>
        </motion.div>

        <motion.div
          className="flex flex-col items-start gap-[20px] relative w-full lg:w-1/3"
          variants={caseAnimation}
        >
          <p className="text-white">
            For a B2B software company, we developed an SEO strategy that
            resulted in a first page ranking for key keywords and a 200%
            increase in organic traffic.
          </p>
          <div className="flex items-center gap-[10px]">
            <h4 className="text-green">Learn more</h4>
            <img src={Arrow1} alt="Arrow1" />
          </div>

          <div className="w-full h-[1px] bg-white mt-[20px] lg:hidden"></div>

          <div className="absolute right-[-20px] md:right-[-32px] top-0 h-full w-[1px] bg-white hidden lg:block"></div>
        </motion.div>

        <motion.div
          className="flex flex-col items-start gap-[20px] w-full lg:w-1/3"
          variants={caseAnimation}
        >
          <p className="text-white">
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </p>
          <div className="flex items-center gap-[10px]">
            <h4 className="text-green">Learn more</h4>
            <img src={Arrow1} alt="Arrow1" />
          </div>

          <div className="w-full h-[1px] bg-white mt-[20px] lg:hidden"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CaseStudies;
