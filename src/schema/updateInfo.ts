import { email, z } from "zod";

export const updateInfoschema = z
    .object({
        name: z.string().min(2, "Name must be at least 2 characters long"),
        email: email("Invalid email address"),
        phone: z
            .string()
            .regex(
                /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}$/,
                "Phone must be a valid Egyptian number (e.g. 010, 011, 012, 015)"
            ),
    });

export type updateInfoschemaType = z.infer<typeof updateInfoschema>;
