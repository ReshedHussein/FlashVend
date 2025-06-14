import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { ArrowRight, X, Instagram, Music } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center pt-16">
        {/* About Hero */}
        <section className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 md:py-32">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">About FlashVend</h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-[800px] mt-4">Get to know our story and mission</p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="w-full bg-white py-20">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold text-blue-600 mb-6">Our Story</h2>
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-4">
                    We're a small family-owned business proudly serving the Dallas-Fort Worth area with one goal in
                    mind: to make vending simple, reliable, and convenient. Built on values of trust, quality service,
                    and community, we're passionate about providing a better vending experience for our
                    customers—whether at work, school, or on the go.
                  </p>
                  <p className="mb-4">
                    Our machines are brand new and equipped with the latest technology to eliminate the common
                    frustrations of traditional vending. No more stuck products or rejected coins—our cashless,
                    touch-free checkout lets customers authorize payment quickly and grab their item without waiting in
                    line or fiddling with change. It's a seamless, grab-and-go experience designed to fit modern
                    lifestyles and busy schedules. We're excited to bring this elevated level of service to our
                    community and grow with the people we serve.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image src="/images/stockwell.png" alt="SmartVend Machine" fill className="object-contain bg-gray-50" />
              </div>
            </div>

            <div className="mt-20">
              <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-blue-600 mb-3">Quality</h3>
                  <p className="text-gray-600">
                    We carefully select premium products and maintain our machines to the highest standards to ensure a
                    consistently excellent experience.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-blue-600 mb-3">Innovation</h3>
                  <p className="text-gray-600">
                    We embrace the latest technology to make vending more convenient, reliable, and enjoyable for
                    everyone.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-blue-600 mb-3">Community</h3>
                  <p className="text-gray-600">
                    As a local family business, we're committed to serving and supporting our Dallas-Fort Worth
                    community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-gradient-to-r from-blue-700 to-blue-600 text-white py-16">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Ready to Upgrade Your Vending Experience?
              </h2>
              <p className="text-xl text-white/90 max-w-[600px] mt-4">
                Contact us today to learn how we can serve your location
              </p>
              <Button className="h-12 px-8 rounded-full bg-white text-blue-600 hover:bg-white/90 mt-8">
                <Link href="/contact">Get in Touch</Link>
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
