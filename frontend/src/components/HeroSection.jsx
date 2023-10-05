import React from "react";
import { Carousel } from "flowbite-react";
import "../custom.css"
const HeroSection = () => {
  return (
    <div className="h-[20rem] bg-black z-10">
        <Carousel className="">
          <img className="absolute" 
            alt="..."
            src="https://i.pravatar.cc/1000"
          />
          <img
            alt="..."
            src="https://i.pravatar.cc/1000"
          />
          <img
            alt="..."
            src="https://i.pravatar.cc/1000"
          />
          <img
            alt="..."
            src="https://i.pravatar.cc/1000"
          />
          <img
            alt="..."
            src="https://i.pravatar.cc/1000"
          />
        </Carousel>
      </div>
  );
};

export default HeroSection;
