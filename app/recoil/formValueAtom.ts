import { atom } from "recoil";

interface FormValue {
  name?: string;
  bio?: string;
  github?: string;
  twitter?: string;
  website?: string;
  picture?: string; // Ensure this is always a File
}

export const formValueAtom = atom<FormValue>({
  key: "formValueAtom",
  default: {
    name: "",
    bio: "",
    github: "",
    twitter: "",
    website: "",
    picture: "",
  },
});
