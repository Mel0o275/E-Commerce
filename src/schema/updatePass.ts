import { z } from "zod";

export const updatePassschema = z
  .object({
    currentPassword: z
      .string()
      .min(6, "Current password must be at least 6 characters long"),

    password: z
      .string()
      .min(6, "New password must be at least 6 characters long"),

    rePassword: z
      .string()
      .min(6, "Confirm password must be at least 6 characters long"),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords do not match",
    path: ["rePassword"],
  });

export type updatePassschemaType = z.infer<typeof updatePassschema>;
