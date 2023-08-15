
import { Outlet } from 'react-router-dom'
import AppNavbar from './AppNavbar'
import Logo from './Logo'
import classes from './SideBar.module.css'

const SideBar = () => {
  return (
    <div className={classes.sidebar}>

      <Logo />

       <AppNavbar />

       <Outlet />

        <footer className={classes.footer}>
          <p className={classes.copyright}>
            copyright {new Date().getFullYear()} by Fa
          </p>
        </footer>
    </div>
  )
}

export default SideBar
