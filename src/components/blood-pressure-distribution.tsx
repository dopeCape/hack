"use client"

import { useState } from 'react'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample data - replace this with your actual data
const data = [
  { age: '20-29', systolic: 120, diastolic: 80 },
  { age: '30-39', systolic: 122, diastolic: 81 },
  { age: '40-49', systolic: 124, diastolic: 82 },
  { age: '50-59', systolic: 126, diastolic: 83 },
  { age: '60-69', systolic: 128, diastolic: 84 },
  { age: '70+', systolic: 130, diastolic: 85 },
]

export default function BloodPressureDistributionComponent() {
  const [metric, setMetric] = useState('systolic')

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>Blood Pressure Distribution by Age Group</span>
          <Select value={metric} onValueChange={setMetric}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select metric" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="systolic">Systolic</SelectItem>
              <SelectItem value="diastolic">Diastolic</SelectItem>
            </SelectContent>
          </Select>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="age" label={{ value: 'Age Group', position: 'insideBottomRight', offset: -10 }} />
            <YAxis label={{ value: `${metric.charAt(0).toUpperCase() + metric.slice(1)} Blood Pressure (mmHg)`, angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey={metric} fill="hsl(var(--primary))" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}