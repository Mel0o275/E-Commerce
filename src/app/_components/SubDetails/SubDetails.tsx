"use client";
import category from "@/Api/category.api";
import React, { useEffect, useState } from "react";

export default function SubDetails({ data }: { data: any }) {
  const [cate, setcate] = useState(false);

  useEffect(() => {
    if (data?.category) {
      async function fetchCategory() {
        const cat = await category(data.category);
        setcate(cat);
      }
      fetchCategory();
    }
  }, [data]);

  if (!data) {
    return <p className="text-center py-10 text-gray-500">No Subcategory data available</p>;
  }

  return (
    <div className="container w-full md:w-[80%] mx-auto p-6 flex flex-col items-center mt-12">

      {/* Subcategory Banner */}
      <div className="relative w-full max-w-[600px] h-[400px] md:h-[200px] rounded-2xl shadow-xl
                      bg-gradient-to-br from-blue-300 to-blue-500 flex items-center justify-center
                      animate-gradient-x text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg text-center px-6">
          {data.name}
        </h1>
      </div>

    </div>
  )
}
