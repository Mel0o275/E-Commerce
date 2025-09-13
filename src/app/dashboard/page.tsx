'use client'

import React from 'react'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from "@/components/ui/button";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { updateInfoschema, updateInfoschemaType } from '@/schema/updateInfo';
import updateInfo from '@/Api/updateInfo';
import { signOut } from 'next-auth/react';
import { toast } from 'sonner';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Update-Info - Meloshop",
  description: "Update Your Information",
};

export default function UpdateInfo() {

    const form = useForm<updateInfoschemaType>({
        defaultValues: {
            name: "",
            email: "",
            phone: "",
        },
        resolver: zodResolver(updateInfoschema),
    });

    async function handleForm(values: updateInfoschemaType) {
        console.log("Form Submitted ✅", values);

        try {
            const data = await updateInfo(values.name, values.email, values.phone);
            console.log(data);

            if (data.message === "success") {
                toast.success("Info updated successfully", {
                    position: "top-center",
                    duration: 2000,
                });
                form.reset();
                signOut({ callbackUrl: "/login" });
            }
            else {
                toast.error(data.message, {
                    position: "top-center",
                    duration: 2000,
                });
            }

        }
        catch (error) {
            console.log(error);
        }

    }
    return (
        <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto mt-12 px-4">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleForm)}>
                    <h1 className="text-3xl font-bold text-center text-blue-500">
                        Update Info
                    </h1>

                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="mt-5">Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="name"
                                        {...field}
                                        className="focus:ring-1 focus:!ring-blue-300"
                                        type="text"
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
                                <FormLabel className="mt-5">Email</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="email"
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
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="mt-5">Phone</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="phone"
                                        {...field}
                                        className="focus:ring-1 focus:!ring-blue-300"
                                        type="tel"
                                    />
                                </FormControl>
                                <FormDescription></FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button className="mt-5 w-full cursor-pointer bg-blue-500 hover:bg-blue-600 duration-100">Update info</Button>
                </form>
            </Form>
        </div>
    );
}
