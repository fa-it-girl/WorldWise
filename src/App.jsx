// import { BrowserRouter, Route, Routes } from "react-router-dom"
// import HomePage from "./pages/HomePage"
// import Pricing from "./pages/Pricing"
// import Product from "./pages/Product"
// import PageNotFound from "./pages/PageNotFound"
// import CountryItem from "./components/CountryItem"
// import AppLayout from "./pages/AppLayout"
// import Login from "./pages/Login"
// import 'leaflet/dist/leaflet.css';
// import CityItem from "./components/CityItem"
// import CityDescription from "./components/CityDescription"
// import Form from "./components/Form"
// import { CitiesProvider } from "./contexts/CitiesContext"

// function App() {
// //  const [cities, setCities] = useState([])
// // //  const [countries, setCountries] = useState({})
// // const [isLoading, setIsLoading] = useState(false)

// // useEffect(() => {
// //   async function fetchData() {
// //     try {
// //       setIsLoading(true)
// //       const response = await fetch('http://localhost:9000/cities');

// //       if (!response.ok) {
// //         throw new Error('There was a problem fetching the data.');
// //       }

// //       const data = await response.json();
// //       console.log(data);
// //       setCities(data);
// //       setIsLoading(false)
// //     } catch (error) {
// //       alert('An error occurred: ' + error.message);
// //     }
// //   }
// //   fetchData();
// // }, []);




//   return (
//     <>
//     <CitiesProvider>
//      <BrowserRouter >

//       <Routes>
//         <Route path="/" element={<HomePage />}/>
//         <Route path="pricing" element={<Pricing />}/>
//         <Route path="product" element={<Product />}/>
//         <Route path="app" element={<AppLayout />}>
//           <Route index element={<CityItem />} />
//           <Route path="cities" element={<CityItem />} />
//           <Route path='cities/:id' element={<CityDescription />}/>
//           <Route path='form' element={<Form />}/>
//           <Route path="countries" element={<CountryItem />}  />
//         </Route>
//         <Route path="*" element={<PageNotFound />}/>
//         <Route path="login" element={<Login />}/>
//       </Routes>
//      </BrowserRouter>

//      </CitiesProvider>
//     </>
//   )
// }




// export default App



import { lazy} from "react";
import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import { CitiesProvider } from "./contexts/CitiesContext";
// import { AuthProvider } from "./contexts/FakeAuthContext";
// import ProtectedRoute from "./pages/ProtectedRoute";

import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
// import SpinnerFullPage from "./components/SpinnerFullPage";

// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import Homepage from "./pages/Homepage";
// import Login from "./pages/Login";
// import AppLayout from "./pages/AppLayout";
// import PageNotFound from "./pages/PageNotFound";

const Homepage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Login = lazy(() => import("./pages/Login"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

// dist/assets/index-59fcab9b.css   30.56 kB │ gzip:   5.14 kB
// dist/assets/index-f7c12d89.js   572.44 kB │ gzip: 151.29 kB

function App() {
  return (

            <BrowserRouter>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={

                    <AppLayout />

                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>

           </BrowserRouter>

           )

}

export default App;
