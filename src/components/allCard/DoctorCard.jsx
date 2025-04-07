import React from 'react'
import { Card, CardContent, CardFooter, CardTitle } from '../ui/card'
import Image from 'next/image'
import { Button } from '../ui/button'
import { VideoIcon, Star } from 'lucide-react'

const DoctorCard = ({ doctor }) => {
  const {
    name,
    degree,
    rating,
    experience,
    consultation_fee,
    profile_image
  } = doctor || {}

  return (
    <Card className="w-full  rounded-2xl shadow-md overflow-hidden py-0">
      <div className="relative w-full h-64">
        <Image
          src={profile_image}
          alt="doctor profile image"
          fill
          className="object-cover **:not-[]:"
        />
      </div>

      <CardContent className="px-4 space-y-2">
        <CardTitle className="text-lg font-semibold">{name}</CardTitle>
        <p className="text-sm text-gray-500">{degree}</p>

        <div className="flex justify-between items-center text-sm text-gray-600 mt-2">
          <span className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500" />
            {rating}
          </span>
          <span>{experience}</span>
        </div>

        <p className="font-semibold text-base text-black">{consultation_fee}/Consultation</p>
      </CardContent>

      <CardFooter className="p-4">
        <Button className="w-full text-base">
          <VideoIcon className="mr-2 w-5 h-5" />
          এখনই ডক্টর দেখাও
        </Button>
      </CardFooter>
    </Card>
  )
}

export default DoctorCard
