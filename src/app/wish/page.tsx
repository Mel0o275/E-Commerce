"use client";

import getUserWish from "@/WishActions/getUserWish.wish";
import removeWish from "@/WishActions/remove.wish";
import React, { useEffect, useState, useContext } from "react";
import { WishContext } from "@/context/WishContext";
import { toast } from "sonner";

export default function Wish() {
    const [wishlist, setWishlist] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [removingItem, setRemovingItem] = useState<string | null>(null);
    const { refreshWish } = useContext(WishContext);

    async function getUserWishData() {
        try {
            setLoading(true);
            const res = await getUserWish();
            console.log(res);
            
            if (res.status === "success") {
                setWishlist(res.data);
            }
        } catch (error) {
            console.error("Failed to load wishlist", error);
        } finally {
            setLoading(false);
        }
    }

    async function handleRemove(productId: string) {
        try {
            setRemovingItem(productId);
            const res = await removeWish(productId);
            if (res.status === "success") {
                setWishlist(prev => prev.filter(item => item._id !== productId));
                refreshWish();
                toast.success("Removed from wishlist", { position: "top-center", duration: 2000 });
            } else {
                console.error("removeWish failed:", res);
                toast.error("Failed to remove item", { position: "top-center", duration: 2000 });
            }
        } catch (err) {
            console.error(err);
        } finally {
            setRemovingItem(null);
        }
    }

    useEffect(() => {
        getUserWishData();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg font-medium">
                        Loading your wishlist...
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">My Wishlist ❤️</h1>

            {wishlist.length === 0 ? (
                <p className="text-gray-500">No items in your wishlist yet.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {wishlist.map((item) => (
                        <div
                            key={item._id}
                            className="p-4 border rounded-lg shadow hover:shadow-lg transition"
                        >
                            <img
                                src={item.imageCover}
                                alt={item.title}
                                className="w-full h-40 object-cover rounded-md mb-3"
                            />
                            <h2 className="font-semibold">{item.title}</h2>
                            <p className="text-gray-500">{item.price} EGP</p>
                            <button
                                onClick={() => handleRemove(item._id)}
                                disabled={removingItem === item._id}
                                className="cursor-pointer mt-2 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 disabled:opacity-50"
                            >
                                {removingItem === item._id ? "Remove" : "Remove"}
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

