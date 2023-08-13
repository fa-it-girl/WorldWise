import { useState } from "react"
import classes from './Login.module.css'

import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailValidation, setEmailValidation] = useState(true)
  const [passwordValidation, setPasswordValidation] = useState(true)
  const navigate = useNavigate()
  const userEmailInput = (event) =>{
    console.log(event.target.value)
    setEmail(event.target.value)
  }

  const userPasswordInput = (event) => {
    setPassword(event.target.value)

  }

  const formSubmitHandler = (event) => {
    event.preventDefault()
    if (!email.includes('@') && email.length === 0){
      setEmailValidation(false)
    }

    if(password.length < 6 && password.length === 0)
    {
      setPasswordValidation(false)
    }

    navigate('app')
  }
  return (
    <div className={classes.loginContainer}>

      <div className={classes.login}>
      <h1>Login</h1>
      <form className={classes.form}>
        <label>Email</label><br />
        <input
         type="email"
         placeholder="Enter your email"
         onChange={userEmailInput}/>
         {!emailValidation && <p>this email is not correct</p>}<br />
        <label>Password</label><br/>
        <input
         type="password"
          placeholder="Enter your password"
          onChange={userPasswordInput}/>
          {!passwordValidation && <p>password needs to be 6 </p>}<br />
        <button type="submit" onClick={formSubmitHandler}>Sing in</button>
      </form>

    </div>
    </div>

  )
}

export default Login
