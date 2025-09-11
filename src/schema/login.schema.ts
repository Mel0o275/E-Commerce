import { z } from "zod"


export const Lschema = z
    .object({
        email: z
            .email("Email is required")
            .nonempty("Email is required"),

        password: z
            .string()
            .nonempty("Password is required")
            .min(6, "Password must be at least 6 characters")
            .max(10, "Password must not exceed 10 characters"),

    })

export type LschemaType = z.infer<typeof Lschema>