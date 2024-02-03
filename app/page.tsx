"use client"

import Spotlight from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/button";
import { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
// import BackgroundImage from "@/components/ui/BackgroundImage";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  return (
    <>
   
      <motion.div
        className=" rounded-3xl md:mt-6 h-[45rem] flex flex-col p-2 md:p-4 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
         {/* <BackgroundImage/> */}
        <Spotlight
          className="left-0 top-20 md:left-32  md:top-0 lg:left-64 lg:-top-60"
          fill="white "
        />
        <div className="flex flex-col justify-center items-center z-[10]">
          <h1 className=" gap-1 items-center tracking-tighter text-[clamp(4rem,5vw,3rem)] leading-tight md:leading-tight font-medium mb-6 mt-16 block md:inline">
            Code.{" "}
            <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
              Connect.
            </span>{" "}
            Shine.
          </h1>
          <p
            className="font-medium inline-flex gap-1 items-center tracking-tight text-[clamp(.875rem,5vw,1.125rem)] leading-snug md:w-[80%]
"
          >
            Unleash your coding prowess, connect with fellow developers, and
            showcase your journey. Create your DevCard now and explore the
            vibrant DevCard Wall community
          </p>
          <Link href="/createCard" className="flex gap-6 mt-8">
            <Button variant="default" size="lg" className="bg-[#37D0EE]">
              Get Started
            </Button>
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
