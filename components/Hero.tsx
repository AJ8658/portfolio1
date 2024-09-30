import React from "react";
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="relative h-screen w-full bg-white dark:bg-black-100 dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center">
      {/* Radial gradient overlay */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* Spotlights */}
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
      <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
      <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />

      {/* Main content */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-[80%]">
            Dynamic Web Magic with Next.js
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming your websites with dynamic content."
          />  
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-base lg:text-2x1">Hi! I&apos;m Ajad, a finance and business administration specialist</p>
          <a href="#about" ></a>
          <MagicButton
            title="About"
            icon={<FaLocationArrow />}
            position="right" 
            />
        </div>
      </div>
    </div>
  );
};

export default Hero;