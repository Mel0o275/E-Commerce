"use client";

import { createContext, useEffect, useState } from "react";
import getUserWish from "@/WishActions/getUserWish.wish";

export const WishContext = createContext(null);

export default function WishContextProvider({ children }) {
  const [wish, setWish] = useState(0);

  async function refreshWish() {
    try {
      const res = await getUserWish();
      if (res?.status === "success") {
        setWish(res.data.length);
      } else {
        setWish(0);
      }
    } catch (err) {
      console.error("refreshWish error:", err);
      setWish(0);
    }
  }

  useEffect(() => {
    refreshWish();
  }, []);

  return (
    <WishContext.Provider value={{ wish, setWish, refreshWish }}>
      {children}
    </WishContext.Provider>
  );
}
