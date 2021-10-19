import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png"
import useAuth from '../../hooks/useAuth';

export default function Navbar({ fixed }) {
    const { user,logOut } = useAuth();
    console.log(user);
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-green-700">
                        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                            <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">

                                <Link to="/" className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white text-3xl">
                                    {/* <img src={logo} alt="" /> */}
                                    SMILE
                                </Link>
                                <button
                                    className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                                    type="button"
                                    onClick={() => setMenuOpen(!menuOpen)}
                                >
                                    <TiThMenu />
                                </button>
                            </div>
                            <div
                                className={
                                    "lg:flex flex-grow items-center" +
                                    (menuOpen ? " flex" : " hidden")
                                }
                                id="example-navbar-info"
                            >
                                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                                    <li className="nav-item">
                                        <Link to="/" className="px-3 py-4 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="apointment" className="px-3 py-4 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">apointment</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/privacypolicy" className="px-3 py-4 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">PrivacyPolicy</Link>
                                    </li>
                                    <li className="nav-item">
                                        <span className="px-3 py-4 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">{user.displayName}</span>
                                    </li>
                                    {user.email? <li className="nav-item">
                                    <Link onClick={logOut} to="/login" className="bg-white text-black active:bg-white font-bold uppercase text-base px-3 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150" type="button">Logout</Link>
                                    </li>
                                    :
                                    <li className="nav-item">
                                        
                                        <Link to="/login" className="bg-white text-black active:bg-white font-bold uppercase text-base px-3 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150" type="button">Login</Link>
                                    </li>}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}