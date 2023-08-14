import Navbar from "../components/Navbar"
import classes from './Price.module.css'

const Pricing = () => {
  return (
    <div className={classes.priceContainer}>
      <Navbar />
       <div className={classes.price}>
         <div>
           <h1>Our prices starting <br /> from 9 euro</h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut felis id nulla luctus placerat vel nec nisl. Donec quis eleifend nisl. Mauris nec est hendrerit, elementum metus vitae, aliquam sem. Proin purus lectus, pretium eget venenatis quis, efficitur quis velit. </p>
         </div>
         <div>
           <img src="https://media.istockphoto.com/id/1148798298/photo/happy-young-woman-with-a-city-map-and-a-backpack-travelling.jpg?s=612x612&w=0&k=20&c=ZsJ9ge4gk89sElxUIpQhVYWEnW-Rki_gjiVmByY4pbs=" alt="pricePart" />
         </div>
       </div>
    </div>
  )
}

export default Pricing
