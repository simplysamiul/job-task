import React from 'react'
import Navbar from '../Navbar/Navbar'
import menuLogo from '../../../assets/logo.png';
import vector from "../../../assets/Vector.png";
import diagram from "../../../assets/diagram.png";
import profile2user from "../../../assets/profile-2user.png";
import personalcard from "../../../assets/personalcard.png";
import usersearch from "../../../assets/user-search.png";
import useradd from "../../../assets/user-add.png";
import foldercloud from "../../../assets/folder-cloud.png";
import people from "../../../assets/people.png";

const Sidear = () => {
  return (
    <div className="drawer drawer-mobile">
        <input id="side-menu-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
            {/* <!-- Page content here --> */}
              <div className='h-auto'>
                <Navbar  />
              </div>
        </div> 
        <div className="drawer-side">
            <label htmlFor="side-menu-drawer" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <img className='mb-8 w-11/12 text-center' src={menuLogo} alt="logo..!" />
          <li className='flex flex-row items-center text-white bg-primary rounded-md font-semibold my-2 cursor-pointer'>
            <img src={vector} alt="" /> <a>Name</a>
          </li>
          <li className='flex flex-row items-center text-textPrimary rounded-md font-semibold my-2 cursor-pointer'>
            <img src={diagram} alt="" /> <a>Metric</a>
          </li>
          <li className='flex flex-row items-center text-textPrimary rounded-md font-semibold my-2 cursor-pointer'>
            <img src={profile2user} alt="" /> <a>Create Team</a>
          </li>
          <li className='flex flex-row items-center text-textPrimary rounded-md font-semibold my-2 cursor-pointer'>
            <img src={personalcard} alt="" /> <a>Player Market</a>
          </li>
          <li className='flex flex-row items-center text-textPrimary rounded-md font-semibold my-2 cursor-pointer'>
            <img src={usersearch} alt="" /> <a>Player Comparison</a>
          </li>
          <li className='flex flex-row items-center text-textPrimary rounded-md font-semibold my-2 cursor-pointer'>
            <img src={useradd} alt="" /> <a>Similar Player</a>
          </li>
          <li className='flex flex-row items-center text-textPrimary rounded-md font-semibold my-2 cursor-pointer'>
            <img src={foldercloud} alt="" /> <a>GK Search</a>
          </li>
          <li className='flex flex-row items-center text-textPrimary rounded-md font-semibold my-2 cursor-pointer'>
            <img src={people} alt="" /> <a>Team Plot</a>
          </li>
            </ul>
        
        </div>
    </div>
  )
}

export default Sidear
