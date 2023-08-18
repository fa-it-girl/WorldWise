import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
// import BackButton from "./BackButton";
import classes from "./CityDescription.module.css";




function CityDescription() {
  const { id } = useParams();
  const { getCities, currentCity, isLoading } = useCities();

  useEffect(
    function () {
      getCities(id);
    },
    [id]
  );

  const { cityName, emoji , notes } = currentCity;

  if (isLoading) return <h1>loading</h1>;

  return (
    <div className={classes.city}>
      <div className={classes.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>


      {notes && (
        <div className={classes.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={classes.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>

      </div>
    </div>
  );
}

export default CityDescription;
