import { Link } from "react-router-dom"
import classes from "./HomePage.module.css"
import Navbar from '../components/PageNav'
const HomePage = () => {
  return (
    <main className={classes.homepage}>
      <Navbar />
      <section>
        <h1>You travel the world <br />
          WorldWise keeps track of yourr adventures!
        </h1>
        <h2>
          A world map rhats tracks your footsteps into every city you can thing of.
          Never forget yout experiences, and show your friends how you have wondered the world
        </h2>
      </section>
      <div className={classes.buttonContainer}>
        <Link to='app' className={classes.tracking}>Start tracking now</Link>
      </div>

    </main>
  )
}

export default HomePage
