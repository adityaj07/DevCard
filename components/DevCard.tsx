"use client";

import { FC } from "react";
import Link from "next/link";
import SocialBadge from "./SocialBadge";
import { useRecoilState, useRecoilValue } from "recoil";
import { formValueAtom } from "@/app/recoil/formValueAtom";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaGlobe, FaXTwitter } from "react-icons/fa6";
import {
  gradientDirectionAtom,
  roundnessAtom,
  selectedGradientAtom,
} from "@/app/recoil/cardPersonalisationAtom";

interface DevCardProps {}

const DevCard: FC<DevCardProps> = ({}) => {
  // Retrieve form values from Recoil state
  const [formValues, setFormValues] = useRecoilState(formValueAtom);
  const gradient = useRecoilValue(selectedGradientAtom);
  const gradientDirection = useRecoilValue(gradientDirectionAtom);
  const roundness = useRecoilValue(roundnessAtom)

  // console.log(gradient)

  // const storedFormValues = localStorage.getItem("formValues");
  // if (storedFormValues !== null) {
  //   const parsedFormValues = JSON.parse(storedFormValues);
  //   setFormValues(parsedFormValues);
  // }

  // console.log(formValues.picture);
  console.log(`${roundness}px`)

  return (
    // <div
    //   className={`flex justify-center p-2 gap-2 border border-zinc-500/40`}
    // >
    //   <div className=" border ">
    //   {/* <Image src={formValues.picture ? "/assets/logo.png" : formValues.picture!} alt={`${formValues.name} image`} width={400} height={400}/> */}

    //     <Image src="/assets/logo.png" width={400} height={400} alt="image" className="rounded-full w-40 h-40"/>
    //   </div>

    //   <div className="border">
    //     <div className="flex flex-col">
    //     <h1 className="text-[clamp(1.56rem, 1vw + 1.31rem, 2.11rem)]">
    //       {formValues.name}
    //     </h1>
    //     <p>{formValues.bio}</p>

    //     <div className="flex items-center justify-center gap-2">
    //       {/* <SocialBadge name={}/> */}
    //     </div>
    //     </div>

    //   </div>
    // </div>

    <div
    className={`bg-gradient-${gradientDirection} ${gradient} rounded-[${roundness}px] p-8 flex flex-col md:flex-row gap-6`}

    >
      <div className="flex items-center mx-auto md:w-[80%]">
        <Image
          src={formValues.picture ? "/assets/logo.png" : formValues.picture!}
          alt={`${formValues.name} image`}
          width={400}
          height={400}
          className="rounded-full w-[150px] md:w-[300px] shadow-[0_10px_20px_rgba(142,_0,_203,_0.7)]"
        />
      </div>
      <div className="flex flex-col items-center md:items-start">
        <h2 className="font-semibold gap-1 text-center md:items-start tracking-tighter text-[clamp(1rem,5vw,1.5rem)] leading-none inline-flex mb-4 border-b w-fit pb-2">
          {formValues.name}
        </h2>
        <p className="font-normal items-center tracking-wide text-base md:text-sm leading-normal">
          {formValues.bio}
        </p>
        <div className="grid grid-cols-2 md:flex justify-start items-center gap-4 mt-6">
          <SocialBadge
            name="Github"
            link={formValues.github!}
            icon={<FaGithub className="w-5 h-5" />}
          />
          <SocialBadge
            name="Twitter"
            link={formValues.twitter!}
            icon={<FaXTwitter className="w-5 h-5" />}
          />
          <SocialBadge
            name="Website"
            link={formValues.website!}
            icon={<FaGlobe className="w-5 h-5" />}
          />
        </div>
        <Link href="/contact"></Link>
      </div>
    </div>
  );
};

export default DevCard;
