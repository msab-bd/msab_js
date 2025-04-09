import ServiceCard from '@/components/allCard/ServiceCard'
import { websiteData } from '@/utils/service'
import React from 'react'

const page = () => {
  return (
    <div className='py-10 grid grid-cols-2 gap-5'>
        {websiteData?.map((item , idx)=><ServiceCard item={item} key={idx}/>)}
    </div>
  )
}

export default page