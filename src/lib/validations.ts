import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string({ required_error: "Name is required." })
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(80, "Name must be less than 80 characters."),
  email: z
    .string({ required_error: "Email is required." })
    .trim()
    .email("Please enter a valid email address.")
    .max(120, "Email must be less than 120 characters."),
  message: z
    .string({ required_error: "Message is required." })
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(3000, "Message must be less than 3000 characters."),
  company: z.string().optional(),
  sourcePage: z.string().optional()
});

export type ContactInput = z.infer<typeof contactSchema>;
