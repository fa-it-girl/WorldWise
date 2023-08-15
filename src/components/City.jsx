import PropTypes from 'prop-types';
import classes from './CityItem.module.css'

const City = ({city}) => {

  console.log(city)
  return (
    <li className={classes.cityItem}>
    <span className={classes.emoji}>{city.emoji}</span>
    <h3 className={classes.name}>{city.cityName}</h3>
    <time>{city.date}</time>
    <button className={classes.deleteBtn}>&times;</button>
  </li>
  )
}

City.propTypes = {
  city: PropTypes.shape({
    emoji: PropTypes.string.isRequired,
    cityName: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
};

export default City
