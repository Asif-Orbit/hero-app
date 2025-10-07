import React, { use } from 'react';
import HomeApp from '../HomeApp/HomeApp';
import { Link } from 'react-router';

const HomeApps = ({homeAppsDataPromise}) => {
    const homeAppsData = use(homeAppsDataPromise)
    console.log(homeAppsData)
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center'>
            
            {
                homeAppsData.map(appInfo => <HomeApp key={appInfo.id} appInfo={appInfo}></HomeApp>)
            }
           
        </div>
                {
                <Link to="/"><button className='btn rounded-[8px] px-10 my-5 bg-gradient-to-r font-semibold text-[#FFFFFF] from-[#632EE3] to-[#9F62F2]'>Show All</button></Link>
            }
           
        </div>
    );
};

export default HomeApps;