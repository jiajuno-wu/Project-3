import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Consoles from './components/Consoles';
import Header from './components/Header';

function App() {
  return (
    <div className="pt-4">
    <Header/> 
    <h1 class="mt-5 text-center">Welcome to My site, here is the information for each consoles </h1>
    <Consoles/>
     
    </div>
  );
}

export default App;
