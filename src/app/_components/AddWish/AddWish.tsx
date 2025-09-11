"use client";

import addWish from "@/WishActions/add.wish";
import removeWish from "@/WishActions/remove.wish";
import getUserWish from "@/WishActions/getUserWish.wish";
import React, { useState, useEffect, useContext } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { WishContext } from "@/context/WishContext";

export default function AddWish({ id }: { id: string }) {
    const [loading, setLoading] = useState(false);
    const [isWished, setIsWished] = useState(false); 

    const wishContext = useContext(WishContext);
    if (!wishContext) {
        throw new Error("WishContext is not provided. Wrap your component in <WishProvider>.");
    }
    const { refreshWish } = wishContext;

    useEffect(() => {
        const getStateWish = async () => {
            try {
                const res = await getUserWish();
                if (res?.status === "success") {
                    const wished = res.data.some((item: any) => item.id === id);
                    setIsWished(wished);
                } else {
                    setIsWished(false);
                }
            } catch (err) {
                console.error("Failed to fetch wish state", err);
                setIsWished(false);
            }
        };
        getStateWish();
    }, [id]);

    async function toggleWish(productId: string) {
        if (loading) return;
        setLoading(true);

        try {
            if (isWished) {
                const res = await removeWish(productId);
                if (res?.status === "success") {
                    setIsWished(false);
                    toast.success("Removed from wishlist", { position: "top-center", duration: 2000 });
                    refreshWish();
                } else {
                    toast.error("Failed to remove", { position: "top-center" });
                }
            } else {
                const res = await addWish(productId);
                if (res?.status === "success") {
                    setIsWished(true);
                    toast.success("Added to wishlist ❤️", { position: "top-center", duration: 2000 });
                    refreshWish();
                } else {
                    toast.error("Failed to add", { position: "top-center" });
                }
            }
        } catch {
            toast.error("Something went wrong!", { position: "top-center" });
        } finally {
            setLoading(false);
        }
    }

    return (
        <button
            onClick={() => toggleWish(id)}
            disabled={loading}
            className="cursor-pointer p-2 rounded-full hover:bg-gray-100 transition disabled:cursor-not-allowed"
        >
            {loading ? (
                <Loader2 className="h-4 w-4 animate-spin text-gray-500" />
            ) : (
                <i className={`fa-solid fa-heart text-xl ${isWished ? "text-red-500" : "text-gray-400"}`}></i>
            )}
        </button>
    );
}

