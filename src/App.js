import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {
  const createTable = () => {
    let table = []
    for (let i = 2; i < 51; i++) {
        let children = []
        for (let j = 0; j < 5; j++) {
          if (j === 0) {
            children.push(<td>{i}</td>)
          }
          if (j === 4) {
            children.push(<td>{'some date'}</td>)
          }
          else {children.push(<td>{'Another'}</td>)}
        }
        {table.push(<tr>{children}</tr>)}
        
    }
    return table
  }
    const [songData, setSongData] = useState(0);

    const fetchThing = () => {
                    
    fetch('https://www.wolframcloud.com/obj/2294c525-06d7-4998-b671-a7d2d7059362?album=Bad')
    .then(response => response.json())
    .then(data => console.log(data))
    .then(data=>setSongData(data));  
    };
  return (
    
    <div className="App">
      <div className="card" style={{backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)"}}>
      </div>
      <div class="mx-auto" style={{width: "200px"}}>
        <form class="form-inline">
          <div class="form-group mx-sm-3 mb-2">
            <label for="inputLocation" class="sr-only">Location</label>
            <input type="location" class="form-control" id="location" placeholder="enter zip or city, state">
            </input>
          </div>
            <button type="submit" class="btn btn-primary mb-2" style={{margin: "auto"}} id="location">Go</button>
        </form>
      </div>
        <table style={{margin:'auto', color:'white'}}>

                <tr>
                  <td><b>#</b></td>
                  <td><b>Song</b></td>
                  <td><b>Artist</b></td>
                  <td><b>Album</b></td>
                  <td><b>Release Date</b></td>
                  <td><b>Time</b></td>
                </tr>

                <tr>
                <td>1</td>
                  <td><em>Bad</em></td>
                  <td>Michael Jackson</td>
                  <td><em>Bad</em></td>
                  {fetchThing()}
                  <td>Mon 31 Aug 1987</td>
                  <td>4:07</td>
                  </tr>

                  <tr>
                <td>2</td>
                  <td><em>Sandstorm</em></td>
                  <td>Darude</td>
                  <td><em>Sandstorm (The Remixes)</em></td>
                  {fetchThing()}
                  <td>1999</td>
                  <td>3:50</td>
                  </tr>  
                  {createTable()}
                </table>   
   
    </div>
  );
}

export default App;
