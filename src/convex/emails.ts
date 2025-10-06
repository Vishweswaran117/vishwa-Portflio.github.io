"use node";

import { internalAction } from "./_generated/server";
import { v } from "convex/values";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactNotification = internalAction({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    try {
      const { data, error } = await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["iamvishwa117@gmail.com"],
        subject: `New Contact Form Message from ${args.name}`,
        html: `
          <div style="font-family: monospace; max-width: 600px; margin: 0 auto; padding: 20px; border: 2px solid #d97706; background-color: #fffbeb;">
            <h2 style="color: #92400e; border-bottom: 2px solid #d97706; padding-bottom: 10px;">New Contact Form Submission</h2>
            
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong style="color: #92400e;">Name:</strong> ${args.name}</p>
              <p style="margin: 10px 0;"><strong style="color: #92400e;">Email:</strong> ${args.email}</p>
              <p style="margin: 10px 0;"><strong style="color: #92400e;">Phone:</strong> ${args.phone}</p>
            </div>
            
            <div style="margin: 20px 0; padding: 15px; background-color: white; border: 1px solid #d97706;">
              <p style="margin: 0 0 10px 0;"><strong style="color: #92400e;">Message:</strong></p>
              <p style="margin: 0; color: #1f2937; white-space: pre-wrap;">${args.message}</p>
            </div>
            
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #d97706; font-size: 12px; color: #78716c;">
              <p>This message was sent from your portfolio contact form at vishwacyberport.com</p>
            </div>
          </div>
        `,
      });

      if (error) {
        console.error("Error sending email:", error);
        throw new Error(`Failed to send email: ${error.message}`);
      }

      console.log("Email sent successfully:", data);
      return { success: true, emailId: data?.id };
    } catch (error) {
      console.error("Failed to send contact notification email:", error);
      throw error;
    }
  },
});
