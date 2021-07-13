import React from "react";
import Image from '../../bookcover.jpg';

const Jumbo = (props) => (
        <div>
            <img 
            style={{ height: 500, width:"100%", clear: "both"}} 
            className="img-fluid " src={Image} alt='cover'/>
        </div>
);

export default Jumbo;
