import React, { use, useEffect, useState } from 'react';
import download from '../../assets/icon-downloads.png'
import rating from '../../assets/icon-ratings.png'
import { getStoredData } from '../AddToDB/AddToDB';
const appsDataPromise = fetch('/allData.json').then(res => res.json())


const InstalledAppData = () => {
    const appsData = use(appsDataPromise)
    const [installApps, setInstallApps] = useState([])
    useEffect(() => {
        const storedAppsData = getStoredData()
        const convertedStoredAppsData = storedAppsData.map(id => parseInt(id))
        const installedData = appsData.filter(data => convertedStoredAppsData.includes(data.id))
        setInstallApps(installedData)
    }, [])
    
    return (
        <div className='w-11/12 mx-auto mt-10'>
            <div className='text-center mb-10'>
                <h1 className='font-bold text-5xl text-[#001931]'>Your Installed Apps</h1>
                <p className='text-[#627382] text-xl mb-10 mt-4'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            {installApps.map(app => {
                return (

                    <div className='flex justify-between items-center bg-white p-4 rounded-xl mt-5' key={app.id}>
                        <div className='flex gap-3 items-center'>
                            <div className='w-14 h-14 md:w-20 md:h-20'><img src={app.image} alt="" className='rounded-xl' /></div>
                            <div>
                                <div><h2 className='text-[16px] md:text-xl font-medium text-[#001931] mb-3'>{app.title}</h2></div>
                                <div className='flex  gap-4 text-xs md:text-[16px] font-medium'>
                                    <p className='flex flex-col md:flex-row gap-1 items-center text-[#00D390]'><img src={download} alt="" className='w-4 h-4' /> <span>{app.downloads}</span></p>
                                    <p className='flex flex-col md:flex-row gap-1 items-center text-[#FF8811]'><img src={rating} alt="" className='w-4 h-4' />{app.ratingAvg}</p>
                                    <p className='text-[#627382]'><span>{app.size}</span> MB</p>
                                </div>
                            </div>
                        </div>
                        <div><button className=" btn bg-[#00D390] text-white">Uninstall</button></div>
                    </div>

                )
            })}
        </div>
    );
};

export default InstalledAppData;