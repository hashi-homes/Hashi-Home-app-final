'use client'

import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Image from 'next/image'
import Link from 'next/link'

interface Property {
  id: number
  name: string
  location: string
  price: number
  expectedYield: number
  currentInvestment: number
  image: string
}

const properties: Property[] = [
  {
    id: 1,
    name: "Sakura Residence",
    location: "Tokyo, Japan",
    price: 500000,
    expectedYield: 5.2,
    currentInvestment: 250000,
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    id: 2,
    name: "Kyoto Traditional House",
    location: "Kyoto, Japan",
    price: 750000,
    expectedYield: 4.8,
    currentInvestment: 500000,
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    id: 3,
    name: "Osaka Modern Apartment",
    location: "Osaka, Japan",
    price: 300000,
    expectedYield: 6.1,
    currentInvestment: 150000,
    image: "/placeholder.svg?height=300&width=400"
  }
]

function PropertyCard({ property }: { property: Property }) {
  const percentageFilled = (property.currentInvestment / property.price) * 100
  const remainingInvestment = property.price - property.currentInvestment

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image 
        src={property.image} 
        alt={property.name} 
        width={400} 
        height={300} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{property.name}</h3>
        <p className="text-gray-600 mb-2">{property.location}</p>
        <p className="text-lg font-bold mb-2">${property.price.toLocaleString()}</p>
        <p className="text-sm text-gray-600 mb-2">Expected Yield: {property.expectedYield}%</p>
        <div className="mb-2">
          <Progress value={percentageFilled} className="h-2" />
        </div>
        <p className="text-sm text-gray-600 mb-4">
          ${property.currentInvestment.toLocaleString()} invested of ${property.price.toLocaleString()}
        </p>
        <Link href={`/properties/${property.id}`}>
          <Button className="w-full">
            View Property
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default function PropertiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Available Properties</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

