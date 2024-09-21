import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import * as schema from "./schema";

export const client = createClient({
  url: process.env.TURSO_DBURL as string,
  authToken: process.env.TURSO_TOKEN as string,
});

const db = drizzle(client, { schema });

export default db;
