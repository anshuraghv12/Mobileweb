"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Clock,
  IndianRupee,
  CheckCircle,
  Send,
  Smartphone,
  Shield,
  Wrench,
  Star,
  MessageCircle,
} from "lucide-react"

interface DeviceService {
  name: string
  price: string
  time: string
  description: string
}

interface DeviceData {
  name: string
  title: string
  description: string
  color: string
  services: DeviceService[]
  commonIssues: string[]
  models: string[]
}

interface DeviceRepairPageProps {
  device: DeviceData
  deviceId: string
}

export function DeviceRepairPage({ device, deviceId }: DeviceRepairPageProps) {
  const [selectedService, setSelectedService] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    model: "",
    issue: "",
    service: "",
    contactTime: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: "",
          phone: "",
          model: "",
          issue: "",
          service: "",
          contactTime: "",
        })
      }, 3000)
    }, 2000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const openWhatsApp = () => {
    const phoneNumber = "7737726976"
    const message = `Hi! I need ${device.name} repair service. Device: ${formData.model || "Not specified"}, Issue: ${formData.issue || "General inquiry"}`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center p-4">
        <Card className="max-w-md mx-auto text-center border-0 shadow-2xl">
          <CardContent className="p-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4 animate-bounce" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Request Submitted!</h3>
            <p className="text-gray-600 mb-4">We'll contact you soon with a quote and timeline.</p>
            <Link href="/">
              <Button className="bg-blue-600 hover:bg-blue-700">Back to Home</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className={`bg-gradient-to-r ${device.color} text-white py-16`}>
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{device.title}</h1>
          <p className="text-xl text-white/90 max-w-2xl">{device.description}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Services Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Services Grid */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {device.services.map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.name}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-green-600 font-semibold">
                          <IndianRupee className="h-4 w-4 mr-1" />
                          {service.price}
                        </div>
                        <div className="flex items-center text-blue-600">
                          <Clock className="h-4 w-4 mr-1" />
                          {service.time}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Common Issues */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Common Issues We Fix</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {device.commonIssues.map((issue, index) => (
                  <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm border">
                    <Wrench className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{issue}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Supported Models */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Supported Models</h2>
              <div className="flex flex-wrap gap-2">
                {device.models.map((model, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1 text-sm">
                    {model}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Mobile Yard Shop?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Shield className="h-12 w-12 text-blue-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-2">6 Months Warranty</h3>
                  <p className="text-gray-600 text-sm">All repairs come with comprehensive warranty</p>
                </div>
                <div className="text-center">
                  <Clock className="h-12 w-12 text-green-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-2">Quick Service</h3>
                  <p className="text-gray-600 text-sm">Most repairs completed within 30 minutes</p>
                </div>
                <div className="text-center">
                  <Star className="h-12 w-12 text-yellow-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-2">Expert Technicians</h3>
                  <p className="text-gray-600 text-sm">Certified professionals with 5+ years experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Query Form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6 border-0 shadow-xl">
              <CardHeader className={`bg-gradient-to-r ${device.color} text-white rounded-t-lg`}>
                <CardTitle className="text-xl flex items-center">
                  <Smartphone className="h-6 w-6 mr-2" />
                  Get Repair Quote
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-semibold">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="mt-1"
                      placeholder="Enter your name"
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
                      className="mt-1"
                      placeholder="Enter phone number"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="model" className="text-gray-700 font-semibold">
                      {device.name} Model
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("model", value)} required>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder={`Select ${device.name} model`} />
                      </SelectTrigger>
                      <SelectContent>
                        {device.models.map((model, index) => (
                          <SelectItem key={index} value={model}>
                            {model}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="service" className="text-gray-700 font-semibold">
                      Service Required
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("service", value)} required>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent>
                        {device.services.map((service, index) => (
                          <SelectItem key={index} value={service.name}>
                            {service.name} - {service.price}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="issue" className="text-gray-700 font-semibold">
                      Issue Description
                    </Label>
                    <Textarea
                      id="issue"
                      value={formData.issue}
                      onChange={(e) => handleInputChange("issue", e.target.value)}
                      className="mt-1 min-h-[80px]"
                      placeholder="Describe the issue..."
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="contactTime" className="text-gray-700 font-semibold">
                      Preferred Contact Time
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("contactTime", value)} required>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                        <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                        <SelectItem value="anytime">Anytime</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="mr-2 h-4 w-4" />
                        Get Quote
                      </div>
                    )}
                  </Button>

                  <Button
                    type="button"
                    onClick={openWhatsApp}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp Query
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
