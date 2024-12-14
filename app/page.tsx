import Image from 'next/image'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { Button } from "@/components/ui/button"
import { ArrowRight, Home, DollarSign, Users } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center">
          <Image
            src="/japan-landscape.jpg"
            alt="Beautiful Japan landscape"
            layout="fill"
            objectFit="cover"
            className="absolute z-0"
          />
          <div className="relative z-10 text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Hashi Homes</h1>
            <p className="text-xl mb-8">Own and earn yield from homes in Japan for as low as 100 USD.</p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Investing <ArrowRight className="ml-2" />
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Hashi Homes?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Home className="mx-auto h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Fractional Ownership</h3>
                <p className="text-gray-600">Invest in premium Japanese real estate with as little as $100.</p>
              </div>
              <div className="text-center">
                <DollarSign className="mx-auto h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Passive Income</h3>
                <p className="text-gray-600">Earn regular yields from your property investments.</p>
              </div>
              <div className="text-center">
                <Users className="mx-auto h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Managed by Experts</h3>
                <p className="text-gray-600">Professional property management ensures optimal returns.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Investment Journey?</h2>
            <p className="mb-8">Join Hashi Homes today and start building your real estate portfolio in Japan.</p>
            <Button size="lg" variant="secondary">
              Explore Properties
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

