import React,{useEffect, useState} from 'react';
import axios from "axios";
import Console from "./Console";

function Consoles(){

    const [consoles,setConsoles]=useState([]);
    const [selectConsole,setSelectConsole]=useState(null);

    function getAllConsoles(){
        axios.get("http://csc225.mockable.io/consoles").then(function (response){
            setConsoles(response.data);
        });
    }
    useEffect(function(){
        getAllConsoles();
    },[])
    if(selectConsole){
        return (
            <div>
                <Console selectConsole={selectConsole}/>
                <div class="d-flex justify-content-center">
                <button class="btn btn-secondary mt-3" onClick={()=>setSelectConsole(null)}>Reset</button>
                </div>
            </div>
        )
    }
    if(consoles.length===0){
        return (
            <div class="d-flex justify-content-center align-items-center vh-100">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        )
    }
    return(
       <div>
           
           {consoles.map(function (console){
               return(
                   <div class="text-center mt-5" key={console.id}>
                       <img class="img-thumbnail" src={console.image}/>
                       <p><button class="btn btn-primary mt-3" onClick={()=>setSelectConsole(console.id)}>
                           {console.name}
                       </button></p>
                   </div>
               )
           })}
       </div>
    )
}

export default Consoles;