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
  const [finalData, setFinalData] = useState([]);

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

  // combining the two API's
  useEffect(() => {
    if (peopleData.length > 0 && planetData.length > 0) {
      const peopleWithPlanets = peopleData.map(person => {
        const planet = planetData.find(planet => person.homeworld === planet.id);
        const planetNames = planet ? planet.name : 'unknown';
        return { ...person, homeworld: planetNames };
      })
      setFinalData(peopleWithPlanets);
    }
  }, [peopleData, planetData]);

  // returning JSX 
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */  
        finalData.map((person) => {
        return (
            <Character key={person.id} person={person} />
        )
      })}
    
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
