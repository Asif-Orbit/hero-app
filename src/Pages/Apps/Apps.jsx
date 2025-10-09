import React, { Suspense, use, useEffect, useState } from 'react';
import AppData from '../../Components/AppData/AppData';




const AppsDataPromise = fetch("/allData.json").then(res => res.json())
const Apps = () => {
    const data = use(AppsDataPromise)
    const [search, setSearch] = useState("")
    const [filteredApps, setFilteredApps] = useState(data);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        const timer = setTimeout(() => {

            const filteredApps = data.filter((app) =>
                app.title.toLowerCase().includes(search.toLowerCase()))
            setFilteredApps(filteredApps)
            setLoading(false)
        }, 200);



        return () => clearTimeout(timer)
    }, [search])


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
                    <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} required placeholder="Search" />
                </label>
            </div>

            {
                loading ? <div className='w-11/12 mx-auto text-center'><span className="loading loading-bars loading-xl"></span>
                </div>
                    : <Suspense fallback={<div className='w-11/12 mx-auto text-center mt-10'><span className="loading loading-spinner loading-xl"></span></div>}>
                        <AppData AppsDataPromise={AppsDataPromise} filteredApps={filteredApps}></AppData>
                    </Suspense>
            }




        </div>
    );
};

export default Apps;