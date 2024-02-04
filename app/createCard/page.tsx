"use client";

import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { formSchema } from "../validators/form";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useSetRecoilState } from "recoil";
import { formValueAtom } from "../recoil/formValueAtom";
import { useRouter } from "next/navigation";



type formInput = z.infer<typeof formSchema>;

const CreateCard: FC = () => {
  const [formStep, setFormStep] = useState(0);
  const { toast } = useToast();
  const router = useRouter();

  const setFormValues = useSetRecoilState(formValueAtom);
  const form = useForm<formInput>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      bio: "",
      github: "",
      twitter: "",
      website: "",
      picture: "",
    },
  });

  function onSubmit(values: formInput) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // alert(JSON.stringify(values, null, 4));
    console.log(values);
    setFormValues(values);
    localStorage.setItem("formValues", JSON.stringify(values));
    router.push("/customiseCard");
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataURL = reader.result as string;
        form.setValue("picture", dataURL);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <motion.div
      className="flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl md:text-4xl mb-4 md:mb-6 font-semibold relative inline-flex gap-1 items-center justify-center text-center tracking-tighter text-[clamp(1.8rem,3vw,2.5rem)] leading-none  pb-4 mt-8">
        Create your DevCard
      </h1>
      <Card className="w-[350px] md:w-[650px] lg:w-[800px]">
        <CardHeader className="text-start">
          <CardTitle>
            {formStep === 2 ? "Your Links" : "Personal Info"}
          </CardTitle>
          <CardDescription>
            {formStep === 2
              ? "Provide your links through which others can reach you."
              : "Provide your personal info to be displayed on your card."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 text-start  overflow-x-hidden relative"
            >
              <motion.div
                className={cn("space-y-4", {
                  // hidden: formStep == 1 || formStep == 2,
                })}
                //formStep == 0 => translateX == 0
                //formStep == 1 => translateX == 100%
                //formStep == 2 => translateX == 200%
                animate={{
                  translateX: `-${formStep * 100}%`,
                }}
                transition={{
                  ease: "easeInOut",
                }}
                initial={{ translateX: `-${formStep * 100}%` }}
              >
                {/* Name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="name">Name</FormLabel>
                      <FormControl>
                        <Input
                          id="name"
                          placeholder="Your name..."
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Bio */}
                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bio</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us a little bit about yourself"
                          className="resize-y"
                          rows={2}
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        This is your concise self-description and interests.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>

              {/* Picture */}
              <motion.div
                className={cn("space-y-4 absolute right-0 left-0 top-0", {
                  // hidden: formStep == 0 || formStep == 2,
                })}
                //formStep == 0 => translateX == -100%
                //formStep == 1 => translateX == 0
                //formStep == 2 => translateX == 100%
                animate={{
                  translateX: `${100 - formStep * 100}%`,
                }}
                transition={{
                  ease: "easeInOut",
                }}
                initial={{ translateX: `${100 - formStep * 100}%` }}
              >
                <FormField
                  control={form.control}
                  name="picture"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your picture</FormLabel>
                      <FormControl>
                        <Input
                          accept=".jpg, .jpeg, .png, .webp"
                          type="file"
                          className="dark:file:text-white cursor-pointer file:cursor-pointer"
                          onChange={(e) =>
                            field.onChange(() => handleFileChange(e))
                          }
                        />
                      </FormControl>
                      <FormDescription>
                        If you do not select a photo one will be generated.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div
                className={cn("space-y-4 absolute right-0 left-0 -top-5", {
                  // hidden: formStep == 0 || formStep == 1,
                })}
                //formStep == 0 => translateX == -200%
                //formStep == 1 => translateX == -100%
                //formStep == 0 => translateX == 0

                animate={{
                  translateX: `${200 - formStep * 100}%`,
                }}
                transition={{
                  ease: "easeInOut",
                }}
                initial={{ translateX: `${200 - formStep * 100}%` }}
              >
                {/* Github Link */}
                <FormField
                  control={form.control}
                  name="github"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="github">Github</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          id="github"
                          placeholder="https://github.com/YourUserName"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Twitter Link */}
                <FormField
                  control={form.control}
                  name="twitter"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="twitter">Twitter</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          id="twitter"
                          placeholder="https://twitter.com/YourUserName"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Website Link */}
                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="website">
                        Your personal website
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          id="website"
                          placeholder="https://www.your-website.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>

              <div className="flex gap-2 pt-28">
                <Button
                  type="submit"
                  className={cn({
                    hidden: formStep === 0 || formStep === 1,
                  })}
                  onClick={() => {
                    //validation
                    form.trigger(["github", "twitter", "website", "picture"]);
                    const githubState = form.getFieldState("github");
                    const twitterState = form.getFieldState("twitter");
                    const websiteState = form.getFieldState("website");
                    const pictureState = form.getFieldState("picture");

                    if (!githubState.isDirty || githubState.invalid) return;

                    if (!twitterState.isDirty || twitterState.invalid) return;

                    if (!websiteState.isDirty || websiteState.invalid) return;

                    if (pictureState.invalid) {
                      toast({
                        variant: "destructive",
                        description: "Max Image size has to be 5MB",
                      });

                      return;
                    }
                  }}
                >
                  Submit
                </Button>

                {formStep === 1 || formStep === 2 ? (
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() =>
                      setFormStep(formStep === 1 ? 0 : formStep === 2 ? 1 : 0)
                    }
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Go back
                  </Button>
                ) : null}

                {formStep == 2 ? null : (
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => {
                      //validation
                      form.trigger(["name", "bio"]);
                      const nameState = form.getFieldState("name");
                      const bioState = form.getFieldState("bio");
                      // const pictureState = form.getFieldState("picture");

                      if (!nameState.isDirty || nameState.invalid) return;

                      if (!bioState.isDirty || bioState.invalid) return;

                      // if (formStep === 1) {
                      //   if (!pictureState.isDirty || pictureState.invalid) {
                      //     toast.error("Max Image size has to be 5MB");
                      //     return;
                      //   }
                      // }

                      setFormStep(formStep === 0 ? 1 : formStep === 1 ? 2 : 0);
                    }}
                  >
                    {" "}
                    Next
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CreateCard;
