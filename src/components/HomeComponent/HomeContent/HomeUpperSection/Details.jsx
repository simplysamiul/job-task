import React from 'react'

const Details = () => {
  return (
    <div className='bg-white py-4 rounded-lg h-full'>
      <div className='w-2/3 p-4'>
        <p className='bg-secondary flex items-center text-center rounded-full w-full pr-4'>
          <span className=' bg-primary text-white text-sm p-4 rounded-full w-1/2'>Profile</span>
          <span className='text-textPrimary text-sm rounded-full w-1/2'>Position</span>
        </p>
      </div>
      <div>
        <p className='py-5 px-5 flex items-center justify-between'>
          <span className='text-textPrimary'>Team</span>
          <span className='text-primary font-bold font-xl'>Atletico</span>
        </p>
        <div className="w-full border-b-2 border-border"></div>
        <p className='py-5 px-5 flex items-center justify-between'>
          <span className='text-textPrimary'>Position</span>
          <span className='text-primary font-bold font-xl'>LW</span>
        </p>
        <div className="w-full border-b-2 border-border"></div>
        <p className='py-5 px-5 flex items-center justify-between'>
          <span className='text-textPrimary'>Minutes</span>
          <span className='text-primary font-bold font-xl'>346</span>
        </p>
        <div className="w-full border-b-2 border-border"></div>
        <p className='py-5 px-5 flex items-center justify-between'>
          <span className='text-textPrimary'>Rating</span>
          <span className='text-primary font-bold font-xl'>- -</span>
        </p>
        <div className="w-full border-b-2 border-border"></div>
        <p className='py-5 px-5 flex items-center justify-between'>
          <span className='text-textPrimary'>Model Reliability</span>
          <span className='text-rose-400 font-bold font-xl'>Low</span>
        </p>
        <div className="w-full border-b-2 border-border"></div>
        <p className='py-5 px-5 flex items-center justify-between'>
          <span className='text-textPrimary'>GBE Points</span>
          <span className='text-primary font-bold font-xl'>- -</span>
        </p>
        <div className="w-full border-b-2 border-border"></div>
        <p className='py-5 px-5 flex items-center justify-between'>
          <span className='text-textPrimary'>Non-Penalty Goals</span>
          <span className='text-primary font-bold font-xl'>- -</span>
        </p>
        <div className="w-full border-b-2 border-border"></div>
        <p className='py-5 px-5 flex items-center justify-between'>
          <span className='text-textPrimary'>Non-Penalty Goals</span>
          <span className='text-primary font-bold font-xl'>- -</span>
        </p>
      </div>
    </div>
  )
}

export default Details
