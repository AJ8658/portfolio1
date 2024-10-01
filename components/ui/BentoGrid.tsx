"use client";

import React, { FC, useState, useEffect } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "lottie-react";
import { cn } from "../../lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "../../data/confetti.json";
import MagicButton from "./MagicButton";

interface BentoGridProps {
  className?: string;
  children?: React.ReactNode;
}

export const BentoGrid: FC<BentoGridProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

interface BentoGridItemProps {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  email?: string;
}

const LEFT_LISTS = ["ReactJS", "Express", "Typescript"];
const RIGHT_LISTS = ["VueJS", "NuxtJS", "GraphQL"];

const ListItem: FC<{ item?: string }> = ({ item }) => (
  <span className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
    {item}
  </span>
);

export const BentoGridItem: FC<BentoGridItemProps> = ({
  className = "",
  id,
  title = "",
  description = "",
  img = "",
  imgClassName = "",
  titleClassName = "",
  spareImg = "",
  email = "ajadvw@icloud.com",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(() => {
        setCopied(true);
      }).catch(() => {
        // Optionally handle the error
      });
    } else {
      // Fallback method or notify user
      alert("Clipboard API not supported");
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (copied) {
      timer = setTimeout(() => setCopied(false), 3000);
    }
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={cn(id === 6 && "flex justify-center", "h-full")}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={title ? `Image for ${title}` : "Grid Image"}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={cn(
            "absolute right-0 -bottom-5",
            id === 5 && "w-full opacity-80"
          )}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={title ? `Spare image for ${title}` : "Spare Image"}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
              {/* Optional Text */}
            </div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">
            {title}
          </div>

          {id === 2 && <GridGlobe />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {LEFT_LISTS.map((item, i) => (
                  <ListItem key={i} item={item} />
                ))}
                <ListItem />
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <ListItem />
                {RIGHT_LISTS.map((item, i) => (
                  <ListItem key={i} item={item} />
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              {copied && (
                <div className="absolute -bottom-5 right-0">
                  <Lottie
                    animationData={animationData}
                    loop={false}
                    autoplay={true}
                    onComplete={() => setCopied(false)}
                    style={{ height: 200, width: 400 }}
                  />
                </div>
              )}
              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
                aria-label={copied ? "Email copied" : "Copy email address"}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};