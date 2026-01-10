
import Heading from '../Heading/Heading'
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled } from "react-icons/tb";
import { PiPlant } from "react-icons/pi";
import { LuFactory } from "react-icons/lu";
import { SlBadge } from "react-icons/sl";
import { TbTruckDelivery } from "react-icons/tb";

const Process = () => {

  const renderSteps = steps.map(item => {
    return (
      <div className={`flex-1 basis-[300px] ${item.id % 2 === 0 ? 'md:-mt-100' : ''}`}>
        <span className='flex justify-center items-center w-18 h-18 mx-auto rounded-full text-8xl bg-zinc-800 text-white outline-[3px] outline-offset outline-zinc-800 outline-dashed'>
          {item.number}
        </span>

        <div className='flex items-center md:mt-10 gap-x-5'>
            <span className='flex justify-center items-center bg-gradient-to-b from-orange-400 to-orange-500 text-white w-15 h-15 rounded-full text-3xl'>
              {item.icon}
            </span>

          <div className='flex-1'>
            <h4 className='text-zinc-800 text-2xl font-bold'>
              {item.title}
            </h4>
            <p className='text-zinc-600 mt-2'>
              {item.para}
            </p>
          </div>
        </div>
      </div>
    )
  })

  return (
    <section>
        <div className='max-w-[1400px] mx-auto px-10 py-20'>

          <div className='w-fit mr-auto'>
            <Heading highlight="Our" heading="Process"/>
          </div>

          <div className='flex flex-wrap md:mt-20 mt-10 md:pt-50 gap-y-17 justify-center items-center'>
            {renderSteps}
          </div>
            
        </div>
    </section>
  )
}

export default Process

const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    title: 'Sourcing',
    para: 'Hello',
    icon: <PiPlant />,
  },
   {
    id: 2,
    number: <TbCircleNumber2Filled/>,
    title: 'Manufacturing',
    para: 'Hello',
    icon: <LuFactory />,
  },
   {
    id: 3,
    number: <TbCircleNumber3Filled/>,
    title: 'Quality Control',
    para: 'Hello',
    icon: <SlBadge />,
  },
   {
    id: 4,
    number: <TbCircleNumber4Filled/>,
    title: 'Logistics',
    para: 'Hello',
    icon: <TbTruckDelivery />,
  },
]