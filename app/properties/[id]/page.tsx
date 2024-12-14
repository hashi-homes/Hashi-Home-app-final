'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { Header } from '../../components/header'
import { Footer } from '../../components/footer'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { MapPin, Calendar, Clock, Users, DollarSign, Briefcase } from 'lucide-react'

// This would typically come from an API based on the property ID
const propertyData = {
  id: 1,
  name: "Kyoto Traditional Machiya",
  image: "/kyoto-machiya-detail.jpg",
  price: 100000,
  currentInvestment: 90000,
  location: "Gion District, Kyoto, Japan",
  yield: "15.5%",
  startDate: "2023-09-01",
  investmentPeriod: "5 years",
  propertyManager: "Kyoto Real Estate Co., Ltd.",
  description: "Experience the charm of old Kyoto in this beautifully restored traditional machiya. Located in the heart of the historic Gion district, this property offers a unique blend of cultural heritage and modern comfort.",
  attractions: [
    "Kiyomizu-dera Temple (15-minute walk)",
    "Nishiki Market (10-minute walk)",
    "Gion Corner (5-minute walk)",
    "Yasaka Shrine (8-minute walk)"
  ]
}

export default function PropertyPage() {
  const { id } = useParams()
  const [investmentAmount, setInvestmentAmount] = useState('')
  const [isInvestmentDialogOpen, setIsInvestmentDialogOpen] = useState(false)

  const handleInvest = () => {
    console.log(`Investing ${investmentAmount} USDT in property ${id}`)
    // Here you would typically send the investment data to your backend API
    setIsInvestmentDialogOpen(false)
  }

  const percentageFilled = (propertyData.currentInvestment / propertyData.price) * 100
  const remainingInvestment = propertyData.price - propertyData.currentInvestment

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Image 
              src={propertyData.image} 
              alt={propertyData.name} 
              width={600} 
              height={400} 
              className="rounded-lg object-cover w-full"
            />
            <h1 className="text-3xl font-bold mt-4 mb-2">{propertyData.name}</h1>
            <p className="text-gray-600 mb-4 flex items-center">
              <MapPin className="mr-2" size={18} /> {propertyData.location}
            </p>
            <p className="text-lg mb-4">{propertyData.description}</p>
            <Card>
              <CardHeader>
                <CardTitle>Investment Progress</CardTitle>
                <CardDescription>
                  ${propertyData.currentInvestment.toLocaleString()} of ${propertyData.price.toLocaleString()} raised
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={percentageFilled} className="h-2 mb-2" />
                <p className="text-sm text-gray-600">
                  ${remainingInvestment.toLocaleString()} remaining
                </p>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Property Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <DollarSign className="mr-2" size={18} />
                  <span className="font-semibold">Price:</span>
                  <span className="ml-2">${propertyData.price.toLocaleString()}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2" size={18} />
                  <span className="font-semibold">Start Date:</span>
                  <span className="ml-2">{propertyData.startDate}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2" size={18} />
                  <span className="font-semibold">Investment Period:</span>
                  <span className="ml-2">{propertyData.investmentPeriod}</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-2" size={18} />
                  <span className="font-semibold">Expected Yield:</span>
                  <span className="ml-2">{propertyData.yield}</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="mr-2" size={18} />
                  <span className="font-semibold">Property Manager:</span>
                  <span className="ml-2">{propertyData.propertyManager}</span>
                </div>
              </CardContent>
            </Card>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Nearby Attractions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  {propertyData.attractions.map((attraction, index) => (
                    <li key={index}>{attraction}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Dialog open={isInvestmentDialogOpen} onOpenChange={setIsInvestmentDialogOpen}>
              <DialogTrigger asChild>
                <Button className="w-full">Invest Now</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Invest in {propertyData.name}</DialogTitle>
                  <DialogDescription>
                    Enter the amount you wish to invest in USDT.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <Label htmlFor="investment-amount">Investment Amount (USDT)</Label>
                  <Input
                    id="investment-amount"
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(e.target.value)}
                    placeholder="Enter amount"
                    type="number"
                  />
                </div>
                <DialogFooter>
                  <Button onClick={handleInvest}>Confirm Investment</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

