import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="py-4 px-6 bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Hashi Homes
        </Link>
        <nav className="space-x-4">
          <Link href="/properties" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Properties
          </Link>
          <Link href="/dashboard" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Dashboard
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            About
          </Link>
          <Link href="/company-signup" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Company Signup
          </Link>
          <Link href="/list-property" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            List Property
          </Link>
          <Button variant="outline">Sign In</Button>
          <Button>Get Started</Button>
        </nav>
      </div>
    </header>
  )
}

