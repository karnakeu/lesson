import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Green from "../assets/testimonials/green.svg";
import White from "../assets/testimonials/white.svg";
import Arrow3 from "../assets/testimonials/arrow3.svg";

const testimonials = [
  {
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
  },
  {
    text: "Partnering with Positivus has been a game-changer for our business. Their expertise in digital marketing has helped us expand our reach and connect with the right audience. The team is proactive, results-driven, and always ready to go the extra mile. We couldn’t be happier with the results!",
    name: "Emily Johnson",
    position: "CEO at ABC Ltd",
  },
  {
    text: "Since we started working with Positivus, our brand visibility has skyrocketed. Their strategic approach and data-driven insights have brought in more leads than we ever anticipated. The team is professional, easy to work with, and genuinely invested in our growth.",
    name: "Michael Brown",
    position: "Head of Digital at QRS Agency",
  },
  {
    text: "Positivus transformed our online presence in ways we never thought possible. Their creative strategies and attention to detail have helped us attract more customers and improve engagement. If you’re looking for a reliable digital marketing partner, Positivus is the way to go!",
    name: "Sarah Johnson",
    position: "Operations Manager at GHI Ltd",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const getVisibleTestimonials = () => {
    if (windowWidth < 768) {
      return [testimonials[index]];
    } else {
      const prevIndex = index === 0 ? testimonials.length - 1 : index - 1;
      const nextIndex = index === testimonials.length - 1 ? 0 : index + 1;
      return [
        testimonials[prevIndex],
        testimonials[index],
        testimonials[nextIndex],
      ];
    }
  };

  const testimonialVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  };

  return (
    <section
      className="flex flex-col px-5 md:px-10 lg:px-24 w-full"
      id="testimonials"
    >
      <div className="flex flex-col md:flex-row items-center text-center md:text-left pt-20 md:pt-36 gap-5 md:gap-10">
        <h2 className="bg-green rounded-lg px-3">Testimonials</h2>
        <p className="w-full md:w-[473px]">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>
      <div className="flex flex-col items-center mt-10 md:mt-20 rounded-[45px] py-10 md:py-20 bg-black h-[700px] md:h-[625px] overflow-hidden relative w-full">
        <div className="flex justify-center gap-5 md:gap-12 transition-transform duration-500 ease-in-out">
          <AnimatePresence mode="wait">
            {getVisibleTestimonials().map((testimonial, i) => (
              <motion.div
                key={i}
                className="relative border-2 border-green rounded-[45px] text-white bg-black w-full md:w-[606px] h-[400px] md:h-[266px] flex flex-col justify-center px-8 md:px-12 py-4 md:py-0 mx-5"
                variants={testimonialVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <p className="text-white">{testimonial.text}</p>
                <span className="absolute bottom-[-21px] left-11 md:left-12 w-10 h-10 bg-black border-l-2 border-b-2 border-green transform -rotate-45"></span>
                <div
                  className="absolute left-5 md:left-12 mt-6"
                  style={{ top: "calc(100% + 20px)" }}
                >
                  <h4 className="text-green">{testimonial.name}</h4>
                  <p className="text-white">{testimonial.position}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="flex items-center justify-between gap-4 mt-[170px] md:mt-40 mb-8">
          <button onClick={prevTestimonial}>
            <img
              src={Arrow3}
              alt="Previous"
              width={40}
              className="hover:opacity-100 opacity-50 transition-opacity rotate-180"
            />
          </button>
          <div className="flex gap-2.5 md:gap-5 mx-5 md:mx-52">
            {testimonials.map((_, i) => (
              <img
                key={i}
                src={i === index ? Green : White}
                alt="Indicator"
                className="w-4 h-4 md:w-5 md:h-5 transition-opacity duration-300"
              />
            ))}
          </div>
          <button onClick={nextTestimonial}>
            <img
              src={Arrow3}
              alt="Next"
              width={40}
              className="hover:opacity-100 opacity-50 transition-opacity"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
