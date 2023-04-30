import React from 'react'
import player from '../../../../assets/man-1.png';
import { IoIosArrowDown } from 'react-icons/io';

const Profile = () => {
  return (
    <div className='bg-white rounded-lg h-full'>
      <div className='flex justify-center items-center flex-col pb-10'>
        <div className="avatar pt-12 pb-10">
            <div className="w-28 rounded-full ring ring-rose-200 ring-offset-base-100 ring-offset-8">
                <img src={player}alt='' />
            </div>
        </div>
              <h2 className='text-primary font-bold text-2xl'>Ronaldo Zuniga</h2>
              <p className='text-textPrimary font-normal text-sm pb-8'>Atletico Huila</p>
              <div className="w-full border-b-2 border-border"></div>
          </div>
          <div className='flex flex-col w-2/3 px-5 py-4'>
              <p className='grid grid-cols-3 align-middle my-2'>
                  <span className='text-textPrimary w-4'>Height</span>
                  <span className='text-textPrimary'>:</span>
                  <span className='text-primary font-semibold text-lg'>6’2”</span>
              </p>
              <p className='grid grid-cols-3 align-middle my-2'>
                  <span className='text-textPrimary w-4'>Weight</span>
                  <span className='text-textPrimary'>:</span>
                  <span className='text-primary font-semibold text-lg'>194kg</span>
              </p>
              <p className='grid grid-cols-3 align-middle my-2'>
                  <span className='text-textPrimary w-4'>Age</span>
                  <span className='text-textPrimary'>:</span>
                  <span className='text-primary font-semibold text-lg'>27</span>
              </p>
              <p className='grid grid-cols-3 align-middle my-2'>
                  <span className='text-textPrimary w-4'>Foot</span>
                  <span className='text-textPrimary'>:</span>
                  <span className='text-primary font-semibold text-lg'>Right</span>
              </p>
          </div>
          <div className="w-full border-b-2 border-border"></div>
          <div className='px-5 py-12'>
              <p className='w-full border-2 py-3 px-2 flex justify-between items-center rounded-lg my-4'>
                  <span className='text-textPrimary'>Position</span>
                  <span className='text-textPrimary'><IoIosArrowDown /></span>
              </p>
              <p className='w-full border-2 py-3 px-2 flex justify-between items-center rounded-lg my-4'>
                  <span className='text-textPrimary'>Season</span>
                  <span className='text-textPrimary'><IoIosArrowDown /></span>
              </p>
              <p className='w-full border-2 py-3 px-2 flex justify-between items-center rounded-lg my-4'>
                  <span className='text-textPrimary'>League</span>
                  <span className='text-textPrimary'><IoIosArrowDown /></span>
              </p>
              <p className='w-full border-2 py-3 px-2 flex justify-between items-center rounded-lg my-4'>
                  <span className='text-textPrimary'>Team</span>
                  <span className='text-textPrimary'><IoIosArrowDown /></span>
              </p>
          </div>
    </div>
  )
}

export default Profile
