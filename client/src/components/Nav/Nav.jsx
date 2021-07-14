import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Nav() {
  return (
    <div className='navbar-items'>
            <Link className='link' to='/'><p className='search'>Search</p></Link>
            <Link className='link' to='/savedbooks'><p className='saved'>Saved</p></Link>
    </div>  
  )
}
