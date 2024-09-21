import db from "@/db";
import { medicalData } from "@/db/schema";
export default async function POST(req: Request) {
  try {
    type genericType = typeof medicalData.$inferInsert;
    const genericData = (await req.json()) as genericType;
    await db.insert(medicalData).values(genericData);
    return Response.json({ message: "Data saved sucesfully" }, { status: 200 });
  } catch (error) {
    console.error("error while saving data to db", error);
    return Response.json("Internal server error", { status: 500 });
  }
}
