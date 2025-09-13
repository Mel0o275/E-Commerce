'use client'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Rschema, RschemaType } from '@/schema/register.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign-Up - Meloshop",
  description: "Create a New Account",
};
export default function SignIn() {
  const [loading, setLoading] = useState(false)
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: ""
    },resolver : zodResolver(Rschema)

  })

  async function handleForm(value : RschemaType) {
      console.log(value);
    setLoading(true);
      try{
        const res = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', value);
        console.log(res.data.message);
        if(res.data.message === 'success') {
          toast.success("Account has been created.",
          {position: "top-center",
            duration: 2000
          })
          router.push('/login')
        }
        
      } catch (err: any) {
        toast.error(
          err.response?.data?.message,
          {
            position: "top-center",
            duration: 2000,
          }
        );
      }
    setLoading(false);
    }

  return <>

    <div className="w-1/3 mx-auto mt-12">


      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleForm)}>

          <h1 className='text-3xl font-bold text-center text-blue-500'>Resigteration Form</h1>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='mt-5'>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Username"
                    {...field}
                    className="focus:ring-1 focus:!ring-blue-300"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='mt-5'>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Email"
                    {...field}
                    className="focus:ring-1 focus:!ring-blue-300"
                    type='email'
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
                <FormLabel className='mt-5'>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Password"
                    {...field}
                    className="focus:ring-1 focus:!ring-blue-300"
                    type='password'
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
                <FormLabel className='mt-5'>RePassword</FormLabel>
                <FormControl>
                  <Input
                    placeholder="RePassword"
                    {...field}
                    className="focus:ring-1 focus:!ring-blue-300"
                    type='password'
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='mt-5'>Phone</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Phone"
                    {...field}
                    className="focus:ring-1 focus:!ring-blue-300"
                    type='tel'
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          
          <Button
              type="submit"
              className="mt-5 w-full cursor-pointer bg-blue-500 hover:bg-blue-600 duration-100"
              disabled={loading}
            >
              {loading ? "Register Now" : "Register Now"}
            </Button>  
        </form>
      </Form>


    </div>

  </>
}
