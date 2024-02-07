import { FC } from "react";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { presetGradients } from "@/app/data";
import { gradientDirectionOptions } from "@/app/data";
import { ArrowRight } from "lucide-react";
import { useRecoilState } from "recoil";
import {
  selectedGradientAtom,
  gradientDirectionAtom,
} from "@/app/recoil/cardPersonalisationAtom";

const GradientSelector: FC = () => {
  const [selectedGradient, setSelectedGradient] =
    useRecoilState(selectedGradientAtom);
  const [gradientDirection, setGradientDirection] = useRecoilState(
    gradientDirectionAtom
  );

  const handleGradientChange = (gradientValue: string) => {
    setSelectedGradient(gradientValue);
  };

  const handleGradientDirection = (gradientDirection: string) => {
    setGradientDirection(gradientDirection);
  };

  // console.log(selectedGradient, gradientDirection);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex gap-2 w-full border py-3 px-4 justify-between items-center rounded-md dark:bg-[#1C1C1D]  hover:cursor-pointer dark:hover:bg-[#222222] hover:bg-[#f8f8f8] transition-colors duration-150">
          <Label
            htmlFor="border-radius"
            className="w-[40%] text-start flex gap-2 items-center"
          >
            <span>Background</span> <Badge variant="outline">Gradient</Badge>
          </Label>
          <ArrowRight strokeWidth={0.75} />
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <h2 className="font-semibold gap-1 text-center md:items-start tracking-tighter text-[clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)] leading-none inline-flex mb-4 border-b w-fit pb-2">
              Gradients
            </h2>

            <div className="grid flex-wrap grid-cols-8 gap-[1px] relative overflow-hidden rounded-lg shadow">
              {presetGradients.map((gradient) => (
                <div
                  className={`cursor-pointer group flex items-center justify-center shadow dark:shadow-black/20 shadow-gray-500/20 w-full aspect-square bg-gradient-to-tr ${
                    gradient.value
                  } ${
                    selectedGradient === gradient.value
                      ? "border-2 border-slate-800/50 dark:border-white"
                      : ""
                  }`}
                  onClick={() => handleGradientChange(gradient.value)}
                  key={gradient.name}
                ></div>
              ))}
            </div>

            <h2 className="font-semibold gap-1 text-center md:items-start tracking-tighter text-[clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)] leading-none inline-flex mb-4 border-b w-fit pb-2 mt-6">
              Gradient direction
            </h2>

            <div className="flex flex-wrap gap-1">
              {gradientDirectionOptions.map((g) => (
                <div
                  className={`border border-slate-500/10 rounded-xl p-2 dark:hover:border-slate-200/15 hover:border-slate-900/25 transition-colors duration-150 cursor-pointer ${
                    gradientDirection === g.value
                      ? "border-slate-800/50 dark:border-white"
                      : ""
                  }`}
                  onClick={() => handleGradientDirection(g.value)}
                  key={g.name}
                >
                  {g.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default GradientSelector;
