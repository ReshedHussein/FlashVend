"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              FlashVend
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600">
              Products
            </Link>
            <Link href="/locations" className="text-sm font-medium text-gray-600 hover:text-blue-600">
              Locations
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-blue-600">
              About
            </Link>
            <Button className="rounded-full bg-blue-600 text-white hover:bg-blue-700">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </nav>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container max-w-7xl mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600">
              Products
            </Link>
            <Link href="/locations" className="text-sm font-medium text-gray-600 hover:text-blue-600">
              Locations
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-blue-600">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-blue-600">
              Contact
            </Link>
            <Button className="rounded-full bg-blue-600 text-white hover:bg-blue-700 w-full">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
