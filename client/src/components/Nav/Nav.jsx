import React from 'react';
import { Link } from 'react-router-dom';


export default function Nav() {
  return (
        <div className= 'search'>
                <p>Search</p>
                    <Link to='/newtab'><i class="fa fa-pencil-square-o" aria-hidden="true"></i></Link>
        </div>
        <div className= 'saved'>
                <p>Saved</p>
                <Link to='/newtab'><i class="fa fa-pencil-square-o" aria-hidden="true"></i></Link>
                <i class="fa fa-sign-out" aria-hidden="true" ></i>
        </div>
  )
}
