import React from 'react';
import './style.css'
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className='header'>
            <div className='header-wrapper'>
                <div className="left">
                    <div className='logo'> 
                    <Link to="/">Google Books Search..</Link>
                    </div>
                </div>
                <div className="right">
                    <Nav/>
                </div>   
            </div>
        </div>
    )
}