"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, ArrowRight, X, Instagram, Music, Loader2 } from "lucide-react"
import Link from "next/link"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus({
          type: "success",
          message: "Thank you for your message! We'll get back to you soon.",
        })
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        })
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Something went wrong. Please try again.",
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center pt-16">
        {/* Contact Hero */}
        <section className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 md:py-32">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">Contact Us</h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-[800px] mt-4">
                Get in touch with our team to learn more about our vending solutions
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="w-full bg-white py-20">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold text-blue-600 mb-6">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and one of our representatives will get back to you as soon as possible.
                </p>

                {submitStatus.type === "success" && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <p className="text-green-800 font-medium">Success!</p>
                    <p className="text-green-700 mt-1">{submitStatus.message}</p>
                  </div>
                )}

                {submitStatus.type === "error" && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <p className="text-red-800 font-medium">Error</p>
                    <p className="text-red-700 mt-1">{submitStatus.message}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full min-h-[120px]"
                      placeholder="Tell us about your vending needs..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-3"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-blue-600 mb-6">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Phone</h3>
                      <p className="text-gray-600 mt-1">(469) 588-5045</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Email</h3>
                      <p className="text-gray-600 mt-1">info@flashvend.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <MapPin className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Service Area</h3>
                      <p className="text-gray-600 mt-1">Dallas-Fort Worth Metroplex</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-4">Business Hours</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 2:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full bg-gray-900 text-white py-12">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-blue-400">FlashVend</h3>
                <p className="text-gray-400 mt-2">Modern refreshment solutions</p>
              </div>

              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Products
                </Link>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <X className="h-6 w-6" />
                <span className="sr-only">X (Twitter)</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Music className="h-6 w-6" />
                <span className="sr-only">TikTok</span>
              </a>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>© {new Date().getFullYear()} FlashVend. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
