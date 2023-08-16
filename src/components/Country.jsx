import PropTypes from 'prop-types';

const Country = ({country}) => {

  return (
    <li>
     <span>{country.country}</span>
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
