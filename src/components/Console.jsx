import axios from "axios";
import React,{useEffect,useState} from "react";

function Console(props){
    const[consoleData,setConsoleData]=useState(null);
    useEffect(function(){
        axios.get(`http://csc225.mockable.io/consoles/${props.selectConsole}`).then(function(response){
            setConsoleData(response.data);
        })
    },[props.selectConsole])

    if(!consoleData){
        return (
            <div class="d-flex justify-content-center align-items-center vh-100">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        )
    }


    
    return (
        <div class="d-flex justify-content-center align-items-center vh-80">
        <div class="card" style={{width: '18rem'}}>
            <img class="img-fluid" src={consoleData.image}/>
            <div class="card-body">
                <p>Name:{consoleData.name}</p>
                <p>Price:{consoleData.price}</p>
                <p>country:{consoleData.country}</p>
                <p>releaseYear:{consoleData.releaseYear}</p>
            </div>
        </div>
        </div>
    )
}

export default Console;