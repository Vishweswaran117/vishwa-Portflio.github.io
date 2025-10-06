import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { getCurrentUser } from "./users";

// Helper to check if user is admin
const isAdmin = async (ctx: any) => {
  const user = await getCurrentUser(ctx);
  if (!user) return false;
  // Check if user email matches admin email
  return user.email === "iamvishwa117@gmail.com";
};

// Portfolio Content
export const getPortfolioContent = query({
  args: { section: v.string() },
  handler: async (ctx, args) => {
    const content = await ctx.db
      .query("portfolioContent")
      .withIndex("by_section", (q) => q.eq("section", args.section))
      .first();
    return content;
  },
});

export const updatePortfolioContent = mutation({
  args: {
    section: v.string(),
    content: v.string(),
  },
  handler: async (ctx, args) => {
    if (!(await isAdmin(ctx))) {
      throw new Error("Unauthorized");
    }

    const existing = await ctx.db
      .query("portfolioContent")
      .withIndex("by_section", (q) => q.eq("section", args.section))
      .first();

    if (existing) {
      await ctx.db.patch(existing._id, { content: args.content });
      return existing._id;
    } else {
      return await ctx.db.insert("portfolioContent", {
        section: args.section,
        content: args.content,
      });
    }
  },
});

// Skills
export const getAllSkills = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("skills").withIndex("by_order").collect();
  },
});

export const createSkill = mutation({
  args: {
    category: v.string(),
    items: v.array(v.string()),
    icon: v.string(),
    order: v.number(),
  },
  handler: async (ctx, args) => {
    if (!(await isAdmin(ctx))) {
      throw new Error("Unauthorized");
    }
    return await ctx.db.insert("skills", args);
  },
});

export const updateSkill = mutation({
  args: {
    id: v.id("skills"),
    category: v.string(),
    items: v.array(v.string()),
    icon: v.string(),
    order: v.number(),
  },
  handler: async (ctx, args) => {
    if (!(await isAdmin(ctx))) {
      throw new Error("Unauthorized");
    }
    const { id, ...data } = args;
    await ctx.db.patch(id, data);
    return id;
  },
});

export const deleteSkill = mutation({
  args: { id: v.id("skills") },
  handler: async (ctx, args) => {
    if (!(await isAdmin(ctx))) {
      throw new Error("Unauthorized");
    }
    await ctx.db.delete(args.id);
  },
});

// Projects
export const getAllProjects = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("projects").withIndex("by_order").collect();
  },
});

export const createProject = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    tech: v.array(v.string()),
    image: v.string(),
    github: v.string(),
    live: v.string(),
    order: v.number(),
  },
  handler: async (ctx, args) => {
    if (!(await isAdmin(ctx))) {
      throw new Error("Unauthorized");
    }
    return await ctx.db.insert("projects", args);
  },
});

export const updateProject = mutation({
  args: {
    id: v.id("projects"),
    title: v.string(),
    description: v.string(),
    tech: v.array(v.string()),
    image: v.string(),
    github: v.string(),
    live: v.string(),
    order: v.number(),
  },
  handler: async (ctx, args) => {
    if (!(await isAdmin(ctx))) {
      throw new Error("Unauthorized");
    }
    const { id, ...data } = args;
    await ctx.db.patch(id, data);
    return id;
  },
});

export const deleteProject = mutation({
  args: { id: v.id("projects") },
  handler: async (ctx, args) => {
    if (!(await isAdmin(ctx))) {
      throw new Error("Unauthorized");
    }
    await ctx.db.delete(args.id);
  },
});

// Achievements
export const getAllAchievements = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("achievements").withIndex("by_order").collect();
  },
});

export const createAchievement = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    year: v.string(),
    icon: v.string(),
    order: v.number(),
  },
  handler: async (ctx, args) => {
    if (!(await isAdmin(ctx))) {
      throw new Error("Unauthorized");
    }
    return await ctx.db.insert("achievements", args);
  },
});

export const updateAchievement = mutation({
  args: {
    id: v.id("achievements"),
    title: v.string(),
    description: v.string(),
    year: v.string(),
    icon: v.string(),
    order: v.number(),
  },
  handler: async (ctx, args) => {
    if (!(await isAdmin(ctx))) {
      throw new Error("Unauthorized");
    }
    const { id, ...data } = args;
    await ctx.db.patch(id, data);
    return id;
  },
});

export const deleteAchievement = mutation({
  args: { id: v.id("achievements") },
  handler: async (ctx, args) => {
    if (!(await isAdmin(ctx))) {
      throw new Error("Unauthorized");
    }
    await ctx.db.delete(args.id);
  },
});

// Messages (read-only for admin)
export const getAllMessages = query({
  args: {},
  handler: async (ctx) => {
    if (!(await isAdmin(ctx))) {
      throw new Error("Unauthorized");
    }
    return await ctx.db.query("messages").order("desc").collect();
  },
});

export const deleteMessage = mutation({
  args: { id: v.id("messages") },
  handler: async (ctx, args) => {
    if (!(await isAdmin(ctx))) {
      throw new Error("Unauthorized");
    }
    await ctx.db.delete(args.id);
  },
});
