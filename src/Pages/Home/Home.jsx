import React, { Suspense } from 'react';
import Banner from '../../Components/Banner/Banner';
import Review from '../../Components/Review/Review';
import HomeApps from '../../Components/HomeApps/HomeApps';
const homeAppsDataPromise = fetch('/firstEightData.json').then(res => res.json())

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Review></Review>
            <div className='mt-20 text-center max-w-11/12 mx-auto'>
                <h1 className='font-bold text-5xl text-[#001931]'>Trending Apps</h1>
                <p className='text-[#627382] text-xl mb-10 mt-4'>Explore All Trending Apps on the Market developed by us</p>
          
                <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
                    <HomeApps homeAppsDataPromise={homeAppsDataPromise}></HomeApps>
                </Suspense>
            
            </div>
        </div>
    );
};

export default Home;