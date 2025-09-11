'use client'
import addProduct from '@/CartAction/addProduct.action'
import { Button } from '@/components/ui/button'
import React, { useContext, useState } from 'react'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'
import { CartContext } from '@/context/CartContext'

export default function AddButton({ id }: { id: string }) {
    const [loading, setLoading] = useState(false)
    const { count, setcount } = useContext(CartContext);

    async function checkProduct(id: string) {
        try {
            setLoading(true)
            const res = await addProduct(id)

            if (res.status === 'success') {
                toast.success('Product added to cart successfully', {
                    position: 'top-center',
                    duration: 2000,
                })
                setcount(count + 1);
            } else {
                toast.error("Can't add product to cart login first", {
                    position: 'top-center',
                    duration: 2000,
                })
            }
        } catch (error) {
            toast.error('Something went wrong', {
                position: 'top-center',
                duration: 2000,
            })
        } finally {
            setLoading(false)
        }
    }

    return (
        <Button
            onClick={() => checkProduct(id)}
            disabled={loading}
            className="w-full bg-blue-500 hover:bg-blue-600 duration-100 cursor-pointer disabled:!cursor-not-allowed disabled:opacity-70"
        >
            {loading ? (
                <span className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Adding...
                </span>
            ) : (
                'Add to Cart'
            )}
        </Button>

    )
}
