'use client';

import { forgetPassschema, forgetPassschemaType } from '@/schema/forgetPass';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
} from '@/components/ui/form';
import forgetPass from '@/Api/forgetPass';
import { toast } from 'sonner';
import verifyCode from '@/Api/verifyReset';
import reset from '@/Api/reset';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forget-Password - Meloshop",
  description: "Reset Your Password",
};
export default function ForgetPass() {
    const [showPopup, setShowPopup] = useState(false);
    const [showPasswordPopup, setShowPasswordPopup] = useState(false);
    const [resetCode, setResetCode] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [loading, setLoading] = useState(false)


    const form = useForm<forgetPassschemaType>({
        defaultValues: {
            email: '',
        },
        resolver: zodResolver(forgetPassschema),
    });

    async function handleForm(values: forgetPassschemaType) {
        setLoading(true);

        try {
            const data = await forgetPass(values.email);
            if (data.statusMsg === 'success') {
                toast.success('Reset link sent to your email', {
                    position: 'top-center',
                    duration: 2000,
                });
                setUserEmail(values.email);
                setShowPopup(true);
                form.reset();
            } else {
                toast.error(data.message || 'Error sending reset link', {
                    position: 'top-center',
                    duration: 2000,
                });
            }
        } catch (error) {
            console.log('Error calling forgetPass API:', error);
        }
        setLoading(false);
    }

    async function handleVerifyCode() {
        try {
            const res = await verifyCode(resetCode);
            if (res.status === 'Success') {
                toast.success('Code verified successfully', { position: 'top-center' });
                setResetCode('');
                setShowPopup(false);
                setShowPasswordPopup(true);
            } else {
                toast.error(res.message || 'Invalid code', { position: 'top-center' });
            }
        } catch (error) {
            toast.error('Error verifying code', { position: 'top-center' });
        }
    }

    async function handleResetPassword() {

        try {
            const res = await reset(userEmail, newPassword);
            console.log(res);


            if (res.token) {
                toast.success('Password reset successfully', { position: 'top-center' });
                setShowPasswordPopup(false);
                setNewPassword('');
                setConfirmPassword('');
                window.location.href = '/login';
            } else {
                console.log(res);

                toast.error(res.message || 'Failed to reset password', { position: 'top-center' });
            }
        } catch (error) {
            toast.error('Error resetting password', { position: 'top-center' });
        }
    }

    return (
        <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto mt-12 px-4">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleForm)} className="space-y-4">
                    <h1 className="text-3xl font-bold text-center text-blue-500">
                        Forgot Password
                    </h1>

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Enter your email"
                                        {...field}
                                        className="focus:ring-1 focus:!ring-blue-300"
                                        type="email"
                                    />
                                </FormControl>
                                <FormDescription />
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <button
                        onClick={handleResetPassword}
                        className="disabled:cursor-not-allowed mt-5 w-full cursor-pointer bg-blue-500 hover:bg-blue-600 duration-100 text-white py-2 rounded"
                        disabled={loading}
                    >
                        {loading ? "Send Reset Link" : "Send Reset Link"}
                    </button>

                </form>
            </Form>

            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
                        <h2 className="text-xl font-bold mb-4 text-center">
                            Enter Reset Code
                        </h2>
                        <Input
                            placeholder="Enter your reset code"
                            value={resetCode}
                            onChange={(e) => setResetCode(e.target.value)}
                            className="mb-4"
                        />
                        <div className="flex justify-end gap-2">
                            <button
                                onClick={() => {
                                    setShowPopup(false);
                                    setResetCode('');
                                }}
                                className="cursor-pointer px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleVerifyCode}
                                className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                Verify
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showPasswordPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
                        <h2 className="text-xl font-bold mb-4 text-center">
                            Reset Your Password
                        </h2>

                        <Input
                            placeholder="Enter your email"
                            type="email"
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                            className="mb-4"
                        />

                        <Input
                            placeholder="Enter new password"
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="mb-4"
                        />

                        <div className="flex justify-end gap-2">
                            <button
                                onClick={() => {
                                    setShowPasswordPopup(false);
                                    setUserEmail('');
                                    setNewPassword('');
                                }}
                                className="cursor-pointer px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleResetPassword}
                                className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded hover:bg-green-600"
                            >
                                Reset Password
                            </button>
                        </div>
                    </div>
                </div>
            )}


        </div>
    );
}
