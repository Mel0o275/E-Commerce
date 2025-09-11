import { z } from "zod"


export const Rschema = z
    .object({
        name: z
            .string()
            .nonempty("Name is required")
            .min(2, "Name must be at least 2 characters")
            .max(10, "Name must not exceed 10 characters"),

        email: z
            .email("Email is required")
            .nonempty("Email is required"),

        password: z
            .string()
            .nonempty("Password is required")
            .min(6, "Password must be at least 6 characters")
            .max(10, "Password must not exceed 10 characters"),

        rePassword: z.string().nonempty("Please confirm your password"),

        phone: z
            .string()
            .regex(
                /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}$/,
                "Phone must be a valid Egyptian number (e.g. 010, 011, 012, 015)"
            ),
    })
    .refine((object) => object.password === object.rePassword, {
        path: ["rePassword"],
        error: "Passwords do not match",
    });

export type RschemaType = z.infer<typeof Rschema>