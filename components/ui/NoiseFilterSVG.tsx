import Image from "next/image";
import { FC } from "react";

interface NoiseFilterSVGProps {}

const NoiseFilterSVG: FC<NoiseFilterSVGProps> = ({}) => {
  return (
    <Image
      src="/assets/noise.svg"
      fill
      sizes="100vw"
      style={{
        objectFit: "cover",
        zIndex: -1,
        opacity: 0.6,
        overflow: "hidden",
      }}
      alt="noise"
    />
  );
};

export default NoiseFilterSVG;
