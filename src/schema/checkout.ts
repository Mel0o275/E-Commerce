import { z } from "zod"


export const Checkout = z
    .object({
        details: z
            .string()
            .nonempty("Name is required")
            .min(2, "Name must be at least 2 characters")
            .max(10, "Name must not exceed 10 characters"),

        phone: z
            .string()
            .regex(
                /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}$/,
                "Phone must be a valid Egyptian number (e.g. 010, 011, 012, 015)"
            ),

            city: z
            .string()
            .nonempty("Name is required")
            .min(2, "Name must be at least 2 characters")
            .max(10, "Name must not exceed 10 characters"),
    })

export type CheckoutType = z.infer<typeof Checkout>