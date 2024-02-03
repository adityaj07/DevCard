import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  bio: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 40 characters.",
    }),
  picture: z
  .string()
  .refine((data) => data.length <= MAX_FILE_SIZE, `Max image size is 5MB.`),
    
  github: z.string().url({
    message: "Invalid GitHub link.",
  }),
  twitter: z.string().url({
    message: "Invalid Twitter link.",
  }),
  website: z.string().url({
    message: "Invalid website link.",
  }),
});
