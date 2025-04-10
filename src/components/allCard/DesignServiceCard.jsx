"use client"

import Image from "next/image"
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const DesignServiceCard = ({ service }) => {
  return (
    <Card className="max-w-sm p-4 shadow-lg rounded-lg">
      <Image
        src={service.image}
        alt={service.name}
        width={400}
        height={250}
        className="object-cover rounded-md"
      />
      <CardContent className="p-2">
        <CardTitle className="text-xl font-semibold">{service.name}</CardTitle>
        <CardDescription className="text-gray-600 text-sm mt-2">
          {service.description}
        </CardDescription>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-bold">Price: ৳{service.price}</span>
          <Button variant="outline" size="sm">
            Book Now
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default DesignServiceCard
