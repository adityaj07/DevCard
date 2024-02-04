"use client";

import { formValueAtom } from "../recoil/formValueAtom";
import DevCard from "@/components/DevCard";
import GradientSelector from "@/components/GradientSelector";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { ArrowRight } from "lucide-react";
import { FC } from "react";

interface CustomiseCardProps {}

const CustomiseCard: FC<CustomiseCardProps> = ({}) => {
  return (
    <div className="flex flex-col gap-2">

      <h1 className="text-3xl md:text-4xl mb-4 md:mb-6 font-semibold relative inline-flex gap-1 items-center justify-center text-center tracking-tighter text-[clamp(1.8rem,3vw,2.5rem)] leading-none  pb-4 mt-8">
        Personalize your DevCard
      </h1>

      <div className="flex flex-col gap-3 lg:flex-row border rounded-md p-2">
        <div className="w-full">
          {/* Card Component */}
          <DevCard />
        </div>

        <div className="flex flex-col gap-2 border border-zinc-400/15 w-full overflow-hidden rounded-md p-2">
          {/* Settings Component */}

          {/* Background Selector */}
          <GradientSelector />
          {/* Pattern Selector */}

          {/* Border-radius selector */}
          <div className="flex gap-2 w-full border py-3 px-4 justify-between items-center rounded-md dark:bg-[#1C1C1D]  hover:cursor-pointer ">
            <Label htmlFor="border-radius" className="w-[40%] text-start">
              Roundness
            </Label>
            <Slider defaultValue={[33]} max={100} step={1} id="border-radius" />
          </div>

          {/* shadow adjuster */}
          <div className="flex gap-2 w-full border py-3 px-4 justify-between items-center rounded-md dark:bg-[#1C1C1D]  hover:cursor-pointer ">
            <Label htmlFor="shadow-adjust" className="w-[40%] text-start">
              Shadow
            </Label>
            <Slider defaultValue={[33]} max={100} step={1} id="shadow-adjust" />
          </div>
          {/* shadow color selector */}

          {/* noise switch */}
          <div className="flex gap-2 justify-between w-full border py-3 px-4  items-center rounded-md dark:bg-[#1C1C1D]  hover:cursor-pointer ">
            <Label htmlFor="noise-switch" className="w-[40%] text-start">
              Noise
            </Label>
            <Switch id="noise-switch" />
          </div>

          <div>
            {/* Copy button */}
            {/* Create Devcard button */}
          </div>
          {/* Reset Button*/}
        </div>
      </div>
    </div>
  );
};

export default CustomiseCard;
