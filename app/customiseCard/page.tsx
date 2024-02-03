import { formValueAtom } from "../recoil/formValueAtom";
import DevCard from "@/components/DevCard";
import { FC } from "react";

interface CustomiseCardProps {}

const CustomiseCard: FC<CustomiseCardProps> = ({}) => {

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-3xl md:text-4xl mb-4 md:mb-6 font-semibold relative inline-flex gap-1 items-center justify-center text-center tracking-tighter text-[clamp(1.8rem,3vw,2.5rem)] leading-none  pb-4 mt-8">
        Personlize your DevCard
      </h1>
      <div className="flex flex-col gap-3 md:flex">
          <div >
            {/* Card Component */}
            <DevCard />
          </div>
          <div>
            {/* Settings Component */}

            {/* Background Selector */}
            {/* Pattern Selector */}
            {/* Border-radius selector */}
            {/* shadow adjuster */}
            {/* shadow color selector */}
            {/* noise switch */}

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
