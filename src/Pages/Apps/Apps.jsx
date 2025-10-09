import React, { Suspense, use } from 'react';
import AppData from '../../Components/AppData/AppData';
import { ImSearch } from 'react-icons/im';




const AppsDataPromise = fetch("/allData.json").then(res => res.json())
const Apps = () => {
    const data = use(AppsDataPromise)


    return (
        <div className='w-11/12 mx-auto'>
            <div className='text-center mt-10'>
                <h1 className='font-bold text-5xl text-[#001931]'>Trending Apps</h1>
                <p className='text-[#627382] text-xl mb-10 mt-4'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex flex-col md:flex-row  justify-between items-center mb-5'>
                <p className='text-2xl font-semibold text-[#001931] mb-4 md:mb-0'><span>({data.length})</span>Apps Found</p>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search" />
                </label>
            </div>

            <Suspense fallback={<div className='w-11/12 mx-auto text-center mt-10'><span className="loading loading-spinner loading-xl"></span></div>}>
                <AppData AppsDataPromise={AppsDataPromise}></AppData>
            </Suspense>




        </div>
    );
};

export default Apps;