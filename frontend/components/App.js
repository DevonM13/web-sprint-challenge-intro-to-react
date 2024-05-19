import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state

  // creating state
  const [peopleData, setPeopleData] = useState([]);
  const [planetData, setPlanetData] = useState([]);

  // fetching the API 
  useEffect(() => {
    function getAPI() {
      const peopleAPI = axios.get(urlPeople)
      .then(res => {
        // console.log(res);
        setPeopleData(res.data);
      })
      .catch(err => {
        console.err(err);
      })
      const planetAPI = axios.get(urlPlanets)
      .then(res => {
        // console.log(res.data);
        setPlanetData(res.data);
      })
      .catch(err => {
        console.err(err)
      })
    }
    getAPI();
    
  }, []);
  // returning JSX 
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */  
        peopleData.map((person) => {
        return (
            <Character peopleData={person} planetData={planetData}/>
        )
      })}
    
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
