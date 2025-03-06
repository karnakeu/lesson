import React from "react";
import { motion } from "framer-motion";
import Picture1 from "../assets/services/1.svg";
import Picture2 from "../assets/services/2.svg";
import Picture3 from "../assets/services/3.svg";
import Picture4 from "../assets/services/4.svg";
import Picture5 from "../assets/services/5.svg";
import Picture6 from "../assets/services/6.svg";
import Picture7 from "../assets/services/7.svg";
import Arrow1 from "../assets/services/arrow.svg";
import Arrow2 from "../assets/services/arrow2.svg";
import "./design/Services.css";

const servicesData = [
  {
    title: "Search Engine Optimization",
    image: Picture1,
    bgColor: "bg-gray",
    textBgColor: "bg-green",
    textColor: "text-black",
    LearnColor: "text-black",
  },
  {
    title: "Pay-Per-Click Advertising",
    image: Picture2,
    bgColor: "bg-green",
    textBgColor: "bg-white",
    textColor: "text-black",
    LearnColor: "text-black",
  },
  {
    title: "Social Media Marketing",
    image: Picture3,
    bgColor: "bg-black",
    textBgColor: "bg-white",
    textColor: "text-black",
    LearnColor: "text-white",
  },
  {
    title: "Email Marketing",
    image: Picture4,
    bgColor: "bg-gray",
    textBgColor: "bg-green",
    textColor: "text-black",
    LearnColor: "text-black",
  },
  {
    title: "Content Creation",
    image: Picture5,
    bgColor: "bg-green",
    textBgColor: "bg-white",
    textColor: "text-black",
    LearnColor: "text-black",
  },
  {
    title: "Analytics and Tracking",
    image: Picture6,
    bgColor: "bg-black",
    textBgColor: "bg-green",
    textColor: "text-black",
    LearnColor: "text-white",
  },
];

const textAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const cardAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ctaAnimation = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

const Services = () => {
  return (
    <section id="services" className="flex flex-col w-full">
      <motion.div
        className="flex flex-col md:flex-row items-center md:items-start mt-[80px] md:mt-[100px] lg:mt-[120px] xl:mt-[140px] gap-[20px] md:gap-[40px] px-[20px] md:px-[60px] lg:px-[100px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textAnimation}
      >
        <h2 className="bg-green rounded-lg px-[7px] py-[3px] text-center md:text-left">
          Services
        </h2>
        <p className="pl-[0] md:pl-[40px] pr-[0] text-left md:text-center lg:text-left max-w-full lg:max-w-[400px] xl:max-w-[600px] 2xl:max-w-[700px]">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-[20px] md:gap-[30px] lg:gap-[40px] mt-[40px] md:mt-[60px] lg:mt-[80px] mx-auto w-full max-w-[calc(100%-40px)] md:max-w-[calc(100%-80px)] lg:max-w-[calc(100%-100px)] px-[20px] md:px-[40px] lg:px-[45px]">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className={`service-card flex flex-col md:flex-row w-full lg:w-full xl:w-[calc(50%-20px)] h-[250px] md:h-[280px] lg:h-[310px] p-[20px] md:p-[30px] lg:p-[50px] justify-between items-center border ${service.bgColor} rounded-[30px] lg:rounded-[45px] shadow-[0px_5px_0px_0px_#191A23]`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardAnimation}
            transition={{ delay: index * 0.2 }}
          >
            <div className="flex flex-col items-start w-full md:hidden">
              <h3
                className={`${service.textBgColor} rounded-lg px-[7px] font-medium text-[25px] ${service.textColor}`}
              >
                {service.title.split(" ")[0]}
              </h3>
              <h3
                className={`${service.textBgColor} rounded-lg px-[7px] text-[25px] ${service.textColor}`}
              >
                {service.title.split(" ").slice(1).join(" ")}
              </h3>
            </div>

            <div className="flex items-center justify-between w-full md:hidden mt-[20px]">
              <div
                className={`${
                  service.bgColor === "bg-black" ? "bg-white" : "bg-black"
                } rounded-[30px] md:rounded-[41px] w-[30px] h-[30px] md:w-[41px] md:h-[41px] flex items-center justify-center`}
              >
                <img
                  src={service.bgColor === "bg-black" ? Arrow2 : Arrow1}
                  alt="Arrow"
                  width={15}
                  height={0}
                />
              </div>
              <img
                className="flex py-[20px] md:mb-[20px] justify-center items-center flex-shrink-0"
                src={service.image}
                alt={service.title}
                width={150}
                height={100}
              />
            </div>

            <div className="hidden md:flex flex-col items-start">
              <h3
                className={`${service.textBgColor} rounded-lg px-[7px] ${service.textColor}`}
              >
                {service.title.split(" ")[0]}
              </h3>
              <h3
                className={`${service.textBgColor} rounded-lg px-[7px] ${service.textColor}`}
              >
                {service.title.split(" ").slice(1).join(" ")}
              </h3>
              <div className="flex items-center gap-[10px] md:gap-[15px] pt-[40px] md:pt-[60px] lg:pt-[93px]">
                <div
                  className={`${
                    service.bgColor === "bg-black" ? "bg-white" : "bg-black"
                  } rounded-[30px] md:rounded-[41px] w-[30px] h-[30px] md:w-[41px] md:h-[41px] flex items-center justify-center`}
                >
                  <img
                    src={service.bgColor === "bg-black" ? Arrow2 : Arrow1}
                    alt="Arrow"
                    width={15}
                    height={0}
                  />
                </div>
                <h4 className={`learn-more-button ${service.LearnColor}`}>
                  Learn more
                </h4>
              </div>
            </div>
            <img
              className="hidden md:flex py-[20px] md:py-[40px] lg:py-[70px] justify-center items-center flex-shrink-0"
              src={service.image}
              alt={service.title}
              width={210}
              height={170}
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="cta-block flex flex-col lg:flex-row p-[20px] md:p-[40px] lg:p-[60px] items-center justify-center gap-[20px] md:gap-[40px] lg:gap-[275px] flex-shrink-0 bg-gray rounded-[30px] lg:rounded-[45px] mx-[20px] md:mx-[50px] lg:mx-[100px] mt-[40px] md:mt-[60px] lg:mt-[100px] h-auto lg:h-[347px] xl:mt-[120px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={ctaAnimation}
      >
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full max-w-[1200px]">
          <div className="flex flex-col items-start w-full max-w-[500px] xl:max-w-[700px] pr-[20px] md:pr-[40px] lg:pr-[60px] py-[20px] md:py-[40px] lg:py-[60px]">
            <h3 className="2xl:w-[500px] xl:w-[350px] text-2xl md:text-3xl lg:text-4xl font-bold">
              Let’s make things happen
            </h3>
            <p className="pt-[10px] md:pt-[20px] lg:pt-[26px] pb-[10px] md:pb-[20px] lg:pb-[26px]">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <button
              type="submit"
              className="cta-button flex px-[20px] md:px-[30px] lg:px-[35px] py-[10px] md:py-[15px] lg:py-[20px] items-center justify-center max-w-[288px] bg-black text-white border-[1.5px] border-black transition-all duration-300 ease-in-out transform hover:scale-[1.03] active:scale-[0.98] hover:bg-green hover:text-black shadow-md hover:shadow-lg active:shadow-md rounded-[10px] md:rounded-[14px]"
            >
              Get your free proposal
            </button>
          </div>
          <img
            className="hidden xl:block pl-[0] lg:pl-[300px]"
            src={Picture7}
            alt="Call to action"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
