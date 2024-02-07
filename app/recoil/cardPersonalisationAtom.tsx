import { atom } from "recoil";
import { gradientDirectionOptions, presetGradients } from "../data";

export const selectedGradientAtom = atom({
  key: "selectedGradientAtom",
  default: presetGradients[0].value,
});

export const gradientDirectionAtom = atom({
  key: "gradientDirectionAtom",
  default: gradientDirectionOptions[1].value,
});

export const roundnessAtom = atom({
  key:"roundnessAtom",
  default: "rounded"
})
