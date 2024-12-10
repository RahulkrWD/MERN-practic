import React from "react";
function Navbar(){
    return (

        <div className="navbar">
        <div className="">
        <h3>BookTKT</h3>
        <input placeholder="Movie, series, standup show." />
        </div>
        <div>
        <h5>Location</h5>
       <button  className="btn text-bg-danger">Sign In</button>
       <h5>lcons</h5>

        </div>
        </div>
    )
}

export default Navbar;
