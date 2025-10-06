import { mutation } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";

export const create = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const messageId = await ctx.db.insert("messages", {
      name: args.name,
      email: args.email,
      phone: args.phone,
      message: args.message,
    });

    // Send email notification asynchronously
    await ctx.scheduler.runAfter(0, internal.emails.sendContactNotification, {
      name: args.name,
      email: args.email,
      phone: args.phone,
      message: args.message,
    });

    return messageId;
  },
});