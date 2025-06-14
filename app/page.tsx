import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Zap, Settings, Heart, CreditCard, Instagram, Music, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center pt-16">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 md:py-32">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">Modern Refreshment Solutions</h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-[800px] mt-4">
                Providing premium snacks, drinks, and essentials with our AI-powered grab-and-go vending service
              </p>
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <section className="w-full bg-white py-20 md:py-32">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-blue-600">Premium Vending Service</h2>
              <p className="text-xl text-gray-600 max-w-[600px] mt-4">
                Upgrade your amenities with our next-generation refreshment solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                <div className="relative h-[400px] w-full flex items-center justify-center p-4 bg-white">
                  <Image
                    src="/images/micromart2.png"
                    alt="Beverage Vending Machine"
                    width={400}
                    height={380}
                    className="object-contain max-h-[380px]"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-2xl font-semibold text-blue-600">Beverage Station</h3>
                  <p className="text-gray-600 mt-2">Premium beverages including water, soda, energy drinks, and more</p>
                </div>
              </div>

              <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                <div className="relative h-[400px] w-full flex items-center justify-center p-4 bg-white">
                  <Image
                    src="/images/micromart3.png"
                    alt="Snack Vending Machine"
                    width={400}
                    height={380}
                    className="object-contain max-h-[380px]"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-2xl font-semibold text-blue-600">Snack Center</h3>
                  <p className="text-gray-600 mt-2">Variety of snacks from chips and candy to healthier options</p>
                </div>
              </div>

              <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                <div className="relative h-[400px] w-full flex items-center justify-center p-4 bg-white">
                  <Image
                    src="/images/stockwell.png"
                    alt="MicroMart Vending"
                    width={380}
                    height={380}
                    className="object-contain max-h-[380px]"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-2xl font-semibold text-blue-600">MicroMart Vending</h3>
                  <p className="text-gray-600 mt-2">
                    Our premium vending solutions offer a wide variety of snacks, drinks, and essentials
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-20 md:py-32">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">How It Works</h2>
              <p className="text-xl text-white/90 max-w-[600px] mt-4">
                A seamless experience powered by cutting-edge technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center mb-4">
                  <CreditCard className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Scan</h3>
                <p className="text-white/90">Simply scan your card or phone at the machine to begin</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Select</h3>
                <p className="text-white/90">Choose your items and take them - no scanning or checkout needed</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center mb-4">
                  <ArrowRight className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Go</h3>
                <p className="text-white/90">Walk away with your items - payment is processed automatically</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="w-full bg-white py-20 md:py-32">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-blue-600">Why Choose Our Service</h2>
              <p className="text-xl text-gray-600 max-w-[600px] mt-4">
                Our unique approach to modern refreshment solutions
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="flex flex-col">
                <div className="flex items-start mb-4">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Settings className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Customized Offerings</h3>
                    <p className="text-gray-600">
                      We tailor our product selection based on your specific clientele and location needs
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-4">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <Heart className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-green-600">Healthier Options</h3>
                    <p className="text-gray-600">
                      Offering a wide range of nutritious snacks, drinks, and meal options not found in traditional
                      vending
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative h-[300px] md:h-auto overflow-hidden rounded-3xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Healthy vending options"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
              <div className="relative h-[300px] md:h-auto overflow-hidden rounded-3xl order-2 md:order-1">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Non-traditional vending items"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col order-1 md:order-2">
                <div className="flex items-start mb-4">
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center mr-4">
                    <Zap className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Beyond Traditional Vending</h3>
                    <p className="text-gray-600">
                      Access to everyday essentials like detergent pods, first aid supplies, and more
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-4">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Everyday Essentials</h3>
                    <p className="text-gray-600">
                      Our technology eliminates checkout lines and creates a seamless grab-and-go experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="w-full bg-gray-900 text-white py-20">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">What We Offer</h2>
              <p className="text-xl text-white/90 max-w-[600px] mt-4">
                Explore our wide range of refreshments and essentials
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center mb-4">
                  <span className="text-blue-600 text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Snacks</h3>
                <p className="text-white/90">Protein bars, chips, nuts, trail mix, cookies, crackers, and more</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center mb-4">
                  <span className="text-blue-600 text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Beverages</h3>
                <p className="text-white/90">Water, soda, energy drinks, coffee, tea, juice, and specialty drinks</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center mb-4">
                  <span className="text-blue-600 text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Fresh Items</h3>
                <p className="text-white/90">Sandwiches, salads, yogurt, and other fresh options</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center mb-4">
                  <span className="text-blue-600 text-xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Essentials</h3>
                <p className="text-white/90">Personal care items, first aid, and cleaning supplies</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-gradient-to-r from-blue-700 to-blue-600 text-white py-20 md:py-32">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Ready to Transform Your Refreshment Experience?
              </h2>
              <p className="text-xl text-white/90 max-w-[600px] mt-4">
                Join the future of vending with our AI-powered solutions
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
