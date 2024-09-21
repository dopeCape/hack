import db from "@/db";

export async function GET() {
  const healthData = await db.query.medicalData.findMany({});
  return Response.json({ big_data: healthData });
}
