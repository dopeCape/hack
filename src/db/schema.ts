import { text, integer, sqliteTable, real } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  name: text("name"),
});

// Users table schema

// Medical Data table schema
export const medicalData = sqliteTable("medical_data", {
  id: integer("id").primaryKey({ autoIncrement: true }),

  // Demographic Data
  age: integer("age").notNull(),
  gender: text("gender").notNull(),
  ethnicity: text("ethnicity"),
  location: text("location"),

  // Vital Signs
  heartRate: integer("heart_rate"),
  bloodPressure: text("blood_pressure"), // e.g., "120/80"
  respiratoryRate: integer("respiratory_rate"),
  temperature: real("temperature"), // SQLite uses REAL for floating-point values

  // Lifestyle Data
  diet: text("diet"),
  exercise: integer("exercise"), // hours per week
  sleepHours: integer("sleep_hours"), // hours per night
  smoking: integer("smoking", { mode: "boolean" }),
  alcohol: integer("alcohol", { mode: "boolean" }),

  // Chronic Conditions and Medical History
  conditions: text("conditions"),
  medications: text("medications"),

  // Symptom Tracking
  painLevel: integer("pain_level").notNull(),
  fatigue: integer("fatigue").notNull(),
  otherSymptoms: text("other_symptoms"),

  // Lab Results
  bloodGlucose: real("blood_glucose"), // using REAL for floating point numbers
  cholesterol: real("cholesterol"),

  // Wearable Data
  steps: integer("steps"),
  sleepQuality: real("sleep_quality"), // hours of deep sleep
  caloriesBurned: real("calories_burned"),

  // Mental Health Data
  mood: text("mood"),
  stressLevel: integer("stress_level").notNull(),

  // Genetic Information
  genomicData: text("genomic_data"),
  familyHistory: text("family_history"),
});
