import { z } from "zod"


export const forgetPassschema = z
    .object({
        email: z
            .email("Email is required")
            .nonempty("Email is required"),
    })

export type forgetPassschemaType = z.infer<typeof forgetPassschema>