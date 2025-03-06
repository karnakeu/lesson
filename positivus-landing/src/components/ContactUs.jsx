import React, { useState } from "react";
import { motion } from "framer-motion";
import Picture1 from "../assets/contactus/1.svg";

const ContactUs = () => {
  const [selectedOption, setSelectedOption] = useState("sayHi");

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="contactus"
      className="flex flex-col px-[20px] md:px-[40px] lg:px-[100px] w-full"
    >
      <motion.div
        className="flex flex-col md:flex-row items-center pt-[80px] md:pt-[140px] gap-[20px] md:gap-[40px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        <h2 className="bg-green rounded-lg px-[7px] whitespace-nowrap text-center md:text-left">
          Contact Us
        </h2>
        <p className="w-full md:w-[323px] text-center md:text-left">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col lg:flex-row bg-gray rounded-[20px] md:rounded-[45px] h-auto lg:h-[773px] mt-[40px] md:mt-[80px] py-[40px] md:py-[60px] px-[20px] md:px-[40px] lg:px-[100px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.div
          className="w-full lg:w-[556px] h-auto"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <form>
            <motion.div
              className="flex flex-row items-center"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div
                className="flex items-center cursor-pointer"
                onClick={() => setSelectedOption("sayHi")}
              >
                <div className="relative bg-white h-[28px] w-[28px] rounded-3xl border border-black mr-[14px]">
                  {selectedOption === "sayHi" && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green h-[16px] w-[16px] rounded-full"></div>
                  )}
                </div>
                <p>Say Hi</p>
              </div>

              <div
                className="flex items-center cursor-pointer ml-[35px]"
                onClick={() => setSelectedOption("getQuote")}
              >
                <div className="relative bg-white h-[28px] w-[28px] rounded-3xl border border-black mr-[14px]">
                  {selectedOption === "getQuote" && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green h-[16px] w-[16px] rounded-full"></div>
                  )}
                </div>
                <p>Get a Quote</p>
              </div>
            </motion.div>

            <motion.div
              className="mt-[20px] md:mt-[40px] flex flex-col"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="py-[12px] md:py-[18px] px-[20px] md:px-[30px] mt-[5px] border border-black rounded-[10px] md:rounded-[14px] w-full lg:w-[556px]"
                placeholder="Name"
              />
            </motion.div>

            <motion.div
              className="mt-[20px] md:mt-[40px] flex flex-col"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                className="py-[12px] md:py-[18px] px-[20px] md:px-[30px] mt-[5px] border border-black rounded-[10px] md:rounded-[14px] w-full lg:w-[556px]"
                placeholder="Email"
                required
              />
            </motion.div>

            <motion.div
              className="mt-[20px] md:mt-[40px] flex flex-col"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <label htmlFor="message">Message*</label>
              <textarea
                name="message"
                id="message"
                className="py-[12px] md:py-[18px] px-[20px] md:px-[30px] mt-[5px] border border-black rounded-[10px] md:rounded-[14px] w-full lg:w-[556px] h-[120px] md:h-[190px]"
                placeholder="Message"
                required
              ></textarea>

              <motion.button
                type="submit"
                className="flex px-[20px] md:px-[35px] py-[12px] md:py-[20px] items-center justify-center gap-[10px] bg-black text-white rounded-[10px] md:rounded-[14px] w-full lg:w-[556px] mt-[20px] md:mt-[40px] border-[1.5px] border-black transition-all duration-300 ease-in-out transform hover:scale-[1.03] active:scale-[0.98] hover:bg-green hover:text-black shadow-2xl hover:shadow-lg active:shadow-2xl active:border-[2.5px] active:border-green-600 active:shadow-inset active:text-green-200"
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Send Message
              </motion.button>
            </motion.div>
          </form>
        </motion.div>

        <motion.img
          className="hidden 2xl:block ml-[40px] 2xl:ml-[425px]"
          src={Picture1}
          alt="Picture1"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.7 }}
        />
      </motion.div>
    </section>
  );
};

export default ContactUs;
