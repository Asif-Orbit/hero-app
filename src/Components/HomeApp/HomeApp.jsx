import React from 'react';
import download from '../../assets/icon-downloads.png'
import rating from '../../assets/icon-ratings.png'
import { Link } from 'react-router';

const HomeApp = ({appInfo}) => {
    return (
        <Link to={`/apps/details/${appInfo.id}`}>
        <div className="card bg-base-100 p-4 shadow-sm">
    <img
      src={appInfo.image}
      alt="Apps Logo"
      className="rounded-xl object-fill mx-auto" />
  <div className='font-medium text-xl text-[#001931] mt-4 text-start'>
    <p>{appInfo.title}</p>
  </div>
    <div className='flex justify-between items-center mt-4'>
        <div className='text-[#00D390] bg-[#F1F5E8] rounded-xl flex gap-1 items-center font-medium py-2 px-4 '>
            <img src={download} alt="" className='w-4'/> <span>{appInfo.downloads}</span>
        </div>
        <div className='text-[#FF8811] bg-[#FFF0E1] flex gap-1 items-center font-medium py-2 px-4 rounded-xl'>
            <img src={rating} alt=""  className='w-4'/> <span>{appInfo.ratingAvg}</span>
        </div>
    </div>
  </div>
        </Link>
)};

export default HomeApp;