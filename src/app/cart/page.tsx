'use client'
import React, { useContext, useEffect, useState } from 'react'
import getUserCart from '@/CartAction/getUserCart.action'
import removeProduct from '@/CartAction/removeProduct'
import { toast } from 'sonner'
import updateProduct from '@/CartAction/updataProduct'
import clearCart from '@/CartAction/clear'
import { CartContext } from '@/context/CartContext'
import { CartProduct } from '@/Types/cart.type'
import Link from 'next/link'
import Image from 'next/image'

export default function Cart() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [updatingId, setUpdatingId] = useState(false);
  const [clearing, setClearing] = useState(false)
  const { setcount } = useContext(CartContext);
  const [total, settotal] = useState("");
  const [cartId, setId] = useState("");




  async function getUserCartData() {
    setLoading(true)
    const res = await getUserCart()
    console.log(res);
    
    setId(res.cartId);

    if (res.status === 'success') {
      setProducts(res.data.products)
      settotal(res.data.totalCartPrice);
    }
    setLoading(false)
  }

  async function removeItem(id: string) {
    setUpdatingId(true);
    setClearing(true);
    setDisabled(true);
    const res = await removeProduct(id);
    if (res.status === 'success') {
      setProducts(res.data.products);

      toast.success("Product removed from cart", {
        position: 'top-center',
        duration: 2000,
      });
      setDisabled(false);
      setUpdatingId(false);
      setClearing(false);
      settotal(res.data.totalCartPrice);
      let sum = 0
      res.data.products.forEach((item: CartProduct) => {
        sum += item.count
      });
      setcount(sum);
    }
    else {
      toast.error("Failed to remove product", {
        position: 'top-right',
        duration: 2000,
      });
      setDisabled(false);
      setUpdatingId(false);
      setClearing(false);
    }
  }

  async function updateItem(id: string, count: string, sign: string) {
    setUpdatingId(true);
    setClearing(true);
    setDisabled(true);
    const res = await updateProduct(id, count);

    if (res.status === 'success') {
      setProducts(res.data.products);
      toast.success('Product updated', {
        position: 'top-center',
        duration: 2000,
      });
      setClearing(false);
      setDisabled(false);
      if (sign === '+') {
        setcount(count + 1)
      }
      else if (sign === '-') {
        // @ts-ignore
        setcount(count - 1)
      }
      settotal(res.data.totalCartPrice);
    } else {
      toast.error('Failed to update product', {
        position: 'top-center',
        duration: 2000,
      });
      setClearing(false);
      setDisabled(false);
    }

    setUpdatingId(false);
  }

  async function ClearCaart() {
    setUpdatingId(true);
    setClearing(true);
    setDisabled(true);
    const res = await clearCart()

    if (res.message === 'success') {
      setProducts([])
      toast.success("Cart cleared", {
        position: 'top-center',
        duration: 2000,
      })
      setDisabled(false);
      setUpdatingId(false);
      setClearing(false);
      setcount(0);
    } else {
      toast.error("Failed to clear cart", {
        position: 'top-center',
        duration: 2000,
      })
      setDisabled(false);
      setUpdatingId(false);
      setClearing(false);
    }

    setClearing(false)
  }



  useEffect(() => {
    getUserCartData()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg font-medium">
            Loading your cart...
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="mt-12 max-w-5xl mx-auto animate-fade-in">
      <div className="overflow-hidden rounded-2xl shadow-lg bg-white dark:bg-gray-800 mb-5">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-300">
            <tr>
              <th className="px-6 py-4">Product</th>
              <th className="px-6 py-4 text-center">Qty</th>
              <th className="px-6 py-4 text-center">Unit Price</th>
              <th className="px-6 py-4 text-center">Total</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="py-10 text-center text-gray-600 dark:text-gray-300"
                >
                  🛒 Your cart is empty
                </td>
              </tr>
            ) : (
              products.map((item: CartProduct) => (
                <tr
                  key={item.product._id}
                  className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                >
                  <td className="px-6 py-4 flex items-center space-x-4">
                    <Image
                      width={500}
                      height={500}
                      src={item.product.imageCover}
                      className="w-16 h-16 rounded-lg object-cover border"
                      alt={item.product.title}
                    />
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {item.product.title}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center">
                      <button
                        onClick={() =>
                          updateItem(item.product.id, String(item.count - 1), '-')
                        }
                        disabled={updatingId}
                        className="cursor-pointer inline-flex items-center justify-center h-6 w-6 p-1 
                        text-sm font-medium text-gray-600 bg-gray-100 border rounded-full 
                        hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 
                        disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        -
                      </button>

                      <span className="mx-3 text-gray-900 dark:text-white">
                        {item.count}
                      </span>

                      <button
                        onClick={() =>
                          updateItem(item.product.id, String(item.count + 1), '+')
                        }
                        disabled={updatingId}
                        className="cursor-pointer inline-flex items-center justify-center h-6 w-6 p-1 
                        text-sm font-medium text-gray-600 bg-gray-100 border rounded-full 
                        hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 
                        disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        +
                      </button>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-center font-semibold text-gray-900 dark:text-white">
                    {item.price} EGP
                  </td>

                  <td className="px-6 py-4 text-center font-semibold text-green-600 dark:text-green-400">
                    {item.count * item.price} EGP
                  </td>

                  <td className="px-6 py-4 text-center">
                    <button
                      disabled={disabled}
                      onClick={() => removeItem(item.product.id)}
                      className="disabled:cursor-not-allowed cursor-pointer px-3 py-1 text-sm rounded-lg bg-red-100 text-red-600 hover:bg-red-200 dark:bg-red-900/30 dark:hover:bg-red-800/50"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>


        {products.length > 0 && (
          <div className="flex flex-col sm:flex-row justify-between items-center p-6 border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded-b-2xl">
            <div className="text-lg font-semibold">
              Total:<span className="text-lg font-semibold text-blue-500">{total}</span>
            </div>

            <button
              onClick={ClearCaart}
              disabled={clearing}
              className="mt-4 sm:mt-0 cursor-pointer px-5 py-2 rounded-lg bg-red-600 text-white 
         hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>

      <Link href={`/checkout/${cartId}`}>
  <button
    disabled={disabled} 
    className="text-center mt-4 sm:mt-0 cursor-pointer px-5 py-2 rounded-lg bg-blue-600 text-white 
    hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 my-5"
  >
    {disabled ? "Check out" : "Check out"}
  </button>
</Link>


    </div>
  )
}
