import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "username must be atleast 2 chars")
  .max(20, "username must be less than 20 chars")
  .regex(/^[a-zA-Z0-9_]+$/, "username must not contain special chars");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid e-mail" }),
  password: z.string().min(6, { message: "password must be atleast 6 chars" }),
});
