'use client'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useParams, useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { Checkout, CheckoutType } from '@/schema/checkout'
import checkoutOnline from '@/checkoutActions/checkout'
import CheckoutCash from '@/checkoutActions/cash'

export default function CheckOut() {
    const [loading, setLoading] = useState(false);


    const router = useRouter();

    const { id }: { id: string } = useParams();
    console.log(id);


    const form = useForm({
        defaultValues: {
            details: "",
            phone: "",
            city: ""
        }, resolver: zodResolver(Checkout)

    })

    async function handleOnline(value: CheckoutType) {
        setLoading(true);
        try {
            const res = await checkoutOnline(id, "", value);
            console.log(res);

            if (res.status === 'success') {
                toast.success("Redirecting to payment...", { position: 'top-center', duration: 2000 });
                window.location.href = res.session.url;
            } else {
                toast.error(res.message || "Payment failed", { position: 'top-center' });
            }
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong during checkout");
        } finally {
            setLoading(true);
        }
    }

    async function handleCash(value: CheckoutType) {
        setLoading(true);
        try {
            const res = await CheckoutCash(id, value);
            console.log(res);

            if (res.status === 'success') {
                toast.success("Order placed successfully!", { position: 'top-center', duration: 2000 });
                const userId = res.data.user;
                console.log(userId);
                
                router.push(`/allorders/${userId}`);
            } else {
                toast.error(res.message || "Something went wrong", { position: 'top-center' });
            }
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong during cash checkout");
        } finally {
            setLoading(true);
        }
    }

    return (
        <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto mt-12 px-4">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleOnline)} className="space-y-4">
                    <h1 className="text-3xl font-bold text-center text-blue-500">
                        Checkout
                    </h1>

                    <FormField
                        control={form.control}
                        name="details"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="mt-5">Order Details</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Enter order details"
                                        {...field}
                                        className="focus:ring-1 focus:!ring-blue-300"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="mt-5">Phone Number</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Enter phone number"
                                        {...field}
                                        className="focus:ring-1 focus:!ring-blue-300"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="mt-5">City</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Enter your city"
                                        {...field}
                                        className="focus:ring-1 focus:!ring-blue-300"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="flex flex-col sm:flex-row gap-4 mt-5">
                        <Button
                            type="button"
                            onClick={form.handleSubmit(handleOnline)}
                            disabled={loading}
                            className="cursor-pointer disabled:cursor-not-allowed flex-1 bg-blue-500 hover:bg-blue-600"
                        >
                            {loading ? "Pay Online" : "Pay Online"}
                        </Button>

                        <Button
                            type="button"
                            onClick={form.handleSubmit(handleCash)}
                            disabled={loading}
                            className="cursor-pointer disabled:cursor-not-allowed flex-1 bg-green-500 hover:bg-green-600"
                        >
                            {loading ? "Pay Cash" : "Pay Cash"}
                        </Button>

                    </div>

                </form>
            </Form>
        </div>
    )
}
