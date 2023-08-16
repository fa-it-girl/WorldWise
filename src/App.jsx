import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Pricing from "./pages/Pricing"
import Product from "./pages/Product"
import PageNotFound from "./pages/PageNotFound"
import CountryItem from "./components/CountryItem"
import AppLayout from "./pages/AppLayout"
import Login from "./pages/Login"

import CityItem from "./components/CityItem"
import CityDescription from "./components/CityDescription"
import Form from "./components/Form"
import { CitiesProvider } from "./contexts/CitiesContext"

function App() {
//  const [cities, setCities] = useState([])
// //  const [countries, setCountries] = useState({})
// const [isLoading, setIsLoading] = useState(false)

// useEffect(() => {
//   async function fetchData() {
//     try {
//       setIsLoading(true)
//       const response = await fetch('http://localhost:9000/cities');

//       if (!response.ok) {
//         throw new Error('There was a problem fetching the data.');
//       }

//       const data = await response.json();
//       console.log(data);
//       setCities(data);
//       setIsLoading(false)
//     } catch (error) {
//       alert('An error occurred: ' + error.message);
//     }
//   }
//   fetchData();
// }, []);




  return (
    <>
    <CitiesProvider>
     <BrowserRouter >

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="pricing" element={<Pricing />}/>
        <Route path="product" element={<Product />}/>
        <Route path="app" element={<AppLayout />}>
          <Route index element={<CityItem />} />
          <Route path="cities" element={<CityItem />} />
          <Route path='cities/:id' element={<CityDescription />}/>
          <Route path='form' element={<Form />}/>
          <Route path="countries" element={<CountryItem />}  />
        </Route>
        <Route path="*" element={<PageNotFound />}/>
        <Route path="login" element={<Login />}/>
      </Routes>
     </BrowserRouter>

     </CitiesProvider>
    </>
  )
}

export default App
