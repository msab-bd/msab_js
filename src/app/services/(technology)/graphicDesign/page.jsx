import DesignServiceCard from '@/components/allCard/DesignServiceCard'
import { designServices } from '@/utils/service'

const page = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 p-4'>
            {designServices?.map((item, index) => <DesignServiceCard service={item} key={index} />)}
        </div>
    )
}

export default page