"use client";

import React, { useState, useRef } from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, LoaderCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  ContactFormSchema,
  zContactFormSchema,
} from "@/types/contact-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "next-safe-action/hooks";
import { sendConsultationEmailAction } from "@/server/actions/send-consultation-email-action";
import { toast } from "sonner";
import { Turnstile } from "@marsidev/react-turnstile";

const GetInTouchCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const turnstileRef = useRef<any>(null);
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      whatsappNumber: "",
      date: "",
      time: "",
      message: "",
      "cf-turnstile-response": "",
    },
  });

  const { execute, isExecuting } = useAction(sendConsultationEmailAction, {
    onSuccess: (data) => {
      toast.dismiss("consultation-form-toast");
      if (data?.data?.error) {
        toast.error(data.data.error);
      }
      if (data?.data?.success) {
        toast.success(data.data.success);
        form.reset();
        setIsModalOpen(false);
        if (turnstileRef.current) {
          turnstileRef.current.reset();
        }
      }
    },
    onError({ error }) {
      toast.dismiss("consultation-form-toast");
      console.error(error);
      toast.error("Failed to submit consultation request");
    },
  });

  async function onSubmit(values: zContactFormSchema) {
    toast.loading("Submitting consultation request", {
      id: "consultation-form-toast",
    });
    execute(values);
  }

  const siteKey = process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY || "";

  return (
    <div className="mt-8 w-full relative bg-[#021a44] text-white py-16 md:py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#021a44] to-[#04306e] animate-gradient-bg opacity-90" />
      <MaxWidthWrapper className="!md:px-12 !lg:px-12 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Title */}
          <h2 className="text-base text-white/80 font-bold tracking-tight mb-5">
            Get in Touch
          </h2>
          {/* Subtitle */}
          <p className="text-2xl text-white max-w-md mb-10">
            Ready to elevate your safety team? Let’s connect.
          </p>
          {/* Buttons */}
          <div className="flex flex-col items-center md:flex-row gap-4 w-full md:w-auto">
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button
                  className={cn(
                    buttonVariants({ variant: "default", size: "lg" }),
                    "bg-[#f59e0b] hover:bg-[#d97706] text-white font-medium transition-all duration-300 w-48 flex items-center justify-center gap-2"
                  )}
                  aria-label="Book a consultation with Gusto Professionals"
                >
                  Book Consultation
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px] bg-white rounded p-6">
                <DialogHeader>
                  <DialogTitle className="text-xl font-semibold text-[#04306e]">
                    Book a Consultation
                  </DialogTitle>
                </DialogHeader>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-4"
                    >
                      {/* Name */}
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                className="focus-visible:!ring-[#04306e] focus-visible:!ring-2 py-6 shadow-none border-gray-300 rounded"
                                placeholder="Your name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {/* Email */}
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  className="focus-visible:!ring-[#04306e] focus-visible:!ring-2 py-6 shadow-none border-gray-300 rounded"
                                  placeholder="Your email"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        {/* WhatsApp Number */}
                        <FormField
                          control={form.control}
                          name="whatsappNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  className="focus-visible:!ring-[#04306e] focus-visible:!ring-2 py-6 shadow-none border-gray-300 rounded"
                                  placeholder="WhatsApp number (optional)"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {/* Date */}
                        <FormField
                          control={form.control}
                          name="date"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  type="date"
                                  className="focus-visible:!ring-[#04306e] focus-visible:!ring-2 py-6 shadow-none border-gray-300 rounded"
                                  min={new Date().toISOString().split("T")[0]} // Disable past dates
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        {/* Time */}
                        <FormField
                          control={form.control}
                          name="time"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  type="time"
                                  className="focus-visible:!ring-[#04306e] focus-visible:!ring-2 py-6 shadow-none border-gray-300 rounded"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Message */}
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Textarea
                                className="focus-visible:!ring-[#04306e] focus-visible:!ring-2 py-6 shadow-none border-gray-300 rounded"
                                placeholder="Your message (optional)"
                                rows={4}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      {/* Turnstile */}
                      <FormField
                        control={form.control}
                        name="cf-turnstile-response"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Turnstile
                                ref={turnstileRef}
                                options={{ theme: "light", size: "flexible" }}
                                siteKey={siteKey}
                                onSuccess={(token) =>
                                  form.setValue("cf-turnstile-response", token)
                                }
                                onError={() => console.log("Turnstile error")}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      {/* Submit Button */}
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isExecuting}
                        className="w-full bg-[#04306e] hover:bg-[#032d5a] text-white"
                      >
                        {isExecuting ? (
                          <>
                            <LoaderCircle className="animate-spin mr-2" />
                            Submitting...
                          </>
                        ) : (
                          "Book Consultation"
                        )}
                      </Button>
                    </form>
                  </Form>
                </motion.div>
              </DialogContent>
            </Dialog>
            <Link
              href="https://wa.me/447448504110?text=Hello%2C%20I%27m%20interested%20in%20HSE%20training%20with%20Gusto%20Professionals%21"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-[#10b981] bg-[#10b981] text-white hover:bg-[#059669] hover:text-white font-medium transition-all duration-300 w-48 flex items-center justify-center gap-2"
              )}
              aria-label="Chat with a Gusto Professionals advisor on WhatsApp"
            >
              Speak to Advisor
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default GetInTouchCTA;
