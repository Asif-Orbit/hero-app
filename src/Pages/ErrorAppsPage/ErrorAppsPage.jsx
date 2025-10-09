import React from 'react';
import errorPage from '../../assets/App-Error.png'
import { Link } from 'react-router';
const ErrorAppsPage = () => {
   const handleBack=()=> {
    window.location.reload()
   }
    return (
        <div>
            <div className='flex flex-col text-center items-center mt-10'>
                <img src={errorPage} alt="" />
                <h1 className='font-semibold text-5xl text-black mt-5 mb-5'>OPPS!! APP NOT FOUND</h1>
                <p className='text-[#627382]'>The App you are requesting is not found on our system.  please try another apps</p>

                <Link to="/Apps"><button onClick={handleBack} className='btn mt-5 bg-gradient-to-r font-semibold text-[#FFFFFF] from-[#632EE3] to-[#9F62F2]'>Go Back</button></Link>

            </div>
        </div>
         
    );
};

export default ErrorAppsPage;