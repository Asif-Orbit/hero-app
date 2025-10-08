import React from 'react';
import demo1 from '../../assets/demo-app (1).webp'
import download from '../../assets/icon-downloads.png'
import rating from '../../assets/icon-ratings.png'
import review from '../../assets/icon-review.png'
import Rating from '../../Components/Rating/Rating';
import { useLoaderData, useParams } from 'react-router';

const AppsDetails = () => {
    const {id} = useParams();
    const appId = parseInt(id);
    const data = useLoaderData();
    const appDetail = data.find(d => d.id === appId);
    
    return (
        <div className='w-11/12 mx-auto'>
            
                <div className=" mt-20 ">
                    <div className="justify-start max-w-full hero-content flex-col lg:flex-row">
                        <img
                            src={demo1}
                            className=" w-[300px] rounded-lg shadow-2xl"
                        />
                        <div className='flex-1'>
                            <h1 className="text-4xl font-bold">{appDetail.title}</h1>
                            <p className='text-[#627382] text-xl pb-5'>Developed by <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2] font-semibold text-xl'>{appDetail.companyName}</span></p>
                            <div className='text-[#001931] flex gap-20 border-t-1 border-[#00193120] pt-5 pb-5'>
                                <div className='space-y-2'>
                                    <img src={download} alt="" />
                                    <p className='opacity-80'>Downloads</p>
                                    <h1 className='text-4xl font-extrabold'>{appDetail.downloads}</h1>
                                </div>
                                <div className='space-y-2'>
                                    <img src={rating} alt="" />
                                    <p className='opacity-80' >Average Ratings</p>
                                    <h1 className='text-4xl font-extrabold'>{appDetail.ratingAvg}</h1>
                                </div>
                                <div className='space-y-2'>
                                    <img src={review} alt="" />
                                    <p  className='opacity-80'>Total Reviews</p>
                                    <h1 className='text-4xl font-extrabold'>{appDetail.reviews}</h1>
                                </div>
                            </div>
                            <button className="btn bg-[#00D390] text-white">Install Now <span>({appDetail.size} MB)</span></button>
                        </div>
                    </div>
                </div>
            <Rating appDetail={appDetail}></Rating>
            <div>
                <h1 className='text-2xl text-[#001931] font-semibold border-t-1 border-[#00193120] mt-10 pt-10 mb-6'>Description</h1>
                <p className='text-xl text-[#627382]'>{appDetail.description}</p>
            </div>
           
        </div>
    );
};

export default AppsDetails;