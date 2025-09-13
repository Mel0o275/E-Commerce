"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import getUserOrders from "@/Api/getUserOrders";

export default function Page() {
  const { data: session } = useSession();
  const [orders, setorders] = useState([])

  console.log(session);


  async function fetchOrders() {
    const data = await getUserOrders(session?.user.id as string);
    console.log(data);
    setorders(data);
    console.log(orders);
  }

  
  useEffect(() => {
    fetchOrders();
  }, []);
    
  return (
    <div className="max-w-4xl mx-auto p-6">

      {orders.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {orders.map((order: any) => (
            <div
              key={order._id}
              className="bg-white shadow-md rounded-lg p-4 border hover:shadow-lg transition"
            >
              <h2 className="text-lg font-semibold mb-2">
                Payment:{" "}
                <span
                  className={`${
                    order.paymentMethodType === "cash"
                      ? "text-green-600"
                      : "text-blue-600"
                  }`}
                >
                  {order.paymentMethodType.toUpperCase()}
                </span>
              </h2>

              <p className="text-gray-700 mb-1">
                Total: <span className="font-bold">{order.totalOrderPrice} EGP</span>
              </p>

              <p className="text-gray-700 mb-1">
                Shipping: <span className="font-medium">{order.shippingPrice} EGP</span>
              </p>

              <p className="text-gray-700 mb-1">
                Tax: <span className="font-medium">{order.taxPrice} EGP</span>
              </p>

              <div className="mt-3 p-3 bg-gray-50 rounded">
                <p className="text-gray-800 font-medium">Shipping Address:</p>
                <p className="text-gray-600 text-sm">
                  {order.shippingAddress.details || "N/A"}, {order.shippingAddress.city}
                </p>
                <p className="text-gray-600 text-sm">{order.shippingAddress.phone}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg font-medium">
                    Loading ...
                </p>
            </div>
        </div>
      )}
    </div>
  );
}
