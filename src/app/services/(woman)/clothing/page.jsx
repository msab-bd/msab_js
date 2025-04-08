import ClothingCard from "@/components/allCard/ClothingCard"
import { clothingData } from "@/utils/service"

const page = () => {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
            {clothingData?.map((clothing)=><ClothingCard clothing={clothing} key={clothing.id}/>)}
        </div>
    )
}

export default page