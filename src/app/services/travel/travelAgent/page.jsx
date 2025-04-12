

import travelAgents from '@/utils/travelAgentData';
import TravelAgentCard from '@/components/allCard/TravelAgentCard';


const Page = () => {


  return (
    <div className='w-11/12 mx-auto md:w-10/12'>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
        {travelAgents.map((agent) => (
          <div key={agent.agent_id}>
            <TravelAgentCard agent={agent} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;