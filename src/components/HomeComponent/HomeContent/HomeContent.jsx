import React from 'react'
import Profile from './HomeUpperSection/Profile'
import Details from './HomeUpperSection/Details'
import Chart from './HomeUpperSection/Chart'
import Rating from './HomeUpperSection/Rating'
import AnotherDEtails from './HomeLowerSection/AnotherDEtails'

const HomeContent = () => {
  return (
    <div className="bg-secondary rounded-tl-md rounded-bl-md py-10 px-5">
      {/* home content upper section */}
      <div className='grid grid-cols-3 grid-rows-3 gap-x-4'>
          <div className='col-span-1 row-span-3'>
            <Profile />
          </div>
          <div className='col-span-1 row-span-2'>
            <Details />
          </div>
          <div className='col-span-1 row-span-2'>
            <Chart />
          </div>
        <div className='row-span-2 col-span-2 mt-4'>
          <Rating />
        </div>
      </div>
      <div>
        <AnotherDEtails />
      </div>
    </div>
  )
}

export default HomeContent
