import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Phone, Mail, X, Instagram, Music } from "lucide-react"
import Link from "next/link"

export default function LocationsPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center pt-16">
        {/* Locations Hero */}
        <section className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 md:py-32">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">Our Service Area</h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-[800px] mt-4">
                Proudly serving the Dallas-Fort Worth metroplex with modern vending solutions
              </p>
            </div>
          </div>
        </section>

        {/* Service Area Map */}
        <section className="w-full bg-white py-20">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-blue-600">
                Dallas-Fort Worth Coverage
              </h2>
              <p className="text-xl text-gray-600 max-w-[600px] mt-4">
                We serve businesses, schools, and organizations throughout the DFW area
              </p>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 max-w-6xl mx-auto">
              <div className="relative w-full h-[500px] md:h-[600px]">
                <Image
                  src="/images/dfw-map.png"
                  alt="Dallas-Fort Worth Service Area Map"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 bg-gray-50">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Service Coverage Area</h3>
                <p className="text-gray-600">
                  Our vending machines are available throughout the Dallas-Fort Worth metroplex, including Dallas, Fort
                  Worth, Arlington, Plano, Irving, Frisco, Denton, and surrounding communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Details */}
        <section className="w-full bg-gray-50 py-20">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">Major Cities</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Dallas</li>
                  <li>• Fort Worth</li>
                  <li>• Arlington</li>
                  <li>• Plano</li>
                  <li>• Irving</li>
                  <li>• Frisco</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-600 mb-3">Surrounding Areas</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Denton</li>
                  <li>• McKinney</li>
                  <li>• Grapevine</li>
                  <li>• Mansfield</li>
                  <li>• Burleson</li>
                  <li>• Weatherford</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-purple-600 mb-3">Extended Coverage</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Terrell</li>
                  <li>• Waxahachie</li>
                  <li>• Granbury</li>
                  <li>• Mineral Wells</li>
                  <li>• And more!</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact for New Locations */}
        <section className="w-full bg-white py-20">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
                <div>
                  <h2 className="text-3xl font-bold text-blue-600 mb-4">Don't See Your Location?</h2>
                  <p className="text-gray-600 mb-6">
                    We're always expanding our service area! If you're interested in having FlashVend machines at your
                    location, even if it's outside our current coverage area, we'd love to hear from you.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-600">Call us at (469) 588-5045</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-600">Email us at info@flashvend.com</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-600">We'll evaluate expansion opportunities</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Button className="h-12 px-8 rounded-full bg-blue-600 text-white hover:bg-blue-700">
                    <Link href="/contact">Request Service</Link>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-gradient-to-r from-blue-700 to-blue-600 text-white py-16">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Ready to Get Started?</h2>
              <p className="text-xl text-white/90 max-w-[600px] mt-4">
                Contact us today to bring FlashVend to your location
              </p>
              <Button className="h-12 px-8 rounded-full bg-white text-blue-600 hover:bg-white/90 mt-8">
                <Link href="/contact">Contact Us Today</Link>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
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
