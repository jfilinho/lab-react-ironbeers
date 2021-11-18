import React from 'react'
import Home from './Home'


import RandomBeers from './RandomBeers';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewBeers from './NewBeers';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
     
    
   <Routes>
    <Route path="/" element={Home}/> 
    <Route path="/random-beer" element={RandomBeers}/> 
    <Route path="/new-beer" element={NewBeers}/> 
     </Routes> 
      <Home 
      
      />
     <RandomBeers/> 
      <NewBeers />
     
     </div> 
  );
}

export default App;
