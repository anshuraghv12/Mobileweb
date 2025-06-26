"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Send } from "lucide-react"

export function RepairForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    deviceType: "",
    issue: "",
    contactTime: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)

      // In a real app, you would send this to raghavnshu1204@gmail.com
      console.log("Form submitted:", formData)

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: "",
          phone: "",
          deviceType: "",
          issue: "",
          contactTime: "",
        })
      }, 3000)
    }, 2000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <section id="repair-form" className="py-20 bg-gradient-to-r from-green-400 to-blue-500">
        <div className="container mx-auto px-4">
          <Card className="max-w-md mx-auto text-center border-0 shadow-2xl">
            <CardContent className="p-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4 animate-bounce" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Success!</h3>
              <p className="text-gray-600">Your repair request has been submitted. We'll contact you soon!</p>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="repair-form" className="py-20 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Book Your Repair</h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you with a quote and timeline
          </p>
        </div>

        <Card className="max-w-2xl mx-auto border-0 shadow-2xl">
          <CardHeader className="bg-white/10 backdrop-blur-sm">
            <CardTitle className="text-2xl text-center text-gray-800">Repair Request Form</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700 font-semibold">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="mt-2 border-2 border-gray-200 focus:border-purple-500 rounded-lg"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-semibold">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="mt-2 border-2 border-gray-200 focus:border-purple-500 rounded-lg"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="device" className="text-gray-700 font-semibold">
                    Device Type
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("deviceType", value)} required>
                    <SelectTrigger className="mt-2 border-2 border-gray-200 focus:border-purple-500 rounded-lg">
                      <SelectValue placeholder="Select your device" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="iphone">iPhone</SelectItem>
                      <SelectItem value="samsung">Samsung</SelectItem>
                      <SelectItem value="oneplus">OnePlus</SelectItem>
                      <SelectItem value="xiaomi">Xiaomi</SelectItem>
                      <SelectItem value="oppo">Oppo</SelectItem>
                      <SelectItem value="vivo">Vivo</SelectItem>
                      <SelectItem value="tablet">Tablet</SelectItem>
                      <SelectItem value="laptop">Laptop</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="contactTime" className="text-gray-700 font-semibold">
                    Preferred Contact Time
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("contactTime", value)} required>
                    <SelectTrigger className="mt-2 border-2 border-gray-200 focus:border-purple-500 rounded-lg">
                      <SelectValue placeholder="Select preferred time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                      <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                      <SelectItem value="anytime">Anytime</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="issue" className="text-gray-700 font-semibold">
                  Issue Description
                </Label>
                <Textarea
                  id="issue"
                  value={formData.issue}
                  onChange={(e) => handleInputChange("issue", e.target.value)}
                  className="mt-2 border-2 border-gray-200 focus:border-purple-500 rounded-lg min-h-[120px]"
                  placeholder="Describe the issue with your device in detail..."
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="mr-2 h-5 w-5" />
                    Submit Repair Request
                  </div>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
