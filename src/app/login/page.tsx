'use client'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Lschema, LschemaType } from '@/schema/login.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - Meloshop",
  description: "Access Your Account",
};
export default function Login() {
  const [loading, setLoading] = useState(false)
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    }, resolver: zodResolver(Lschema)

  })

  async function handleForm(value: LschemaType) {
    console.log("Form values:", value);
    setLoading(true);
    const res = await signIn("credentials", {
      email: value.email,
      password: value.password,
      redirect: false,
      callbackUrl: "/",
    });

    console.log("signIn response:", res);

    if (res?.ok) {
      toast.success("Login Successful", {
        position: "top-center",
        duration: 2000,
      });
      window.location.href = "/";
    } else {
      toast.error(`Login Failed ${res?.error}`, {
        position: "top-center",
        duration: 2000,
      });
    }
    setLoading(false);
  }


  return (
    <>
      <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto mt-12 px-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleForm)}>
            <h1 className="text-3xl font-bold text-center text-blue-500">
              Login Form
            </h1>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mt-5">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      {...field}
                      className="focus:ring-1 focus:!ring-blue-300"
                      type="email"
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


            <Link href="/forgotPass" className="text-blue-500 hover:underline">
              Forgot Password?
            </Link>


            <Button
              type="submit"
              className="mt-5 w-full cursor-pointer bg-blue-500 hover:bg-blue-600 duration-100"
              disabled={loading}
            >
              {loading ? "Login Now" : "Login Now"}
            </Button>          </form>
        </Form>
      </div>
    </>
  );

}
