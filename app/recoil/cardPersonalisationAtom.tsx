import { atom } from "recoil";
import { presetGradients } from "../data";



export const selectedGradientAtom = atom({
  key: "selectedGradientAtom",
  default: presetGradients[0].value,
});

export const gradientDirectionAtom = atom({
  key: "gradientDirectionAtom",
  default: 'to-tr',
});

export const roundnessAtom = atom({
  key:"roundnessAtom",
  default: 16
})
