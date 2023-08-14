import { NavLink } from "react-router-dom"
import classes from './AppNavbar.module.css'
const AppNavbar = () => {
  return (
    <div className={classes.appNavbar}>
      <ul>
        <NavLink to='cities'><li>Cities</li></NavLink>
      </ul>
      <ul>
       <NavLink to='countries'><li>Countries</li></NavLink>
      </ul>
    </div>
  )
}

export default AppNavbar
