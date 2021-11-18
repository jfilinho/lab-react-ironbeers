import React from 'react';
import { Link } from 'react-router-dom';
import image from "../assets/beers.png"
import image1 from "../assets/random-beer.png"
import image2 from "../assets/new-beer.png"
import RandomBeers from './RandomBeers';
import NewBeers from './NewBeers';

import { useState, useEffect} from 'react';


function Home(props){
const [beers, setBeers] = useState([])

useEffect(() => {
    if(beers !== []){
        setBeers(`https://ih-beers-api2.herokuapp.com/beersstart=${beers.image_url}&end=${beers.name}&currency=${beers.contributed_by}`)
    }
    
    return () => {
        
    }
}, [setBeers])
    return(
      <div>
            <div className=" d-flex justify-content-star">
               
            </div>
         
         
         
          <div>
            <img src={image}/>
           <h1>All Beers</h1>
                <p className="w-50 align-text-justify mt-4">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a type 
                 specimen book. It has survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. </p>
            </div>
          <div className="mt-4">
            <img src={image1} />
          <h1>Random Beers</h1>
                <p className="w-50 align-text-justify">It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </div>
          <div>
            <img src={image2} />
                <h1> New Beers</h1>
                <p className="w-50 align-text-justify">It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </div>
     
       
      
    </div>
 )   
}
export default Home;   


