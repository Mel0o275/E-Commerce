"use client";

import { createContext, useEffect, useState, ReactNode } from "react";
import getUserWish from "@/WishActions/getUserWish.wish";

type WishContextType = {
  wish: number;
  setWish: React.Dispatch<React.SetStateAction<number>>;
  refreshWish: () => Promise<void>;
};

export const WishContext = createContext<WishContextType | null>(null);

interface Props {
  children: ReactNode;
}

export default function WishContextProvider({ children }: Props) {
  const [wish, setWish] = useState<number>(0);

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
