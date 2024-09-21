import db from "@/db";
import { users } from "@/db/schema";

export async function POST(req: Request) {
  const data = await req.json();
  await db
    .insert(users)
    .values({
      name: data.data.first_name,
      email: data.data.email_addresses[0].email_address,
      id: data.data.id,
    });
  return new Response("", { status: 200 });
}
