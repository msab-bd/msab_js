import DoctorCard from "@/components/allCard/DoctorCard"
import doctorData from "@/utils/doctorData"



const page = () => {
    return (
        <div className="w-11/12 mx-auto md:w-10/12 grid md:grid-cols-3 gap-10 py-10">
            {doctorData.map((doctor, index)=> <DoctorCard doctor={doctor} key={index} />)}
        </div>
    )
}

export default page