import Navbar from '../components/Navbar'
import classes from './Product.module.css'

const Product = () => {
  return (
  <div className={classes.productPage}>
 <Navbar />
    <div className={classes.product}>

      <div>
        <img src='https://static.thehoneycombers.com/wp-content/uploads/sites/2/2022/10/kris-plus-travel-hacks-singapore.jpg' alt='product-image'/>
      </div>
      <div>
         <h1>About WorldWide</h1>
         <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut felis id nulla luctus placerat vel nec nisl. Donec quis eleifend nisl. Mauris nec est hendrerit, elementum metus vitae, aliquam sem. Proin purus lectus, pretium eget venenatis quis, efficitur quis velit. In quis tempor odio. Phasellus scelerisque a nulla sed euismod. Nullam quis molestie tellus. Suspendisse feugiat massa et rhoncus convallis. Aenean ullamcorper neque vitae porttitor convallis. Donec accumsan sollicitudin scelerisque. Aenean at mi eu nulla pretium hendrerit id hendrerit sapien. Suspendisse tincidunt lorem dui, eu pharetra lacus semper id. Proin convallis molestie scelerisque. Donec at risus fringilla, elementum elit maximus, facilisis dui. In bibendum sollicitudin lorem a sodales. Sed ornare sem eget dolor rhoncus, quis interdum massa egestas.
         </p>
      </div>
    </div>
  </div>

  )
}

export default Product
