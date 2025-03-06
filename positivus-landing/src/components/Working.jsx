import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Plus from "../assets/working/1.svg";
import Minus from "../assets/working/2.svg";

const accordionData = [
  {
    id: 1,
    title: "Consultation",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: 2,
    title: "Research and Strategy Development",
    content:
      "Our team will conduct in-depth market research to analyze industry trends, competitor strategies, and customer behavior. Based on these insights, we will create a tailored strategy to help you achieve your business objectives efficiently.",
  },
  {
    id: 3,
    title: "Implementation",
    content:
      "Once the strategy is finalized, we move forward with executing the plan. This may involve setting up marketing campaigns, developing content, optimizing digital assets, and deploying necessary tools to ensure seamless execution.",
  },
  {
    id: 4,
    title: "Monitoring and Optimization",
    content:
      "We continuously track the performance of our implemented strategies, analyzing key metrics and identifying areas for improvement. Based on the data, we make necessary adjustments to enhance results and maximize effectiveness.",
  },
  {
    id: 5,
    title: "Reporting and Communication",
    content:
      "Regular reports will be provided to keep you updated on progress and key performance indicators. We ensure transparent communication, offering insights into what’s working and what can be improved for better outcomes.",
  },
  {
    id: 6,
    title: "Continual Improvement",
    content:
      "Our approach is based on ongoing optimization. We consistently refine strategies, test new approaches, and implement innovations to ensure long-term success and sustained growth for your business.",
  },
];

const textAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const contentAnimation = {
  hidden: { opacity: 0, maxHeight: 0 },
  visible: {
    opacity: 1,
    maxHeight: 500,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    maxHeight: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const Working = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleAccordion = (index) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  return (
    <section
      id="working"
      className="flex flex-col px-[20px] md:px-[40px] lg:px-[100px] w-full"
    >
      <motion.div
        className="flex flex-col md:flex-row items-center pt-[80px] md:pt-[140px] gap-[20px] md:gap-[40px] xl:mt-[30px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textAnimation}
      >
        <h2 className="bg-green rounded-lg px-[7px] whitespace-nowrap text-center md:text-left">
          Our Working Process
        </h2>
        <p className="w-full md:w-[292px] text-center md:text-left">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </motion.div>

      <div className="flex flex-col mt-[40px] md:mt-[80px]">
        {accordionData.map((item) => (
          <motion.div
            key={item.id}
            className={`border border-black rounded-[20px] md:rounded-[45px] shadow-[0px_5px_0px_0px_#191A23] mb-4 py-[20px] md:py-[41px] px-[20px] md:px-[60px] mt-[20px] transition-all duration-300 ${
              openIndexes.includes(item.id) ? "bg-green" : "bg-gray-100"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAccordion(item.id)}
            >
              <h3 className="flex items-center font-medium xl:text-[30px] md:text-[25px] text-[20px]">
                <h1 className="inline text-black mr-2 pr-[10px] md:pr-[25px]">{`0${item.id}`}</h1>
                {item.title}
              </h3>
              <button className="text-black">
                <img
                  src={openIndexes.includes(item.id) ? Minus : Plus}
                  alt="toggle icon"
                  className="w-[40px] h-[40px] md:w-[58px] md:h-[58px]"
                />
              </button>
            </div>

            <AnimatePresence>
              {openIndexes.includes(item.id) && (
                <motion.div
                  className="mt-3 border-t-[1.5px] border-black pt-3 overflow-hidden"
                  variants={contentAnimation}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <p className="mt-[10px] md:mt-[20px] text-[14px] md:text-[16px]">
                    {item.content}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Working;
