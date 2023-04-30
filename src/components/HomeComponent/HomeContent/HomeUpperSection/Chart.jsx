import React from 'react'
import chart from '../../../../assets/chart.png';

const Chart = () => {
  return (
    <div className='bg-white py-8 rounded-lg h-full'>
      <div className='flex'>
        <button className='btn btn-primary bg-secondary text-textPrimary border-0 rounded-full mx-4 capitalize test-sm'>Model</button>
        <div className='w-2/3'>
        <p className='bg-secondary flex items-center text-center rounded-full w-full pr-4'>
          <span className=' bg-primary text-white text-sm p-4 rounded-full w-1/2'>Style</span>
          <span className='text-textPrimary text-sm rounded-full w-1/2'>Contribution</span>
        </p>
      </div>
      </div>
      <div className='relative my-20'>
        <img className='mx-auto' src={chart} alt="/" />
        <div>
          <span className='text-textPrimary text-sm absolute top-4 left-36'>42</span>
          <span className='text-textPrimary text-sm absolute top-12 right-40'>15</span>
          <span className='text-textPrimary text-sm absolute top-24 right-20'>81</span>
          <span className='text-textPrimary text-sm absolute bottom-24 right-40'>3</span>
          <span className='text-textPrimary text-sm absolute top-24 left-36'>3</span>
          <span className='text-textPrimary text-sm absolute bottom-16 left-36'>4</span>
        </div>
        <div>
          <span className='text-textPrimary absolute top-0 left-16 text-xs'>Defending <br /> Frequency</span>
          <span className='text-xs text-textPrimary absolute top-28 left-8'>Shot <br /> Creation</span>
          <span className='text-xs text-textPrimary absolute bottom-0 left-12'>Ball <br/> Progression</span>
          <span className='text-xs text-textPrimary absolute bottom-0 right-20'>Set <br/> PLays</span>
          <span className='text-xs text-textPrimary absolute bottom-20 right-2'>Possession <br /> Retention</span>
          <span className='text-xs text-textPrimary absolute top-0 right-12'>Defending <br /> Impact</span>
        </div>
      </div>
    </div>
  )
}

export default Chart
