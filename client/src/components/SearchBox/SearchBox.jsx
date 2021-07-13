import React from "react";

// This file exports the Input search box and FormBtn components

export function SearchBox(props) {
  return (
    <div className="form-group">
      <input type="search" className="form-control" {...props} />
    </div>
  );
}

export function SearchBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}

// import React from 'react';
// import styled from 'styled-components';
// // import './style.css';


// const Input = styled.input`
//     width: 90%;
//     height: 42px;
//     outline: none;
//     margin: 10px ;
//     border: 1px solid rgba(200, 200, 200, 0.3);
//     padding:10px;
//     border-radius: 9px;
//     border-bottom: 1.4px solid #0000001f;
//     transition: all 200ms ease-in-out;
//     font-size: 12px;

//     &::placeholder {
//         color: rgba(200, 200, 200, 1);
//     }

//     &:not(:last-of-type) {
//         border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
//     }
    
//     &:focus {
//         outline: none;
//         border-bottom: 2px solid rgb(42, 157, 143);
//     }
// `;
// const Span = styled.span`
//     font-size: 16px;
// `;

// export default function SearchBox({handleChange, handleSubmit}) {
//     return (
//         <div className='searchBox'>
//             <Input onChange={handleChange}
//               onSubmit={handleSubmit}
//               name="title" type='text' placeholder='Search for a Book..'/>
//             <Span onClick={handleSubmit} >
//                 search
//             </Span>
//             {/* class="material-icons" */}
//         </div>
//     )
// };