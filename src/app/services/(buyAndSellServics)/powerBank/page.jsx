
import PowerBankCard from "@/components/allCard/PowerBankCard";
import powerBanksData from "@/utils/powerBanksData";

const Page = () => {
  return (
    <div className='w-11/12 mx-auto md:w-10/12'>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-10">
        {powerBanksData.map((powerBank) => (
          <div key={powerBank.product_id}>
            <PowerBankCard powerBank={powerBank} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;

// import PowerBankCard from "@/components/allCard/PowerBankCard";
// import powerBanksData from "@/utils/powerBanksData";

// const Page = () => {
//   return (
//     <div className='w-11/12 mx-auto md:w-10/12'>
//       <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10">
//         {powerBanksData.map((powerBank) => (
//           <div key={powerBank.product_id}>
//             <PowerBankCard powerBank={powerBank} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Page;
