import { currentUser, auth } from "@clerk/nextjs/server";
import db from "@/db";

export async function GET() {
  // const { userId, getToken } = auth();
  //
  // if (!userId) {
  //   return new Response("User is not signed in.", { status: 401 });
  // }

  const users = await db.query.medicalData.findMany();

  return Response.json(users, { status: 200 });
}
