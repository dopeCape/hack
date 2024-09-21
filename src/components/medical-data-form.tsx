'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

export function MedicalDataForm() {
  const [formData, setFormData] = useState({
    // Demographic Data
    age: '',
    gender: '',
    ethnicity: '',
    location: '',

    // Vital Signs
    heartRate: '',
    bloodPressure: '',
    respiratoryRate: '',
    temperature: '',

    // Lifestyle Data
    diet: '',
    exercise: '',
    sleepHours: '',
    smoking: false,
    alcohol: false,

    // Chronic Conditions and Medical History
    conditions: [],
    medications: '',

    // Symptom Tracking
    painLevel: 0,
    fatigue: 0,
    otherSymptoms: '',

    // Lab Results
    bloodGlucose: '',
    cholesterol: '',

    // Wearable Data
    steps: '',
    sleepQuality: '',
    caloriesBurned: '',

    // Mental Health Data
    mood: '',
    stressLevel: 0,

    // Genetic Information
    genomicData: '',
    familyHistory: ''
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSliderChange = (name, value) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value[0]
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    // Here you would typically send the data to your backend
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Demographic Data</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="age">Age</Label>
            <Input id="age" name="age" type="number" value={formData.age} onChange={handleInputChange} />
          </div>
          <div>
            <Label htmlFor="gender">Gender</Label>
            <Select name="gender" value={formData.gender} onValueChange={(value) => handleInputChange({ target: { name: 'gender', value } })}>
              <SelectTrigger>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="ethnicity">Ethnicity</Label>
            <Input id="ethnicity" name="ethnicity" value={formData.ethnicity} onChange={handleInputChange} />
          </div>
          <div>
            <Label htmlFor="location">Geographic Location</Label>
            <Input id="location" name="location" value={formData.location} onChange={handleInputChange} />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Vital Signs</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="heartRate">Heart Rate (bpm)</Label>
            <Input id="heartRate" name="heartRate" type="number" value={formData.heartRate} onChange={handleInputChange} />
          </div>
          <div>
            <Label htmlFor="bloodPressure">Blood Pressure (mmHg)</Label>
            <Input id="bloodPressure" name="bloodPressure" placeholder="e.g., 120/80" value={formData.bloodPressure} onChange={handleInputChange} />
          </div>
          <div>
            <Label htmlFor="respiratoryRate">Respiratory Rate (breaths/min)</Label>
            <Input id="respiratoryRate" name="respiratoryRate" type="number" value={formData.respiratoryRate} onChange={handleInputChange} />
          </div>
          <div>
            <Label htmlFor="temperature">Temperature (°C)</Label>
            <Input id="temperature" name="temperature" type="number" step="0.1" value={formData.temperature} onChange={handleInputChange} />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Lifestyle Data</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="diet">Diet</Label>
            <Textarea id="diet" name="diet" placeholder="Describe your typical diet" value={formData.diet} onChange={handleInputChange} />
          </div>
          <div>
            <Label htmlFor="exercise">Exercise (hours/week)</Label>
            <Input id="exercise" name="exercise" type="number" value={formData.exercise} onChange={handleInputChange} />
          </div>
          <div>
            <Label htmlFor="sleepHours">Sleep (hours/night)</Label>
            <Input id="sleepHours" name="sleepHours" type="number" value={formData.sleepHours} onChange={handleInputChange} />
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="smoking" name="smoking" checked={formData.smoking} onCheckedChange={(checked) => handleInputChange({ target: { name: 'smoking', type: 'checkbox', checked } })} />
            <Label htmlFor="smoking">Smoking</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="alcohol" name="alcohol" checked={formData.alcohol} onCheckedChange={(checked) => handleInputChange({ target: { name: 'alcohol', type: 'checkbox', checked } })} />
            <Label htmlFor="alcohol">Alcohol Consumption</Label>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Chronic Conditions and Medical History</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="conditions">Pre-existing Conditions</Label>
            <Textarea id="conditions" name="conditions" placeholder="List any chronic conditions" value={formData.conditions} onChange={handleInputChange} />
          </div>
          <div>
            <Label htmlFor="medications">Current Medications</Label>
            <Textarea id="medications" name="medications" placeholder="List current medications" value={formData.medications} onChange={handleInputChange} />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Symptom Tracking</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="painLevel">Pain Level (0-10)</Label>
            <Slider
              id="painLevel"
              name="painLevel"
              min={0}
              max={10}
              step={1}
              value={[formData.painLevel]}
              onValueChange={(value) => handleSliderChange('painLevel', value)}
            />
          </div>
          <div>
            <Label htmlFor="fatigue">Fatigue Level (0-10)</Label>
            <Slider
              id="fatigue"
              name="fatigue"
              min={0}
              max={10}
              step={1}
              value={[formData.fatigue]}
              onValueChange={(value) => handleSliderChange('fatigue', value)}
            />
          </div>
          <div>
            <Label htmlFor="otherSymptoms">Other Symptoms</Label>
            <Textarea id="otherSymptoms" name="otherSymptoms" placeholder="Describe any other symptoms" value={formData.otherSymptoms} onChange={handleInputChange} />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Lab Results</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="bloodGlucose">Blood Glucose (mg/dL)</Label>
            <Input id="bloodGlucose" name="bloodGlucose" type="number" value={formData.bloodGlucose} onChange={handleInputChange} />
          </div>
          <div>
            <Label htmlFor="cholesterol">Cholesterol (mg/dL)</Label>
            <Input id="cholesterol" name="cholesterol" type="number" value={formData.cholesterol} onChange={handleInputChange} />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Wearable Data</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="steps">Steps (daily average)</Label>
            <Input id="steps" name="steps" type="number" value={formData.steps} onChange={handleInputChange} />
          </div>
          <div>
            <Label htmlFor="sleepQuality">Sleep Quality (hours of deep sleep)</Label>
            <Input id="sleepQuality" name="sleepQuality" type="number" step="0.1" value={formData.sleepQuality} onChange={handleInputChange} />
          </div>
          <div>
            <Label htmlFor="caloriesBurned">Calories Burned (daily average)</Label>
            <Input id="caloriesBurned" name="caloriesBurned" type="number" value={formData.caloriesBurned} onChange={handleInputChange} />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Mental Health Data</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="mood">Current Mood</Label>
            <Select name="mood" value={formData.mood} onValueChange={(value) => handleInputChange({ target: { name: 'mood', value } })}>
              <SelectTrigger>
                <SelectValue placeholder="Select mood" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="happy">Happy</SelectItem>
                <SelectItem value="neutral">Neutral</SelectItem>
                <SelectItem value="sad">Sad</SelectItem>
                <SelectItem value="anxious">Anxious</SelectItem>
                <SelectItem value="angry">Angry</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="stressLevel">Stress Level (0-10)</Label>
            <Slider
              id="stressLevel"
              name="stressLevel"
              min={0}
              max={10}
              step={1}
              value={[formData.stressLevel]}
              onValueChange={(value) => handleSliderChange('stressLevel', value)}
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Genetic Information (Optional)</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="genomicData">Genomic Data</Label>
            <Textarea id="genomicData" name="genomicData" placeholder="Enter any relevant genomic data" value={formData.genomicData} onChange={handleInputChange} />
          </div>
          <div>
            <Label htmlFor="familyHistory">Family Medical History</Label>
            <Textarea id="familyHistory" name="familyHistory" placeholder="Describe relevant family medical history" value={formData.familyHistory} onChange={handleInputChange} />
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full">Submit Medical Data</Button>
    </form>
  )
}