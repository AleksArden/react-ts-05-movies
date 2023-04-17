import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Item } from './TrendingMovies.styled';

const TrendingMovies = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <Item key={id}>
          <Link to={`movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </Item>
      ))}
    </ul>
  );
};
TrendingMovies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
export default TrendingMovies;
