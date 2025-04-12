import MedicineCard from '@/components/allCard/MedicineCard'
import { medicineData } from '@/utils/service'

const page = () => {

    return (
        <div>
            <h1>Medicine</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
                {medicineData?.map((med) => <MedicineCard med={med} key={med.id} />)}
            </div>
        </div>
    )
}

export default page