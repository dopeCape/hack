import db from "@/db";

export async function GET() {
  const healthData = await db.query.medicalData.findMany({
    columns: {
      age: true,
      bloodGlucose: true,
      cholesterol: true,
      bloodPressure: true,
      heartRate: true,
      respiratoryRate: true,
      temperature: true,
      stressLevel: true,
    },
  });

  // StressLevel Data Grouping
  const stressLevelData = healthData.map((item) => ({
    ageGroup: getAgeGroup(item.age), // Utility function to group age ranges
    stressLevel: item.stressLevel,
  }));

  // BloodPressure Data Grouping
  const bloodPressureData = healthData.map((item) => {
    const bp = item.bloodPressure?.split("/") as string[];
    return {
      age: getAgeGroup(item.age), // Utility function to group age ranges
      systolic: bp[0],
      diastolic: bp[1],
    };
  });

  // HeartRate Data Grouping
  const heartRateData = healthData.map((item) => ({
    age: item.age,
    heartRate: item.heartRate,
  }));

  // RespiratoryRate and Temperature Grouping
  const respiratoryAndTemperatureData = healthData.map((item, index) => ({
    id: index + 1,
    respiratoryRate: item.respiratoryRate,
    temperature: item.temperature,
  }));

  const bloodLevelsByAge = healthData.map((item) => {
    return {
      age: getAgeGroup(item.age),
      bloodGlucose: item.bloodGlucose,
      cholesterol: item.cholesterol,
    };
  });

  const big_data = {
    stressLevelData,
    bloodPressureData,
    heartRateData,
    respiratoryAndTemperatureData,
    bloodLevelsByAge,
  };
  return Response.json(big_data, { status: 200 });

  // Utility function to group age into ranges
}

function getAgeGroup(age: number): string {
  if (age >= 18 && age <= 24) return "18-24";
  if (age >= 25 && age <= 34) return "25-34";
  if (age >= 35 && age <= 44) return "35-44";
  if (age >= 45 && age <= 54) return "45-54";
  if (age >= 55 && age <= 64) return "55-64";
  return "65+";
}
