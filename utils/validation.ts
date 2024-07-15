import { z } from "zod";

export const createArticle = z.object({
  title: z
    .string()
    .min(5, { message: "Must be 5 or more characters long" })
    .max(100, { message: "Must be 100 or fewer characters long" }),
  description: z
    .string()
    .min(10, { message: "Must be 10 or more characters long" })
    .max(200, { message: "Must be 200 or fewer characters long" }),
});

export const updatedArticle = z.object({
  title: z
    .string()
    .min(5, { message: "Must be 5 or more characters long" })
    .max(100, { message: "Must be 100 or fewer characters long" })
    .optional(),
  description: z
    .string()
    .min(10, { message: "Must be 10 or more characters long" })
    .max(200, { message: "Must be 200 or fewer characters long" })
    .optional(),
});
