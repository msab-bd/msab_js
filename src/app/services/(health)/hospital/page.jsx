import HospitalCard from "@/components/allCard/HospitalCard"
import { hospitalData } from "@/utils/service"

const page = () => {
    return (
        <div className="w-11/12 mx-auto md:w-10/12 grid md:grid-cols-3 gap-10 py-10">
            {hospitalData?.map((hospitalItem, index)=><HospitalCard key={index} hospitalItem={hospitalItem}/>)}
        </div>
    )
}

export default page