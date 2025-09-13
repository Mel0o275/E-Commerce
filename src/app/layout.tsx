import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar/Navbar";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css"
import { Toaster } from "@/components/ui/sonner"
import MySessionProvider from "@/MySessionProvider/MySessionProvider";
import CartContextProvider from "@/context/CartContext";
import WishContextProvider from "@/context/WishContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meloshop",
  description: "Browse our wide range of products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

        <MySessionProvider>
          <CartContextProvider>
            <WishContextProvider>
              <Navbar />
              {children}
              <Toaster />
            </WishContextProvider>
          </CartContextProvider>
        </MySessionProvider>

      </body>
    </html>
  );
}
