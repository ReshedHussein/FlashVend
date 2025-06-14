import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center pt-16">
        {/* Products Hero */}
        <section className="w-full bg-white py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">Our Vending Solutions</h1>
              <p className="text-xl md:text-2xl text-gray-500 max-w-[800px] mt-4">
                Discover our range of AI-powered vending machines for every space and need
              </p>
            </div>
          </div>
        </section>

        {/* Product Lineup */}
        <section className="w-full bg-gray-50 py-20">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
                <div className="relative h-[300px] w-full bg-gray-100 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="SmartVend PicoMarket"
                    width={400}
                    height={300}
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold">PicoMarket</h3>
                  <p className="text-gray-500 mt-2">
                    Our compact solution perfect for offices, lobbies, and small spaces
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-black mr-2"></span>
                      <span>30-50 product capacity</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-black mr-2"></span>
                      <span>AI camera technology</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-black mr-2"></span>
                      <span>Customizable inventory</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6 rounded-full">Learn More</Button>
                </div>
              </div>

              <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
                <div className="relative h-[300px] w-full bg-gray-100 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="SmartVend MicroMart"
                    width={400}
                    height={300}
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold">MicroMart</h3>
                  <p className="text-gray-500 mt-2">Our mid-size solution for larger offices and public spaces</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-black mr-2"></span>
                      <span>80-120 product capacity</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-black mr-2"></span>
                      <span>Advanced inventory management</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-black mr-2"></span>
                      <span>Multiple payment options</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6 rounded-full">Learn More</Button>
                </div>
              </div>

              <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
                <div className="relative h-[300px] w-full bg-gray-100 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="SmartVend MaxiMart"
                    width={400}
                    height={300}
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold">MaxiMart</h3>
                  <p className="text-gray-500 mt-2">Our largest solution for high-traffic areas and campuses</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-black mr-2"></span>
                      <span>150-200+ product capacity</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-black mr-2"></span>
                      <span>Multi-zone temperature control</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-black mr-2"></span>
                      <span>Real-time analytics dashboard</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6 rounded-full">Learn More</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customization Options */}
        <section className="w-full bg-white py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Customization Options</h2>
              <p className="text-xl text-gray-500 max-w-[600px] mt-4">
                Tailor your vending solution to your specific needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gray-50 rounded-3xl p-8">
                <h3 className="text-2xl font-semibold mb-4">Product Selection</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-black text-white flex items-center justify-center text-sm mr-3 mt-0.5">
                      1
                    </span>
                    <div>
                      <h4 className="font-medium">Healthy Options</h4>
                      <p className="text-gray-500 mt-1">Organic snacks, protein bars, fresh fruit, and more</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-black text-white flex items-center justify-center text-sm mr-3 mt-0.5">
                      2
                    </span>
                    <div>
                      <h4 className="font-medium">Beverages</h4>
                      <p className="text-gray-500 mt-1">Specialty coffees, teas, smoothies, and functional drinks</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-black text-white flex items-center justify-center text-sm mr-3 mt-0.5">
                      3
                    </span>
                    <div>
                      <h4 className="font-medium">Essentials</h4>
                      <p className="text-gray-500 mt-1">
                        First aid supplies, personal care items, and cleaning products
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-3xl p-8">
                <h3 className="text-2xl font-semibold mb-4">Machine Features</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-black text-white flex items-center justify-center text-sm mr-3 mt-0.5">
                      1
                    </span>
                    <div>
                      <h4 className="font-medium">Branding</h4>
                      <p className="text-gray-500 mt-1">
                        Custom exterior wraps and digital displays with your branding
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-black text-white flex items-center justify-center text-sm mr-3 mt-0.5">
                      2
                    </span>
                    <div>
                      <h4 className="font-medium">Payment Options</h4>
                      <p className="text-gray-500 mt-1">Mobile payments, credit cards, employee badges, and more</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-black text-white flex items-center justify-center text-sm mr-3 mt-0.5">
                      3
                    </span>
                    <div>
                      <h4 className="font-medium">Analytics</h4>
                      <p className="text-gray-500 mt-1">Real-time inventory tracking and consumer behavior insights</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-black text-white py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Find the Perfect Solution for Your Space
              </h2>
              <p className="text-xl text-gray-300 max-w-[600px] mt-4">
                Contact our team for a personalized consultation
              </p>
              <Button className="h-12 px-8 rounded-full bg-white text-black hover:bg-gray-200 mt-8">
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full bg-white py-12 border-t">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold">SmartVend</h3>
                <p className="text-gray-500 mt-2">The future of vending</p>
              </div>

              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                <a href="#" className="text-gray-500 hover:text-black">
                  About
                </a>
                <a href="#" className="text-gray-500 hover:text-black">
                  Products
                </a>
                <a href="#" className="text-gray-500 hover:text-black">
                  Features
                </a>
                <a href="#" className="text-gray-500 hover:text-black">
                  Contact
                </a>
              </div>
            </div>

            <div className="border-t mt-8 pt-8 text-center text-gray-500">
              <p>© {new Date().getFullYear()} SmartVend. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
