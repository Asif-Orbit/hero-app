import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import errorPage from '../../assets/error-404.png'
import { Link } from 'react-router';
import Footer from '../../Components/Footer/Footer';

const ErrorPage = () => {

    return (
        <div>
            <Navbar></Navbar>
            <div className='flex flex-col text-center items-center mt-10'>
                <img src={errorPage} alt="" />
                <h1 className='font-semibold text-5xl text-black mt-5 mb-5'>Oops, page not found!</h1>
                <p className='text-[#627382]'>The page you are looking for is not available.</p>

                <Link to="/"><button  className='btn mt-5 bg-gradient-to-r font-semibold text-[#FFFFFF] from-[#632EE3] to-[#9F62F2]'>Go Back</button></Link>

            </div>
            <Footer></Footer>

        </div>
    );
};

export default ErrorPage;