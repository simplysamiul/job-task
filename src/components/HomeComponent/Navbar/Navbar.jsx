import React from 'react'
import HomeContent from '../HomeContent/HomeContent'

const Navbar = () => {
  return (
    <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* <!-- Navbar --> */}
    <div className="w-full mt-2 mb-4">
      <div className="flex-none lg:hidden">
        <label htmlFor="side-menu-drawer" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      {/* <div className="flex-1 px-2 mx-2">Navbar Title</div> */}
      <div className="flex items-center justify-between">
        <div className='flex w-2/3'>
            <input type="search" placeholder="Ronaldo Rafael Royero Zuniga" className="input w-full bg-secondary" />
            <button className='btn btn-primary bg-primary border-0 mx-2 text-sm capitalize'>Show Result</button>
        </div>
        <div>
            <button className='btn btn-primary bg-primary border-0 mx-2 text-sm capitalize lg:w-28'>Login</button>
            <button className='btn btn-outline border-primary text-primary mx-2 text-sm capitalize lg:w-28'>Sign up</button>
        </div>
      </div>
    </div>
    {/* <!-- Page content here --> */}
    <HomeContent />
  </div>
</div>
  )
}

export default Navbar
