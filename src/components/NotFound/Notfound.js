import React from 'react';
import "./NotFound.css"
import errorImg from '../../images/404.jpg';


const Notfound = () => {
    return (
        <div className="banner-error" style={{ backgroundImage: `url(${errorImg})`, backgroundSize: "cover" }}>
            
            
        </div>
    );
};

export default Notfound;