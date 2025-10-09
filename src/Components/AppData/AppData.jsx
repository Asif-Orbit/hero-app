import React from 'react';
import download from '../../assets/icon-downloads.png'
import rating from '../../assets/icon-ratings.png'
import { Link } from 'react-router';
import ErrorAppsPage from '../../Pages/errorAppsPage/errorAppsPage';
const AppData = ({ filteredApps }) => {
    
    
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            
            {
                filteredApps.length > 0 ? filteredApps.map(data => {
                    return (
                        <Link to={`/apps/details/${data.id}`} key={data.id}>
                        <div className="card bg-base-100 p-4 shadow-sm" >
                            <img
                                src={data.image}
                                alt="Apps Logo"
                                className="rounded-xl h-full object-fill mx-auto" />
                            <div className='font-medium text-xl text-[#001931] mt-4 text-start'>
                                <p>{data.title}</p>
                            </div>
                            <div className='flex justify-between items-center mt-4'>
                                <div className='text-[#00D390] bg-[#F1F5E8] rounded-xl flex gap-1 items-center font-medium py-2 px-4 '>
                                    <img src={download} alt="" className='w-4' /> <span>{data.downloads}M</span>
                                </div>
                                <div className='text-[#FF8811] bg-[#FFF0E1] flex gap-1 items-center font-medium py-2 px-4 rounded-xl'>
                                    <img src={rating} alt="" className='w-4' /> <span>{data.ratingAvg}</span>
                                </div>
                            </div>
                        </div>
                        </Link>
                    )
                }): <div className='gird col-span-full'><ErrorAppsPage></ErrorAppsPage></div>
                 
            }

        </div>
        </div>
    );
};

export default AppData;