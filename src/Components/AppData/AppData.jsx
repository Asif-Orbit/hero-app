import React, { use } from 'react';
import download from '../../assets/icon-downloads.png'
import rating from '../../assets/icon-ratings.png'
import demo1 from '../../assets/demo-app (1).webp'
const AppData = ({ AppsDataPromise }) => {
    const AppsData = use(AppsDataPromise)
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            
            {
                AppsData.map(data => {
                    return (
                        <div className="card bg-base-100 p-4 shadow-sm" key={data.id}>
                            <img
                                src={demo1}
                                alt="Apps Logo"
                                className="rounded-xl object-fill mx-auto" />
                            <div className='font-medium text-xl text-[#001931] mt-4 text-start'>
                                <p>{data.title}</p>
                            </div>
                            <div className='flex justify-between items-center mt-4'>
                                <div className='text-[#00D390] bg-[#F1F5E8] rounded-xl flex gap-1 items-center font-medium py-2 px-4 '>
                                    <img src={download} alt="" className='w-4' /> <span>{data.downloads}</span>
                                </div>
                                <div className='text-[#FF8811] bg-[#FFF0E1] flex gap-1 items-center font-medium py-2 px-4 rounded-xl'>
                                    <img src={rating} alt="" className='w-4' /> <span>{data.ratingAvg}</span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
        </div>
    );
};

export default AppData;