import { Button } from '../ui/button'
import { Card, CardTitle } from '../ui/card'

const ServiceCard = ({ item }) => {

    const { title, description, image, serviceName, deliveryTime, revisions, extras } = item || {}

    return (
        <Card>
            <div className="grid grid-cols-2 p-5 gap-10">
                <div className="space-y-2 flex flex-col justify-center">
                    <CardTitle>{serviceName}</CardTitle>
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <p className="text-sm text-gray-500">{description}</p>
                    <div className="flex gap-2 text-sm text-gray-500">
                        <span>ডেলিভারি: {deliveryTime} </span>
                        <span>রিভিশন: {revisions} </span>
                    </div>
                    <div className="flex justify-between w-full mt-5 ">
                        <Button >View Details</Button>
                        <Button >Add to Cart</Button>
                    </div>
                    
                </div>
                <div className="">
                    <img src={image} alt="" />
                </div>
            </div>
        </Card>
    )
}

export default ServiceCard