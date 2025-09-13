"use client";

import { updatePassschema, updatePassschemaType } from "@/schema/updatePass";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from "@/components/ui/button";
import updatePass from "@/Api/updatePass";
import { toast } from "sonner";
import { signOut } from "next-auth/react";
import { useState } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Update-Password - Meloshop",
  description: "Update Your Password",
};
export default function UpdatePassForm() {
  const [loading, setLoading] = useState(false)
    
  const form = useForm<updatePassschemaType>({
    defaultValues: {
      currentPassword: "",
      password: "",
      rePassword: "",
    },
    resolver: zodResolver(updatePassschema),
  });


  async function handleForm(values: updatePassschemaType) {
    console.log("Form Submitted ✅", values);
    setLoading(true);
    try {
      const data = await updatePass(values.currentPassword, values.password, values.rePassword);
      console.log(data);
  
      if (data.message === "success") {
        toast.success("Password updated successfully", {
          position: "top-center",
          duration: 2000,
        });
        form.reset();
  
        signOut({ callbackUrl: "/login" });
      } else {
        toast.error(data.message, {
          position: "top-center",
          duration: 2000,
        });
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);

  }
  

  return (
    <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto mt-12 px-4">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleForm)}>
        <h1 className="text-3xl font-bold text-center text-blue-500">
          Update Password
        </h1>

        <FormField
          control={form.control}
          name="currentPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mt-5">currentPassword</FormLabel>
              <FormControl>
                <Input
                  placeholder="currentPassword"
                  {...field}
                  className="focus:ring-1 focus:!ring-blue-300"
                  type="password"
                />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mt-5">Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Password"
                  {...field}
                  className="focus:ring-1 focus:!ring-blue-300"
                  type="password"
                />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />


        <FormField
          control={form.control}
          name="rePassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mt-5">rePassword</FormLabel>
              <FormControl>
                <Input
                  placeholder="rePassword"
                  {...field}
                  className="focus:ring-1 focus:!ring-blue-300"
                  type="password"
                />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
          <Button
              type="submit"
              className="disabled:cursor-not-allowed mt-5 w-full cursor-pointer bg-blue-500 hover:bg-blue-600 duration-100"
              disabled={loading}
            >
              {loading ? "Update password" : "Update password"}
            </Button>  
      </form>
    </Form>
  </div>
  );
}
