import React from 'react'

const Rating = () => {
  return (
    <div className='bg-white rounded-lg h-full'>
      <div className='w-2/3 p-4'>
        <p className='bg-secondary flex items-center text-center rounded-full w-full pr-4'>
          <span className=' bg-primary text-white text-sm p-4 rounded-full w-1/2'>Dual Rating</span>
          <span className='text-textPrimary text-sm rounded-full w-1/2'>Finish/Saving</span>
        </p>
      </div>
      <div className='grid grid-cols-2 gap-4 px-4 my-4'>
          <div className='border-2 rounded-lg py-5 px-4'>
            <div className='flex justify-between items-center mb-2'>
              <p className='text-primary font-semibold'>Aerial</p>
              <p className='text-primary font-semibold'>38/100</p>
          </div>
          <input type="range" min="0" max="100" value="40" className="range range-primary" />
          </div>
          <div className='border-2 rounded-lg py-5 px-4'>
            <div className='flex justify-between items-center mb-2'>
              <p className='text-primary font-semibold'>Aerial Set-Play</p>
              <p className='text-primary font-semibold'>48/100</p>
          </div>
          <input type="range" min="0" max="100" value="40" className="range range-info" />
          </div>
          <div className='border-2 rounded-lg py-5 px-4'>
            <div className='flex justify-between items-center mb-2'>
              <p className='text-primary font-semibold'>Dribbling</p>
              <p className='text-primary font-semibold'>--/100</p>
          </div>
          <input type="range" min="0" max="100" value="40" className="range range-warning" />
          </div>
          <div className='border-2 rounded-lg py-5 px-4'>
            <div className='flex justify-between items-center mb-2'>
              <p className='text-primary font-semibold'>Tackling</p>
              <p className='text-primary font-semibold'>60/100</p>
          </div>
          <input type="range" min="0" max="100" value="40" className="range range-error" />
          </div>
      </div>
    </div>
  )
}

export default Rating
