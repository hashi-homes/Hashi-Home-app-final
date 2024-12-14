'use client'

import { useState } from 'react'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowDownRight, DollarSign } from 'lucide-react'

// This would typically come from an API or database
const investmentData = {
  totalInvested: 10000,
  totalYield: 1550,
  properties: [
    { id: 1, name: "Kyoto Traditional Machiya", invested: 5000, yield: 275 },
    { id: 2, name: "Tokyo Modern Apartment", invested: 3000, yield: 165 },
    { id: 3, name: "Osaka Family Home", invested: 2000, yield: 110 },
  ]
}

function InvestmentCard({ title, amount, icon, description }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">${amount.toLocaleString()}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

function PropertyCard({ property }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{property.name}</CardTitle>
        <CardDescription>Investment Details</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium">Invested Amount</p>
            <p className="text-2xl font-bold">${property.invested.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Total Yield</p>
            <p className="text-2xl font-bold">${property.yield.toLocaleString()}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Investment Dashboard</h1>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="properties">Properties</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <InvestmentCard
                title="Total Invested"
                amount={investmentData.totalInvested}
                icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
                description="Your total investment in USDT"
              />
              <InvestmentCard
                title="Total Yield"
                amount={investmentData.totalYield}
                icon={<ArrowUpRight className="h-4 w-4 text-green-500" />}
                description="Your total earnings in USDT"
              />
              <InvestmentCard
                title="Yield Percentage"
                amount={(investmentData.totalYield / investmentData.totalInvested * 100).toFixed(2) + "%"}
                icon={<ArrowUpRight className="h-4 w-4 text-green-500" />}
                description="Your current yield percentage"
              />
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Investment History</CardTitle>
                <CardDescription>Your recent investments and yields</CardDescription>
              </CardHeader>
              <CardContent>
                {/* This would typically be a chart or graph showing investment over time */}
                <p>Investment history chart placeholder</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="properties" className="space-y-4">
            {investmentData.properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  )
}

