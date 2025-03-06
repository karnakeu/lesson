import React, { useState } from "react";
import Icon from "../assets/navbar/icon.svg";
import { SlMenu } from "react-icons/sl";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const navItems = [
  "Services",
  "Case Studies",
  "Working",
  "Team",
  "Testimonials",
];

const Navbar = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = (index) => {
    setActiveSection(index);
    if (openNavigation) {
      enablePageScroll();
      setOpenNavigation(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white z-50 flex items-center justify-between px-6 xl:px-[100px] py-4 lg:px-[25px] md:px-[60px] sm:px-[40px] xl:pt-[50px] lg:pt-[40px] md:pt-[30px] sm:pt-[20px] xl:pb-[20px] ${
        openNavigation ? "bg-n-8" : "bg-white"
      }`}
    >
      <div className="flex items-center justify-center gap-[10px]">
        <img src={Icon} alt="Navbar Icon" width={36} height={36} />
        <a href="hero">
          <h2>Positivus</h2>
        </a>
      </div>

      <button className="lg:hidden" onClick={toggleNavigation}>
        <SlMenu className="text-black w-[40px] h-[40px]" />
      </button>

      <div
        className={`${
          openNavigation
            ? "fixed top-[5rem] left-0 right-0 bottom-0 bg-white"
            : "hidden"
        } lg:flex lg:static lg:bg-transparent`}
      >
        <ul
          className={`flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 h-full lg:h-auto p-6 lg:p-0`}
        >
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                className={`relative xl:text-[20px] xl:font-medium lg:text-[18px] lg:font-regular md:text-[20px] md:font-medium sm:text-[20px] sm:font-medium transition-colors group ${
                  activeSection === index
                    ? "bg-green text-black px-4 py-2 rounded-[14px] "
                    : ""
                }`}
                onClick={() => handleClick(index)}
              >
                {item}
                {activeSection !== index && (
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                )}
              </a>
            </li>
          ))}

          <li className="mt-4 lg:mt-0">
            <a
              href="#contactus"
              className="px-4 py-2 xl:px-[35px] xl:py-[20px] lg:px-[25px] lg:py-[10px] border-[1.5px] border-black rounded-[14px] flex justify-center hover:bg-green hover:text-black shadow-md hover:shadow-lg active:shadow-md active:border-[2.5px] active:border-green-600 active:shadow-inset active:text-green-200 transition-all duration-300 ease-in-out"
              onClick={() => handleClick(null)}
            >
              <h4>Contact Us</h4>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
