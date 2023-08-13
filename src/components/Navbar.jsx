import Logo from './Logo'
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={classes.nav}>
    <div className={classes.navLeft}>
      <ul>
        <Logo />
      </ul>
    </div>
    <div className={classes.navRight}>
      <ul>
        <NavLink to='product'><li>Product</li></NavLink>
      </ul>
      <ul>
        <NavLink to='pricing'><li>Pricing</li></NavLink>
      </ul>
      <ul>
        <NavLink to='login'><li>Login</li></NavLink>
      </ul>
    </div>
  </nav>

  )
}

export default Navbar
