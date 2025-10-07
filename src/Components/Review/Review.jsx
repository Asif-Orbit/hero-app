import React from 'react';

const Review = () => {
    return (
        <div className='text-[#FFFFFF] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-center'>
            <h1 className='text-3xl md:text-5xl font-bold pt-20 mb-10 md:mb-20'>Trusted by Millions, Built for You</h1>
            <div className='flex flex-col md:flex-row justify-center gap-10 md:gap-24 lg:gap-36 pb-20'>
                <div>
                    <p className='text-xs'>Total Downloads</p>
                    <h1 className='text-6xl font-extrabold'>29.6M</h1>
                    <p className='text-xs'>21% more than last month</p>
                </div>
                <div>
                    <p className='text-xs'>Total Reviews</p>
                    <h1 className='text-6xl font-extrabold'>906K</h1>
                    <p className='text-xs'>46% more than last month</p>
                </div>
                <div>
                    <p className='text-xs'>Active Apps</p>
                    <h1 className='text-6xl font-extrabold'>132+</h1>
                    <p className='text-xs'>31 more will Launch</p>
                </div>
            </div>
        </div>
    );
};

export default Review;