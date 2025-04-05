import HouseRentCard from '@/components/allCard/HouseRentCard'
import houseData from '@/utils/cardData'
import { Item } from '@radix-ui/react-accordion'

const page = () => {
    return (
        <div className='w-11/12 mx-auto md:w-10/12'>
            <div className="grid md:grid-cols-3 gap-10 py-10">
                {houseData.map((Item, index) => <HouseRentCard Item={Item} key={index} />)}
            </div>
        </div>
    )
}

export default page