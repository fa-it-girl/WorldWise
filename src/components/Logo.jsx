import classes from './Logo.module.css'

const Logo = () => {
  return (
    <div>
      <img src='../../public/logo.png' alt='logo' className={classes.logo}/>
    </div>
  )
}

export default Logo
