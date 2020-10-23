import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
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
      <table class="center-list">
    <tr>
        <th>#</th>
        <th>Title</th>
        <th>Artist</th>
        <th>Time</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Sandstorm</td>
        <td>Darude</td>
        <td>3:50</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Some song</td>
        <td>Another artist</td>
        <td>59:59</td>
    </tr>
    </table>
    </div>
  );
}

export default App;
