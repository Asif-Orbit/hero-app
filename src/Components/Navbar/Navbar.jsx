import React from 'react';
import logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router';
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    const links = <>
        <ul className="flex flex-col lg:flex-row ">
            <li>
                <NavLink to="/" className={({ isActive }) => isActive ? " font-semibold rounded-none border-b-2 border-[#9F62F2]  text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]" : "text-[#00000090] font-medium"}>
                    Home
                </NavLink>
            </li>

            <li>
                <NavLink to="/apps" className={({ isActive }) => isActive ? "font-semibold rounded-none border-b-2 border-[#9F62F2]  text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]" : "text-[#00000090] font-medium"}>
                    Apps
                </NavLink>
            </li>

            <li>
                <NavLink to="/installation" className={({ isActive }) => isActive ? " font-semibold rounded-none border-b-2 border-[#9F62F2]  text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]" : "text-[#00000090] font-medium"}>
                    Installation
                </NavLink>
            </li>
        </ul>

    </>
    return (
        <div className='bg-base-100 shadow-xs'>
            <div className="navbar  max-w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-25 p-2 font-medium shadow">
                            {links}
                        </ul>
                    </div>

                    {
                        <Link to='/'>
                            <div className='flex gap-1 justify-center items-center cursor-pointer'>
                                <img src={logo} alt="" className='w-10 h-10' />
                                <p className="  text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">HERO.IO</p>
                            </div></Link>
                    }
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-medium">
                        {
                            links

                        }


                    </ul>
                </div>
                <div className="navbar-end cursor-pointer">
                    {
                        <Link to="https://github.com/Asif-Orbit">
                            <p className="btn bg-gradient-to-r font-semibold text-[#FFFFFF] from-[#632EE3] to-[#9F62F2]"><FaGithub size={20} />Contribute</p>
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;