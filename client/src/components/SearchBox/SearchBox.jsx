import React from "react";

export function SearchBox(props) {
  return (
    <div className="form-group">
      <input type="search" className="form-control" {...props} />
    </div>
  );
}

export function SearchBtn(props) {
  return (
    <button {...props} style={{ marginBottom: 10 }} className="btn btn-outline-success btn-block ">
      {props.children}
    </button>
  );
}