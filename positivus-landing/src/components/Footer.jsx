import React from "react";
import { motion } from "framer-motion";
import Icon from "../assets/navbar/icon.svg";
import Logo1 from "../assets/footer/1.svg";
import Logo2 from "../assets/footer/2.svg";
import Logo3 from "../assets/footer/3.svg";

const Footer = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerChildren = 0.2;

  return (
    <section className="w-full xl:px-[100px]">
      <motion.div
        className="flex flex-col w-full xl:px-[60px] h-auto xl:py-[55px] mt-[140px] xl:h-[600px] bg-black xl:rounded-t-[45px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren }}
      >
        <motion.div
          className="flex flex-col xl:flex-row"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex xl:flex-start items-center justify-center py-[10px] gap-[10px] mt-[20px] xl:mt-0"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <img
              src={Icon}
              alt="Navbar Icon"
              height={36}
              width={36}
              className="filter brightness-0 invert"
            />
            <h2 className="text-white">Positivus</h2>
          </motion.div>

          <motion.div
            className="flex items-center justify-center xl:justify-between xl:ml-[125px] flex-col xl:flex-row gap-[20px] xl:gap-0 mt-[20px] xl:mt-0"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: staggerChildren }}
          >
            <a href="#services">
              <p className="text-white xl:ml-[40px] underline">Services</p>
            </a>
            <a href="#casestudies">
              <p className="text-white xl:ml-[40px] underline">Case Studies</p>
            </a>
            <a href="#working">
              <p className="text-white xl:ml-[40px] underline">Working</p>
            </a>
            <a href="#team">
              <p className="text-white xl:ml-[40px] underline">Team</p>
            </a>
            <a href="#testimonials">
              <p className="text-white xl:ml-[40px] underline">Testimonials</p>
            </a>
          </motion.div>

          <motion.div
            className="flex items-center justify-center xl:justify-between xl:ml-[220px] mt-[50px] xl:mt-0"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: staggerChildren * 2 }}
          >
            <img src={Logo1} alt="Logo1" width={30} height={30} />
            <img
              src={Logo2}
              alt="Logo2"
              width={30}
              height={30}
              className="ml-[20px]"
            />
            <img
              src={Logo3}
              alt="Logo3"
              width={30}
              height={30}
              className="ml-[20px]"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col text-center items-center xl:items-start xl:text-start xl:flex-row xl:mt-[67px] mt-[50px]"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: staggerChildren * 3 }}
        >
          <motion.div
            className="flex flex-col items-center xl:items-start"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h4 className="bg-green inline-block xl:px-[7px] rounded-[7px] w-fit text-center xl:text-left">
              Contact us:
            </h4>
            <p className="text-white mt-[27px]">Email: info@positivus.com</p>
            <p className="text-white mt-[27px]">Phone: 555-567-8901</p>
            <p className="text-white mt-[27px]">
              Address: 1234 Main St Moonstone City, Stardust State 12345
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col lg:flex-row items-center justify-between lg:w-[634px] lg:h-[184px] w-[450px] h-[210px] py-[25px] bg-dark rounded-[14px] xl:ml-[154px] xl:py-[58px] px-[40px] my-[30px]"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: staggerChildren * 4 }}
          >
            <div className="flex">
              <input
                type="email"
                id="email"
                name="email"
                className="py-[22px] px-[35px] text-white border border-white bg-dark rounded-[14px] w-[285px]"
                placeholder="Email"
                required
              />
            </div>
            <button
              type="submit"
              className="flex px-[35px] py-[20px] items-center justify-center border-2 border-black transition-all duration-300 ease-in-out bg-green text-black shadow-md hover:shadow-lg active:shadow-md rounded-[14px] hover:px-[37px] hover:py-[22px] active:px-[33px] active:py-[18px]"
            >
              Subscribe to news
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col xl:flex-row xl:my-[50px] border-t border-white"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: staggerChildren * 5 }}
        />

        <motion.div
          className="flex flex-col xl:flex-row text-center items-center justify-center mt-[20px] xl:mt-0"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: staggerChildren * 6 }}
        >
          <p className="text-white xl:mb-[20px]">
            © 2023 Positivus. All Rights Reserved.
          </p>
          <p className="text-white underline xl:ml-[800px] mt-[20px] mb-[20px] xl:mt-0">
            Privacy Policy
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Footer;
