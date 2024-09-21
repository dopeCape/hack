"use client"

import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const data = [
  { id: 1, respiratoryRate: 12, temperature: 36.5 },
  { id: 2, respiratoryRate: 14, temperature: 36.8 },
  { id: 3, respiratoryRate: 16, temperature: 37.2 },
  { id: 4, respiratoryRate: 18, temperature: 37.5 },
  { id: 5, respiratoryRate: 20, temperature: 37.8 },
  { id: 6, respiratoryRate: 22, temperature: 38.1 },
  { id: 7, respiratoryRate: 24, temperature: 38.4 },
  { id: 8, respiratoryRate: 26, temperature: 38.7 },
  { id: 9, respiratoryRate: 28, temperature: 39.0 },
  { id: 10, respiratoryRate: 30, temperature: 39.3 },
]

export default function  RespiratoryVsTemperatureComponent() {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Respiratory Rate vs. Temperature</CardTitle>
        <CardDescription>Examining the relationship between respiratory rate and body temperature</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <ScatterChart
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              type="number" 
              dataKey="respiratoryRate" 
              name="Respiratory Rate" 
              unit=" bpm"
              stroke="hsl(var(--foreground))"
              label={{ value: 'Respiratory Rate (bpm)', position: 'insideBottomRight', offset: -10, fill: 'hsl(var(--foreground))' }}
            />
            <YAxis 
              type="number" 
              dataKey="temperature" 
              name="Temperature" 
              unit="°C"
              stroke="hsl(var(--foreground))"
              label={{ value: 'Temperature (°C)', angle: -90, position: 'insideLeft', fill: 'hsl(var(--foreground))' }}
            />
            <Tooltip 
              cursor={{ strokeDasharray: '3 3' }}
              contentStyle={{
                backgroundColor: 'hsl(var(--background))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '4px',
              }}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
              itemStyle={{ color: 'hsl(var(--foreground))' }}
            />
            <Scatter 
              name="Patient" 
              data={data} 
              fill="hsl(var(--primary))" 
              shape="circle"
            />
          </ScatterChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}