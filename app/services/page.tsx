import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, X, Instagram, Music } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center pt-16">
        {/* Services Hero */}
        <section className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">Our Vending Services</h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-[800px] mt-4">
                Discover how we can transform your refreshment experience
              </p>
            </div>
          </div>
        </section>

        {/* Service Options */}
        <section className="w-full bg-white py-20">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl overflow-hidden shadow-lg">
                <div className="relative h-[180px] w-full flex items-center justify-center p-2 bg-white">
                  <Image
                    src="/images/micromart2.png"
                    alt="Office Vending"
                    width={240}
                    height={180}
                    className="object-contain max-h-[160px]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-blue-600">Office Refreshments</h3>
                  <p className="text-gray-600 mt-2">
                    Keep your team energized and productive with our premium office vending solutions
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                      <span>Custom selection for your team</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                      <span>Healthy options available</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                      <span>Regular restocking service</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6 rounded-full bg-blue-600 hover:bg-blue-700">Learn More</Button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl overflow-hidden shadow-lg">
                <div className="relative h-[200px] w-full flex items-center justify-center p-2 bg-white">
                  <Image
                    src="/images/micromart3.png"
                    alt="Campus Vending"
                    width={240}
                    height={180}
                    className="object-contain max-h-[160px]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-blue-600">Campus Solutions</h3>
                  <p className="text-gray-600 mt-2">Ideal for schools, universities, and large campus environments</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                      <span>High-capacity machines</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                      <span>Multiple payment options</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                      <span>24/7 availability</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6 rounded-full bg-blue-600 hover:bg-blue-700">Learn More</Button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl overflow-hidden shadow-lg">
                <div className="relative h-[200px] w-full flex items-center justify-center p-2 bg-white">
                  <Image
                    src="/images/stockwell.png"
                    alt="Healthcare Vending"
                    width={240}
                    height={180}
                    className="object-contain max-h-[160px]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-blue-600">Healthcare Facilities</h3>
                  <p className="text-gray-600 mt-2">
                    Specialized solutions for hospitals, clinics, and healthcare environments
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                      <span>Nutritious options</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                      <span>Essential personal items</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                      <span>Touchless payment options</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6 rounded-full bg-blue-600 hover:bg-blue-700">Learn More</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customization Options */}
        <section className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Customization Options</h2>
              <p className="text-xl text-white/90 max-w-[600px] mt-4">
                Tailor your vending solution to your specific needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                <h3 className="text-2xl font-semibold mb-4">Product Selection</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-white text-blue-600 flex items-center justify-center text-sm mr-3 mt-0.5">
                      1
                    </span>
                    <div>
                      <h4 className="font-medium">Healthy Options</h4>
                      <p className="text-white/90 mt-1">Organic snacks, protein bars, fresh fruit, and more</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-white text-blue-600 flex items-center justify-center text-sm mr-3 mt-0.5">
                      2
                    </span>
                    <div>
                      <h4 className="font-medium">Beverages</h4>
                      <p className="text-white/90 mt-1">Specialty coffees, teas, smoothies, and functional drinks</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-white text-blue-600 flex items-center justify-center text-sm mr-3 mt-0.5">
                      3
                    </span>
                    <div>
                      <h4 className="font-medium">Essentials</h4>
                      <p className="text-white/90 mt-1">
                        First aid supplies, personal care items, and cleaning products
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                <h3 className="text-2xl font-semibold mb-4">Service Features</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-white text-blue-600 flex items-center justify-center text-sm mr-3 mt-0.5">
                      1
                    </span>
                    <div>
                      <h4 className="font-medium">Regular Restocking</h4>
                      <p className="text-white/90 mt-1">
                        Scheduled service to ensure your machines are always fully stocked
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-white text-blue-600 flex items-center justify-center text-sm mr-3 mt-0.5">
                      2
                    </span>
                    <div>
                      <h4 className="font-medium">Payment Options</h4>
                      <p className="text-white/90 mt-1">Mobile payments, credit cards, employee badges, and more</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-white text-blue-600 flex items-center justify-center text-sm mr-3 mt-0.5">
                      3
                    </span>
                    <div>
                      <h4 className="font-medium">Analytics</h4>
                      <p className="text-white/90 mt-1">Insights on popular items to optimize your selection</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Find the Perfect Solution for Your Space
              </h2>
              <p className="text-xl text-white/90 max-w-[600px] mt-4">
                Contact our team for a personalized consultation
              </p>
              <Button className="h-12 px-8 rounded-full bg-white text-blue-600 hover:bg-white/90 mt-8">
                <Link href="/contact">Request a Quote</Link>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full bg-gray-900 text-white py-12">
          <div className="container px-4 md:px-6">
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
