import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Pricing from "./pages/Pricing"
import Product from "./pages/Product"
import PageNotFound from "./pages/PageNotFound"
import CountryItem from "./components/CountryItem"
import AppLayout from "./pages/AppLayout"
import Login from "./pages/Login"
import { useEffect, useState } from "react"
import CityItem from "./components/CityItem"

function App() {
 const [cities, setCities] = useState([])
//  const [countries, setCountries] = useState({})
const [isLoading, setIsLoading] = useState(false)

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




  return (
    <>

     <BrowserRouter >

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="pricing" element={<Pricing />}/>
        <Route path="product" element={<Product />}/>
        <Route path="app" element={<AppLayout />}>
          <Route index element={<CityItem cities={cities} isLoading={isLoading}/>} />
          <Route path="cities" element={<CityItem cities={cities} isLoading={isLoading}/>} />
          <Route path="countries" element={<CountryItem  cities={cities} isLoading={isLoading} />}  />
        </Route>
        <Route path="*" element={<PageNotFound />}/>
        <Route path="login" element={<Login />}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
