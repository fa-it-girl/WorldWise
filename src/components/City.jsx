import PropTypes from 'prop-types';
import classes from './CityItem.module.css'
import { Link } from 'react-router-dom';

const City = ({city}) => {

  console.log(city)
  return (
    <li >
      <Link className={classes.cityItem} to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}>
        <span className={classes.emoji}>{city.emoji}</span>
        <h3 className={classes.name}>{city.cityName}</h3>
        <time>{city.date}</time>
        <button className={classes.deleteBtn}>&times;</button>
        <button>test</button>
        {/* sil sonra */}

      </Link>

  </li>
  )
}

City.propTypes = {
  city: PropTypes.shape({
    emoji: PropTypes.string.isRequired,
    cityName: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    id: PropTypes.number.isRequired,
    position: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default City
