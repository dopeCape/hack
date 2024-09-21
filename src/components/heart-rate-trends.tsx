"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Sample data - replace this with your actual data
const data = [
  { age: 20, heartRate: 70 },
  { age: 25, heartRate: 72 },
  { age: 30, heartRate: 75 },
  { age: 35, heartRate: 76 },
  { age: 40, heartRate: 78 },
  { age: 45, heartRate: 80 },
  { age: 50, heartRate: 82 },
  { age: 55, heartRate: 84 },
  { age: 60, heartRate: 85 },
]

export default function HeartRateTrendsComponent() {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Heart Rate Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="age" 
              stroke="hsl(var(--foreground))"
              label={{ value: 'Age', position: 'insideBottomRight', offset: -10, fill: 'hsl(var(--foreground))' }} 
            />
            <YAxis 
              stroke="hsl(var(--foreground))"
              label={{ value: 'Heart Rate (bpm)', angle: -90, position: 'insideLeft', fill: 'hsl(var(--foreground))' }} 
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
            <Line type="monotone" dataKey="heartRate" stroke="hsl(var(--primary))" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}