import ServiceCard from '@/components/allCard/ServiceCard'
import { mobileAppData } from '@/utils/service'
import { Item } from '@radix-ui/react-accordion'
import React from 'react'

const page = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 py-10'>
      {mobileAppData?.map((Item, index) => <ServiceCard key={index} item={Item} />)}
    </div>
  )
}

export default page