import { currentUser, auth } from "@clerk/nextjs/server";
import db from "@/db";

export async function GET() {
  const { userId, getToken } = auth();

  if (!userId) {
    return new Response("User is not signed in.", { status: 401 });
  }

  return Response.json(userId, { status: 200 });
}
