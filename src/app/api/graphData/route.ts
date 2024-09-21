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

  // Utility function to group by age
  function getAgeGroup(age: number): string {
    if (age >= 18 && age <= 24) return "18-24";
    if (age >= 25 && age <= 34) return "25-34";
    if (age >= 35 && age <= 44) return "35-44";
    if (age >= 45 && age <= 54) return "45-54";
    if (age >= 55 && age <= 64) return "55-64";
    return "65+";
  }

  // Group health data by age group
  const groupedData: Record<string, any[]> = {};

  healthData.forEach((item) => {
    const ageGroup = getAgeGroup(item.age);
    if (!groupedData[ageGroup]) {
      groupedData[ageGroup] = [];
    }
    groupedData[ageGroup].push(item);
  });

  // Function to calculate averages
  function calculateAverages(group: any[], fields: string[]): any {
    const totalItems = group.length;
    const averages: Record<string, number> = {};

    fields.forEach((field) => {
      averages[field] =
        group.reduce((sum, item) => sum + (item[field] || 0), 0) / totalItems;
    });

    return averages;
  }

  // StressLevel Data Averaging
  const stressLevelData = Object.keys(groupedData).map((ageGroup) => ({
    ageGroup,
    stressLevel: calculateAverages(groupedData[ageGroup], ["stressLevel"])
      .stressLevel,
  }));

  // BloodPressure Data Averaging
  const bloodPressureData = Object.keys(groupedData).map((ageGroup) => {
    const systolic =
      groupedData[ageGroup].reduce((sum, item) => {
        const bp = item.bloodPressure?.split("/") as string[];
        return sum + (parseInt(bp?.[0], 10) || 0);
      }, 0) / groupedData[ageGroup].length;

    const diastolic =
      groupedData[ageGroup].reduce((sum, item) => {
        const bp = item.bloodPressure?.split("/") as string[];
        return sum + (parseInt(bp?.[1], 10) || 0);
      }, 0) / groupedData[ageGroup].length;

    return {
      ageGroup,
      systolic,
      diastolic,
    };
  });

  // Blood Glucose and Cholesterol Averaging
  const bloodLevelsByAge = Object.keys(groupedData).map((ageGroup) => ({
    ageGroup,
    bloodGlucose: calculateAverages(groupedData[ageGroup], ["bloodGlucose"])
      .bloodGlucose,
    cholesterol: calculateAverages(groupedData[ageGroup], ["cholesterol"])
      .cholesterol,
  }));

  // HeartRate Data Grouping (unchanged)
  const heartRateData = healthData.map((item) => ({
    age: item.age,
    heartRate: item.heartRate,
  }));

  // RespiratoryRate and Temperature Grouping (unchanged)
  const respiratoryAndTemperatureData = healthData.map((item, index) => ({
    id: index + 1,
    respiratoryRate: item.respiratoryRate,
    temperature: item.temperature,
  }));

  const big_data = {
    stressLevelData,
    bloodPressureData,
    heartRateData,
    respiratoryAndTemperatureData,
    bloodLevelsByAge,
  };

  return Response.json(big_data, { status: 200 });
}
