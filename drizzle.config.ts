import { defineConfig } from "drizzle-kit";

import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./migrations",
  driver: "turso",
  dialect: "sqlite",
  dbCredentials: {
    url: process.env.TURSO_DBURL!,
    authToken: process.env.TURSO_TOKEN!,
  },
});
