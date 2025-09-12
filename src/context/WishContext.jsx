"use client";
import { createContext, useEffect, useState } from "react";
import getUserWish from "@/WishActions/getUserWish.wish";

export const WishContext = createContext(null);

export default function WishContextProvider({ children }) {
  const [wishCount, setWishCount] = useState(0);

  async function refreshWish() {
    try {
      const res = await getUserWish();
      if (res?.status === "success") {
        setWishCount(res.data.length)
      } else {
        setWishCount(0);
      }
    } catch (err) {
      console.error("refreshWish error:", err);
      setWishCount(0);
    }
  }

  useEffect(() => {
    refreshWish();
  }, []);

  return (
    <WishContext.Provider value={{ wishCount, refreshWish }}>
      {children}
    </WishContext.Provider>
  );
}
