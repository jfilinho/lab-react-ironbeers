import React from "react"
import { IconName } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaBeer, FaHome } from 'react-icons/fa';


function RandomBeers(){
return (
   
  <Link to="/home" >
   <header className='h1 mt-0 bg-primary fixed-top p-2'>
            <h2 className=" d-flex justify-content-center"> <FaHome className="bg-white" /> </h2>
    </header>
</Link>
) 
   

}

export default RandomBeers;