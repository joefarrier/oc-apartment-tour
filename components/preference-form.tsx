'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function PreferenceForm() {
  const [preferences, setPreferences] = useState({
    budget: '',
    bedrooms: '',
    location: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the preferences to your backend or context
    console.log('Preferences submitted:', preferences)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="budget">Budget</Label>
        <Input
          id="budget"
          type="number"
          placeholder="Enter your budget"
          value={preferences.budget}
          onChange={(e) => setPreferences({ ...preferences, budget: e.target.value })}
        />
      </div>
      <div>
        <Label htmlFor="bedrooms">Bedrooms</Label>
        <Input
          id="bedrooms"
          type="number"
          placeholder="Number of bedrooms"
          value={preferences.bedrooms}
          onChange={(e) => setPreferences({ ...preferences, bedrooms: e.target.value })}
        />
      </div>
      <div>
        <Label htmlFor="location">Preferred Location</Label>
        <Input
          id="location"
          type="text"
          placeholder="Enter preferred location"
          value={preferences.location}
          onChange={(e) => setPreferences({ ...preferences, location: e.target.value })}
        />
      </div>
      <Button type="submit" className="w-full bg-[#333333] hover:bg-[#555555] text-white">
        Set Preferences
      </Button>
    </form>
  )
}
