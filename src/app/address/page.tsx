'use client'
import addAddress from '@/Api/addAddress';
import { AddressType, Addresss } from '@/schema/address';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import getAddresses from '@/Api/getAddress';
import removeAddresses from '@/Api/removeAddress';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Address - Meloshop",
  description: "Manage your addresses on Meloshop.",
};

export default function AddAddress() {
  const [addresses, setAddresses] = useState<AddressType[]>([]);

  const form = useForm<AddressType>({
    defaultValues: {
      name: '',
      details: '',
      phone: '',
      city: ''
    },
    resolver: zodResolver(Addresss)
  });
  

  async function handleForm(value: AddressType) {
    try {
      const res = await addAddress(value.name, value.details, value.phone, value.city);
      console.log(res);
      

      if (res.status === 'success') {
        toast.success('Address Added Successfully');
        form.reset();
      } else {
        toast.error(`Failed to add address: ${res.message}`);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function getUserAddresses() {
    const res = await getAddresses();
    console.log(res);

    if (res.status === 'success') {
      setAddresses(res.data);
      console.log("Fetched Addresses:", res.data);
    } else {
      console.log("Failed to fetch addresses");
    }
    
  }

  async function removeUserAddress(id: string) {
    const res = await removeAddresses(id);
    console.log(res);

    if (res.status === 'success') {
      toast.success('Address Removed Successfully');
      setAddresses(res.data);
    } else {
      toast.error(`Failed to remove address: ${res.message}`);
    }

  }

  useEffect(() => {
    getUserAddresses();
  }, []);

  return (
    <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto mt-12 px-4">

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleForm)} className="space-y-5">
          <h1 className="text-2xl font-bold text-center text-blue-600">Add New Address</h1>

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address Name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Home / Work" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="details"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Details</FormLabel>
                <FormControl>
                  <Input placeholder="Street, Building, Apartment" {...field} />
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
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="010xxxxxxxx" {...field} />
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
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="City" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            Add Address
          </Button>
        </form>
      </Form>


      {addresses.length > 0 && (
  <div className="mt-8 space-y-4">
    <h2 className="text-xl font-semibold text-gray-800">Saved Addresses</h2>
    {addresses.map((addr) => (
      <div
      // @ts-ignore
        key={addr._id}
        className="p-4 bg-white border rounded-lg shadow-sm flex justify-between items-center"
      >
        <div>
          <h3 className="text-lg font-bold text-blue-600">{addr.name}</h3>
          <p className="text-gray-700">{addr.details}</p>
          <p className="text-sm text-gray-500">📞 {addr.phone}</p>
          <p className="text-sm text-gray-500">🏙 {addr.city}</p>
        </div>

        <button
        // @ts-ignore
          onClick={() => removeUserAddress(addr._id)}
          className="cursor-pointer ml-4 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Remove
        </button>
      </div>
    ))}
  </div>
)}


    </div>
  );
}
