import React, { use, useEffect, useState } from 'react';
import download from '../../assets/icon-downloads.png'
import rating from '../../assets/icon-ratings.png'
import { getStoredData, removeAppData } from '../AddToDB/AddToDB';
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


    const handleUninstall = (id) => {
        const appId = installApps.map(data => data.id)
        const uninstallData = appId.filter(dataId => dataId !== id)
        setInstallApps(uninstallData)
        removeAppData(id)
        window.location.reload()
    }
const [sort,setSort]=useState("")
const handleSort = (type) =>{
    setSort(type)
    if(type === "Size (Low to High)"){
        const sortedBySize = [...installApps].sort((a,b)=> a.size -b.size)
        setInstallApps(sortedBySize)
    }
    if(type === "Size (High to Low)"){
        const sortedBySize = [...installApps].sort((a,b)=> b.size - a.size)
        setInstallApps(sortedBySize)
    }
    if(type === "Ratings (Low to High)"){
        const sortedByRatings = [...installApps].sort((a,b)=> a.ratingAvg - b.ratingAvg)
        setInstallApps(sortedByRatings)
    }
    if(type === "Ratings (High to low)"){
        const sortedByRatings = [...installApps].sort((a,b)=> b.ratingAvg - a.ratingAvg)
        setInstallApps(sortedByRatings)
    }
}

    return (
        <div className='w-11/12 mx-auto mt-10 min-h-100'>
            <div className='text-center mb-10'>
                <h1 className='font-bold text-5xl text-[#001931]'>Your Installed Apps</h1>
                <p className='text-[#627382] text-xl mb-10 mt-4'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex flex-col md:flex-row  justify-between items-center mb-5'>
                <p className='text-2xl font-semibold text-[#001931] mb-4 md:mb-0'><span>({installApps.length})</span>Apps Found</p>
                <details className="dropdown">
                    <summary className="btn m-1">Sort by : {sort}</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={()=>handleSort("Size (Low to High)")}><a>Size (Low to High)</a></li>
                        <li onClick={()=>handleSort("Size (High to Low)")}><a>Size (High to low)</a></li>
                        <li onClick={()=>handleSort("Ratings (Low to High)")}><a>Ratings (Low to High)</a></li>
                        <li onClick={()=>handleSort("Ratings (High to low)")}><a>Ratings (High to low)</a></li>
                    </ul>
                </details>
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
                        <div><button onClick={() => handleUninstall(app.id)} className=" btn bg-[#00D390] text-white">Uninstall</button></div>
                    </div>

                )
            })}
        </div>
    );
};

export default InstalledAppData;