"use server";

import { Resend } from "resend";
import { EmailTemplate } from "@/components/templates/email-template";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

// Validation schema for job application
const applicationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address."),
  position: z.string().min(1, "Position is required"),
  coverLetter: z
    .string()
    .min(50, "Cover letter must be at least 50 characters"),
});

export async function sendJobApplication(formData: FormData) {
  try {
    // Validate form data
    const validatedData = applicationSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      position: formData.get("position"),
      coverLetter: formData.get("coverLetter"),
    });

    // Send email
    const { data, error } = await resend.emails.send({
      from: "Turbo MIS Careers <onboarding@resend.dev>",
      to: ["dmozart921@gmail.com"],
      subject: `New Job Application: ${validatedData.position}`,
      react: EmailTemplate(validatedData),
    });

    if (error) {
      console.error("Email error:", error);
      return { error: "Failed to send application" };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Application error:", error);
    if (error instanceof z.ZodError) {
      return { error: error.errors[0].message };
    }
    return { error: "Failed to process application" };
  }
}
