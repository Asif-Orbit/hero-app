import React from 'react';
import playStore from '../../assets/Play_store.png'
import appStore from '../../assets/App_store.png'
import hero from '../../assets/hero.png'
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className='max-w-11/12 mx-auto'>
            <div className='text-5xl md:text-6xl lg:text-7xl text-[#001931] font-bold text-center mt-10 md:mt-20'>
                <h1>We Build</h1>
                <h1><span className=' font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>Productive</span> Apps</h1>
            </div>
            <div className='text-center text-xl text-[#627382] mt-4'><p>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p></div>
            <div className='flex justify-center items-center gap-2 md:gap-4 mt-10'>
                <Link to="https://play.google.com/store/games?hl=en_US">
                <div className='flex gap-2 md:text-xl font-semibold text-[#001931] bg-[#FFFFFF] md:py-3 md:px-6 py-2 px-4 border-1 border-[#D2D2D2] rounded-xl'><img src={playStore} alt="" /><button>Play Store</button></div>
                </Link>
                <Link to="https://www.apple.com/app-store/">

                <div className='flex gap-2 md:text-xl font-semibold text-[#001931] bg-[#FFFFFF] md:py-3 md:px-6 py-2 px-4 border-1 border-[#D2D2D2] rounded-xl'><img src={appStore} alt="" /><button> App Store</button></div>
                </Link>
            </div>
            <div className='flex justify-center mt-10'>
                <img src={hero} alt="" />
            </div>

        </div>
    );
};

export default Banner;