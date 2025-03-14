import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(1, { message: "content must be atleast 1 chars" })
    .max(300, { message: "content must be less than 300 chars" }),
});
