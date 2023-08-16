import PropTypes from 'prop-types';
import City from './City'
import Message from './Message';
import { useCities } from '../contexts/CitiesContext';

const CityItem = () => {
const {cities, isLoading} = useCities();
  if (cities.length === 0) return <Message />
  return (
    <div>
      {isLoading ? (
        <p>Cities are loading...</p>
      ) : (
        <ul>
          {cities.map(city => (
            <City key={city.id} city={city}/>
          ))}
        </ul>
      )}
    </div>
  );
};



CityItem.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,

    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default CityItem
