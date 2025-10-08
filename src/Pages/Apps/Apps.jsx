import React, { Suspense, use} from 'react';
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
                <search className='border-1 border-[#D2D2D2] text-[#627382] flex justify-center items-center py-2 px-3 rounded-xl'><ImSearch/> <input type="search" name="search" placeholder='Search Apps' id="" /></search>
            </div>
              
                <Suspense fallback={<div className='w-11/12 mx-auto text-center mt-10'><span className="loading loading-spinner loading-xl"></span></div>}>
                <AppData AppsDataPromise={AppsDataPromise}></AppData> 
              </Suspense>
              
                
            
            
        </div>
    );
};

export default Apps;