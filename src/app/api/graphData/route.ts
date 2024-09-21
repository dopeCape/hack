import db from "@/db";

export async function GET() {
  await db.query.medicalData.findMany({ columns: {} });
}
