import React from 'react';
import './style.css'
import Nav from '../Nav/Nav';

export default function Header() {
    return (
        <div className='header'>
            <div className='header-wrapper'>
                <div className="left">
                    <div className='logo'> 
                        <a href='#home'>Google Books Search..</a>    
                    </div>
                </div>
                    <div className="right">
                        <Nav/>
                </div>   
            </div>
        </div>
    )
}
// import React, { useState, useEffect } from 'react';
// import { SliderData } from '../Demo'
// import Navbar from '../Navbar/Navbar';
// import './style.css';
// import API from '../../utils/API';
// //import image from '../../../public/logo.png';


// export default function Header({loggedIn}) {
//     const [user, setUser] = useState([]);

//     useEffect(() => {
//         API.userInfo()
//             .then(res => {
//                 if(res) {
//                     const data = res.data;
//                     setUser(data);
//                     console.log(data)
//                  } 
               
//             })
//             .catch(err => console.log(err));
//     }, []);

   
//     return (

//         !loggedIn ? (
//         <div className='header'>
//             <div className='header-wrapper'>
//                 <div className='logo'> {/* changed from class to className  */} 
//                     <a href='#home'>Name of the app.</a>
//                     {/* <img src={image} height={100} width={100} /> */}
//                 </div>
//             </div>
//         </div>) : 
//                (<div className='header'>
//                <div className='header-wrapper'>
//                    <div className='logo'> {/* changed from class to className  */} 
//                        <a href='#home'>Name of the app.</a>
//                        {/* <img src={image} height={100} width={100} /> */}
//                    </div>
//                </div>
//                <Navbar tabs={SliderData}/>
//            </div>)
//     )
// }

