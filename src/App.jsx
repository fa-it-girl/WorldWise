import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Pricing from "./pages/Pricing"
import Product from "./pages/Product"
import PageNotFound from "./pages/PageNotFound"
import City from './components/City'
import Country from './components/Country'
import AppLayout from "./pages/AppLayout"
import Login from "./pages/Login"
import { useEffect, useState } from "react"

function App() {
 const [cities, setCities] = useState({})
//  const [countries, setCountries] = useState({})
// const [isLoading, setIsLoading] = useState(false)

useEffect(() => {
  async function fetchData() {
    try {
      const response = await fetch('http://localhost:9000/cities');

      if (!response.ok) {
        throw new Error('There was a problem fetching the data.');
      }

      const data = await response.json();
      console.log(data);
      console.log(cities)
      setCities(data);
    } catch (error) {
      alert('An error occurred: ' + error.message);
    }
  }
  fetchData();
}, []);




  return (
    <>

     <BrowserRouter >

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="pricing" element={<Pricing />}/>
        <Route path="product" element={<Product />}/>
        <Route path="app" element={<AppLayout />} >
          <Route path="cities" element={<City />} />
          <Route path="countries" element={<Country />} />
        </Route>
        <Route path="*" element={<PageNotFound />}/>
        <Route path="login" element={<Login />}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
