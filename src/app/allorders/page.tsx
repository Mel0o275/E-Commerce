"use client";

import React from "react";
import { Truck } from "lucide-react";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="relative w-full max-w-xl h-32 overflow-hidden">
        {/* العربي */}
        <div className="absolute inset-0 flex items-center">
          <div className="animate-truck flex items-center">
            <span className="w-4 h-4 bg-gray-400 rounded-full opacity-70 mr-2 animate-smoke"></span>
            <Truck size={80} className="text-blue-600 drop-shadow-lg" />
          </div>
        </div>
      </div>

      <h1 className="text-3xl font-extrabold text-blue-700 mt-10 animate-pulse drop-shadow-sm">
        Order Is On Shipping...
      </h1>

      <div className="w-64 h-3 bg-gray-200 rounded-full mt-6 overflow-hidden">
        <div className="h-full bg-blue-500 animate-progress"></div>
      </div>

      <style jsx>{`
        /* Truck Animation */
        .animate-truck {
          display: inline-flex;
          animation: moveTruck 6s ease-in-out infinite ;
        }
        @keyframes moveTruck {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-smoke {
          animation: puff 1.5s ease-in-out infinite;
        }
        @keyframes puff {
          0% {
            opacity: 0.8;
            transform: translateY(0) scale(0.5);
          }
          50% {
            opacity: 0.4;
            transform: translateY(-10px) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-20px) scale(1.5);
          }
        }

        .animate-progress {
          animation: load 2s linear infinite;
        }
        @keyframes load {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
