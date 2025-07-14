import { z } from "zod";

export const languageSchema = z.enum(["fr", "en"]);
export const themeSchema = z.enum(["light", "dark", "system"]);

export const contactFormSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères"),
});

export type Language = z.infer<typeof languageSchema>;
export type Theme = z.infer<typeof themeSchema>;
export type ContactForm = z.infer<typeof contactFormSchema>;

export interface User {
  id: string;
  name: string;
  email: string;
  preferences: {
    language: Language;
    theme: Theme;
  };
}
