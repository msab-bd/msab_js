import BeautyProductsCard from '@/components/allCard/BeautyProductsCard'
import { beautyProducts } from '@/utils/service'

const page = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 p-4'>
            {beautyProducts.map((item, index) => <BeautyProductsCard item={item} key={index} />)}
        </div>
    )
}

export default page