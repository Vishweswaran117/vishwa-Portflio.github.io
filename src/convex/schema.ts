import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { Infer, v } from "convex/values";

// default user roles. can add / remove based on the project as needed
export const ROLES = {
  ADMIN: "admin",
  USER: "user",
  MEMBER: "member",
} as const;

export const roleValidator = v.union(
  v.literal(ROLES.ADMIN),
  v.literal(ROLES.USER),
  v.literal(ROLES.MEMBER),
);
export type Role = Infer<typeof roleValidator>;

const schema = defineSchema(
  {
    // default auth tables using convex auth.
    ...authTables, // do not remove or modify

    // the users table is the default users table that is brought in by the authTables
    users: defineTable({
      name: v.optional(v.string()), // name of the user. do not remove
      image: v.optional(v.string()), // image of the user. do not remove
      email: v.optional(v.string()), // email of the user. do not remove
      emailVerificationTime: v.optional(v.number()), // email verification time. do not remove
      isAnonymous: v.optional(v.boolean()), // is the user anonymous. do not remove

      role: v.optional(roleValidator), // role of the user. do not remove
    }).index("email", ["email"]), // index for the email. do not remove or modify

    // Contact form messages table
    messages: defineTable({
      name: v.string(),
      email: v.string(),
      phone: v.string(),
      message: v.string(),
    }).index("by_email", ["email"]),

    // Portfolio content tables
    portfolioContent: defineTable({
      section: v.string(), // "home", "about", etc.
      content: v.string(), // JSON stringified content
    }).index("by_section", ["section"]),

    skills: defineTable({
      category: v.string(),
      items: v.array(v.string()),
      icon: v.string(),
      order: v.number(),
    }).index("by_order", ["order"]),

    projects: defineTable({
      title: v.string(),
      description: v.string(),
      tech: v.array(v.string()),
      image: v.string(),
      github: v.string(),
      live: v.string(),
      order: v.number(),
    }).index("by_order", ["order"]),

    achievements: defineTable({
      title: v.string(),
      description: v.string(),
      year: v.string(),
      icon: v.string(),
      order: v.number(),
    }).index("by_order", ["order"]),

    experience: defineTable({
      title: v.string(),
      company: v.string(),
      location: v.string(),
      description: v.string(),
      order: v.number(),
    }).index("by_order", ["order"]),

    education: defineTable({
      degree: v.string(),
      institution: v.string(),
      years: v.string(),
      description: v.string(),
      score: v.optional(v.string()),
      order: v.number(),
    }).index("by_order", ["order"]),

    certifications: defineTable({
      name: v.string(),
      order: v.number(),
    }).index("by_order", ["order"]),
  },
  {
    schemaValidation: false,
  },
);

export default schema;