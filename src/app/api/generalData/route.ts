import db from "@/db";
import { medicalData } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
export async function POST(req: Request) {
export  async function POST(req: Request) {
  try {
    const { userId, getToken } = auth();

    if (!userId) {
      return new Response("User is not signed in.", { status: 401 });
    }
    type genericType = typeof medicalData.$inferInsert;
    const genericData = (await req.json()) as genericType;
    await db.insert(medicalData).values({ ...genericData, userId });
    return Response.json({ message: "Data saved sucesfully" }, { status: 200 });
  } catch (error) {
    console.error("error while saving data to db", error);
    return Response.json("Internal server error", { status: 500 });
  }
}
