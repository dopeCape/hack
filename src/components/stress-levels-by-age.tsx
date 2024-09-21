"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const data = [
  { ageGroup: '18-24', stressLevel: 7.2 },
  { ageGroup: '25-34', stressLevel: 6.8 },
  { ageGroup: '35-44', stressLevel: 6.5 },
  { ageGroup: '45-54', stressLevel: 5.9 },
  { ageGroup: '55-64', stressLevel: 5.2 },
  { ageGroup: '65+', stressLevel: 4.5 },
]

export default function StressLevelsByAgeComponent() {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Stress Levels Across Different Age Groups</CardTitle>
        <CardDescription>Analyzing how stress levels vary with age to understand stress-related health issues</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
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
              dataKey="ageGroup" 
              stroke="hsl(var(--foreground))"
              label={{ value: 'Age Group', position: 'insideBottom', offset: -10, fill: 'hsl(var(--foreground))' }}
            />
            <YAxis
              stroke="hsl(var(--foreground))"
              label={{ value: 'Stress Level', angle: -90, position: 'insideLeft', fill: 'hsl(var(--foreground))' }}
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
            <Bar 
              dataKey="stressLevel" 
              fill="hsl(var(--primary))" 
              name="Stress Level"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}