import PropTypes from 'prop-types';
import classes from './Country.module.css'
const Country = ({country}) => {

  return (
    <li className={classes.countryItem}>
     <span className={classes.countryName}>{country.country}</span>
     <span>{country.emoji}</span>
    </li>
  )
}

Country.propTypes = {
  country: PropTypes.shape({
    emoji: PropTypes.string.isRequired,
     country: PropTypes.string.isRequired,

  }).isRequired,
};

export default Country
