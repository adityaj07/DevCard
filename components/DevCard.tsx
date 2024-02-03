import { FC } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import SocialBadge from "./SocialBadge";
import { useRecoilValue } from "recoil";
import { formValueAtom } from "@/app/recoil/formValueAtom";

interface DevCardProps {

}

const DevCard: FC<DevCardProps> = ({}) => {
    const formValues = useRecoilValue(formValueAtom)
    console.log(formValues.picture)
  return (
    <div className={`flex justify-center items-center p-2 gap-2 border-zinc-50/40`}>
      <div className="w-[40%]">
        <img src={formValues.picture} alt={`${formValues.name} image`} />
      </div>

      <div>
        <h1>{formValues.name}</h1>
        <p>{formValues.bio}</p>

        <div className="flex items-center justify-center gap-2">
          {/* <SocialBadge name={}/> */}
        </div>
      </div>
    </div>
  );
};

export default DevCard;
