
import PropTypes from 'prop-types';
import Country from './Country';

const CountryItem = ({ isLoading, cities }) => {

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  if (cities.length === 0) return <p>Countries are loading</p>;

  return (
    <div>
      {isLoading ? (
        <p>Countries are loading...</p>
      ) : (
        <ul>
          {countries.map(country => (
            <Country country={country} key={country} />
          ))}
        </ul>
      )}
    </div>
  );
};

CountryItem.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,

      // Add other properties based on your data structure
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default CountryItem;
