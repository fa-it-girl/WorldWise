import { useState } from "react"
import Button from "./Button"
import { useNavigate } from "react-router-dom"
import classes from './Form.module.css'

const Form = () => {

  const [cityName, setCityName] = useState('')
  const [notes, setNotes] = useState('')
  const navigate = useNavigate()
  return (
    <form className={classes.form}>
      <label>City</label><br />
      <input
        type="text"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        /><br />
      <label>When did you go to </label><br />
      <input type='date'></input><br />
      <label htmlFor="notes">Notes about your trip to </label><br />
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        /><br />
      <Button type='primary' className={classes.primary}>add</Button>
      <Button type='back' onClick={(e)=>{ e.preventDefault(); navigate(-1)}}>&larr; back</Button>
    </form>
  )
}

export default Form
