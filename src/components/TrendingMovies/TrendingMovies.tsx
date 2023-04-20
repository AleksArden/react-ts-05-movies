import { Link, useLocation } from 'react-router-dom';
import { Item } from './TrendingMovies.styled';
import { Movie } from 'types/typeMovie';

interface IProps {
  movies: Movie[]
}

const TrendingMovies = ({ movies }: IProps) => {
  const location = useLocation();
  console.log(location)
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

export default TrendingMovies;
