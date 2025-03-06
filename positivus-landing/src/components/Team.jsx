import React from "react";
import { motion } from "framer-motion";
import Picture1 from "../assets/team/1.svg";
import Picture2 from "../assets/team/2.svg";
import Picture3 from "../assets/team/3.svg";
import Picture4 from "../assets/team/4.svg";
import Picture5 from "../assets/team/5.svg";
import Picture6 from "../assets/team/6.svg";
import In from "../assets/team/in.svg";
import "./design/Team.css";

const Team = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerChildren = 0.2;

  return (
    <section
      id="team"
      className="team-section flex flex-col sm:px-10 md:px-16 lg:px-20 xl:px-24 w-full"
    >
      <motion.div
        className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start text-center md:text-left pt-[80px] md:pt-[140px] gap-[20px] md:gap-[40px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        <h2 className="bg-green rounded-lg px-[7px] whitespace-nowrap text-center md:text-left">
          Team
        </h2>
        <p className="w-full md:w-[473px] text-center md:text-left">
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-between gap-[40px] mt-[80px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren }}
      >
        <motion.div
          className="team-member flex w-auto xl:w-[420px] h-auto xl:h-[331px] py-[40px] px-[35px] flex-col justify-between items-start border border-black rounded-[45px] shadow-[0px_5px_0px_0px_#191A23]"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-[20px] w-full">
            <img src={Picture1} alt="Picture1" width={104} height={104} />
            <div className="flex flex-col pt-[45px] flex-1">
              <h4>John Smith</h4>
              <p>CEO and Founder</p>
            </div>
            <img
              className="pb-[69px] ml-auto self-start"
              src={In}
              alt="In"
              width={34}
              height={34}
            />
          </div>

          <div className="w-full border-t-[1.5px] border-black mt-[28px] mb-[28px]"></div>

          <p>
            10+ years of experience in digital marketing. Expertise in SEO, PPC,
            and content strategy
          </p>
        </motion.div>

        <motion.div
          className="team-member flex w-full xl:w-[420px] h-auto xl:h-[331px] py-[40px] px-[35px] flex-col justify-between items-start border border-black rounded-[45px] shadow-[0px_5px_0px_0px_#191A23]"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: staggerChildren }}
        >
          <div className="flex items-center gap-[20px] w-full">
            <img src={Picture2} alt="Picture2" width={104} height={104} />
            <div className="flex flex-col pt-[45px] flex-1">
              <h4>Jane Doe</h4>
              <p className="whitespace-nowrap">Director of Operations</p>
            </div>
            <img
              className="relative mb-[69px] xl:right-10 ml-auto self-start"
              src={In}
              alt="In"
              width={34}
              height={34}
            />
          </div>

          <div className="w-full border-t-[1.5px] border-black mt-[28px]"></div>

          <p className="mt-[28px]">
            7+ years of experience in project management and team leadership.
            Strong organizational and communication skills
          </p>
        </motion.div>

        <motion.div
          className="team-member flex w-full xl:w-[420px] h-auto xl:h-[331px] py-[40px] px-[35px] flex-col justify-between items-start border border-black rounded-[45px] shadow-[0px_5px_0px_0px_#191A23]"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: staggerChildren * 2 }}
        >
          <div className="flex items-center gap-[20px] w-full">
            <img src={Picture3} alt="Picture3" width={104} height={104} />
            <div className="flex flex-col pt-[45px] flex-1">
              <h4>Michael Brown</h4>
              <p className="whitespace-nowrap">Senior SEO Specialist</p>
            </div>
            <img
              className="relative xl:right-7 pb-[69px] ml-auto self-start"
              src={In}
              alt="In"
              width={34}
              height={34}
            />
          </div>

          <div className="w-full border-t-[1.5px] border-black mt-[28px]"></div>

          <p className="mt-[28px]">
            5+ years of experience in SEO and content creation. Proficient in
            keyword research and on-page optimization
          </p>
        </motion.div>

        <motion.div
          className="team-member flex w-full xl:w-[420px] h-auto xl:h-[354px] py-[40px] px-[35px] flex-col justify-between items-start border border-black rounded-[45px] shadow-[0px_5px_0px_0px_#191A23]"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: staggerChildren * 3 }}
        >
          <div className="flex items-center gap-[20px] w-full">
            <img src={Picture4} alt="Picture4" width={104} height={104} />
            <div className="flex flex-col pt-[45px] flex-1">
              <h4>Emily Johnson</h4>
              <p>PPC Manager</p>
            </div>
            <img
              className="relative pb-[69px] xl:left-1 ml-auto self-start"
              src={In}
              alt="In"
              width={34}
              height={34}
            />
          </div>

          <div className="w-full border-t-[1.5px] border-black mt-[28px]"></div>

          <p className="mt-[28px]">
            3+ years of experience in paid search advertising. Skilled in
            campaign management and performance analysis
          </p>
        </motion.div>

        <motion.div
          className="team-member flex w-full xl:w-[420px] h-auto xl:h-[354px] py-[40px] px-[35px] flex-col justify-between items-start border border-black rounded-[45px] shadow-[0px_5px_0px_0px_#191A23]"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: staggerChildren * 4 }}
        >
          <div className="flex items-center gap-[20px] w-full">
            <img src={Picture5} alt="Picture5" width={104} height={104} />
            <div className="flex flex-col pt-[20px] flex-1">
              <h4>Brian Williams</h4>
              <p>Social Media Specialist</p>
            </div>
            <img
              className="relative pb-[69px] xl:right-5 ml-auto self-start"
              src={In}
              alt="In"
              width={34}
              height={34}
            />
          </div>

          <div className="w-full border-t-[1.5px] border-black mt-[28px]"></div>

          <p className="mt-[28px]">
            4+ years of experience in social media marketing. Proficient in
            creating and scheduling content, analyzing metrics, and building
            engagement
          </p>
        </motion.div>

        <motion.div
          className="team-member flex w-full xl:w-[420px] h-auto xl:h-[354px] py-[40px] px-[35px] flex-col justify-between items-start border border-black rounded-[45px] shadow-[0px_5px_0px_0px_#191A23]"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: staggerChildren * 5 }}
        >
          <div className="flex items-center gap-[20px] w-full">
            <img src={Picture6} alt="Picture6" width={104} height={104} />
            <div className="flex flex-col pt-[45px] flex-1">
              <h4>Sarah Kim</h4>
              <p>Content Creator</p>
            </div>
            <div className="ml-auto self-start xl:mr-4">
              <img src={In} alt="In" width={34} height={34} />
            </div>
          </div>

          <div className="w-full border-t-[1.5px] border-black mt-[28px]"></div>

          <p className="mt-[28px]">
            2+ years of experience in writing and editing. Skilled in creating
            compelling, SEO-optimized content for various industries
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-end justify-end"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: staggerChildren * 6 }}
      >
        <button
          type="submit"
          className="flex px-[35px] py-[20px] items-center justify-center gap-[10px] text-white bg-black border-[1.5px] border-black transition-all duration-300 ease-in-out transform hover:scale-[1.03] active:scale-[0.98] hover:bg-green hover:text-black shadow-md hover:shadow-lg active:shadow-md rounded-[14px] w-[269px] mt-[40px]"
        >
          See all team
        </button>
      </motion.div>
    </section>
  );
};

export default Team;
