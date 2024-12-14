import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Hashi Homes</h3>
            <p className="text-sm text-gray-600">Fractional real estate investment in Japan</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-md font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li><Link href="/properties" className="text-gray-600 hover:text-gray-900">Properties</Link></li>
              <li><Link href="/how-it-works" className="text-gray-600 hover:text-gray-900">How It Works</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-gray-900">About Us</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-md font-semibold mb-2">Contact</h4>
            <p className="text-sm text-gray-600">info@hashihomes.com</p>
            <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-md font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">Twitter</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">LinkedIn</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Facebook</a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-4 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Hashi Homes. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

