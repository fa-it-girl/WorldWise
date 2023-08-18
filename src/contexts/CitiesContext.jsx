import { createContext } from "react";
import { useContext } from 'react';
import { useEffect, useState } from "react"
import PropTypes from 'prop-types';

const CitiesContext = createContext()

const CitiesProvider=({children})=>{
  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [currentCity, setCurrentCity] = useState({})


useEffect(() => {
  async function fetchData() {
    try {
      setIsLoading(true)
      const response = await fetch('http://localhost:9000/cities');

      if (!response.ok) {
        throw new Error('There was a problem fetching the data.');
      }

      const data = await response.json();
      console.log(data);
      setCities(data);
      setIsLoading(false)
    } catch (error) {
      alert('An error occurred: ' + error.message);
    }
  }
  fetchData();
}, []);


const  getCities =async (id) => {
    try {
      setIsLoading(true)
      const response = await fetch(`http://localhost:9000/cities/${id}`);

      if (!response.ok) {
        throw new Error('There was a problem fetching the data.');
      }

      const data = await response.json();
      console.log(data);
      setCurrentCity(data);
      setIsLoading(false)
    } catch (error) {
      alert('An error occurred: ' + error.message);
    }

}

return(
  <CitiesContext.Provider value ={{cities, isLoading, currentCity, getCities}}>{children}</CitiesContext.Provider>
)
}

const useCities=() => {
  const context = useContext(CitiesContext)
  if (context === undefined) throw new Error('undefined')
  return context;
}


CitiesProvider.propTypes = {
  children: PropTypes.node.isRequired,}



export {CitiesProvider, useCities};
