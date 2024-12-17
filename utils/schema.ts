import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const mockInterviewTable = pgTable("mockInterview", {
  id: serial("id").primaryKey(),
  jsonMockResp: text("jsonMockResp").notNull(),
  jobPosition: varchar("jobPosition").notNull(),
  jobDesc: varchar("jobDesc").notNull(),
  jobExperience: varchar("jobExperience").notNull(),
  createdBy: varchar("createdByI").notNull(),
  createdAt: varchar("createdAt"),
  mockld: varchar("mockld").notNull(),
});
