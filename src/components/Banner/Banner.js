import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../images/banne1r.jpg';
import "./Banner.css";
const Banner = () => {
    return (
        <div className="banner" style={{ backgroundImage: `url(${bannerImg})`, backgroundSize: "cover" }}>
            <div className="bg-cover bg-center  h-auto text-white py-24 px-10 object-fill max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-12" >
                <div>
                    <div className="md:w-1/2">
                        <p className="text-7xl font-bold mb-10">Advace Dental Care Give You Smile Face</p>
                        
                        <Link to="/" className="bg-green-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">
                        Contact us</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;