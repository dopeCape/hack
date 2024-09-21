"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const data = [
  { age: 20, bloodGlucose: 85, cholesterol: 170 },
  { age: 30, bloodGlucose: 90, cholesterol: 180 },
  { age: 40, bloodGlucose: 95, cholesterol: 190 },
  { age: 50, bloodGlucose: 100, cholesterol: 200 },
  { age: 60, bloodGlucose: 105, cholesterol: 210 },
  { age: 70, bloodGlucose: 110, cholesterol: 220 },
]

export default function BloodLevelsByAgeComponent() {
  return (
    <Card className="w-full  max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Blood Glucose and Cholesterol Levels by Age</CardTitle>
        <CardDescription>Visualizing trends in blood glucose and cholesterol across different age groups</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="age" 
              stroke="hsl(var(--foreground))"
              label={{ value: 'Age', position: 'insideBottomRight', offset: -10, fill: 'hsl(var(--foreground))' }}
            />
            <YAxis 
              yAxisId="left"
              stroke="hsl(var(--foreground))"
              label={{ value: 'Blood Glucose (mg/dL)', angle: -90, position: 'insideLeft', fill: 'hsl(var(--foreground))' }}
            />
            <YAxis 
              yAxisId="right" 
              orientation="right" 
              stroke="hsl(var(--foreground))"
              label={{ value: 'Cholesterol (mg/dL)', angle: 90, position: 'insideRight', fill: 'hsl(var(--foreground))' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--background))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '4px',
              }}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
              itemStyle={{ color: 'hsl(var(--foreground))' }}
            />
            <Legend wrapperStyle={{ color: 'hsl(var(--foreground))' }} />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="bloodGlucose" 
              stroke="hsl(var(--primary))" 
              activeDot={{ r: 8 }}
              name="Blood Glucose"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="cholesterol" 
              stroke="hsl(var(--secondary))" 
              activeDot={{ r: 8 }}
              name="Cholesterol"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}