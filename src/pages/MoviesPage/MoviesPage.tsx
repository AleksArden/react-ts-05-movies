import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Form, Input, Item, List, Error, Load } from './MoviesPage.styled';
import { fetchMovies } from 'services/Movies.services';
import { STATUS } from 'constans/Status';
import Notiflix from 'notiflix';
import { Movie } from 'types/typeMovie';
import { FetchMovie } from 'types/typeFetchMovie';

Notiflix.Notify.init({
  width: '400px',
  fontSize: '20px',
  cssAnimationStyle: 'zoom',
  position: 'center-center',
});

const MoviesPage = () => {
  const [status, setStatus] = useState(STATUS.idle);
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState<Movie[] | []>([]);
  const searchName = searchParams.get('query');
  const location = useLocation();

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const { value }= evt.target.elements.search;
    if (value === '') {
      Notiflix.Notify.info('Please, fill in the search field!');
    }
    setMovies([]);
    setSearchParams({ query: value });
  };
  useEffect(() => {
    if (!searchName) return;
    if (searchName === '') return;
    const getSearchMovies = async () => {
      setStatus(STATUS.loading);
      try {
        const data = await fetchMovies<FetchMovie[]>({URL: `search/movie`, searchName });
        onResolve(data);
      } catch (error) {
        console.log(error);
        setStatus(STATUS.error);
      }
    };
    getSearchMovies();
  }, [searchName]);

  const onResolve = (data: FetchMovie[]) => {
    if (data.length === 0) {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      setStatus(STATUS.idle);
      return;
    }
    const moviesName = data.map(({ id, original_title: title }) => ({
      id,
      title,
    }));
    setMovies(moviesName);
    setStatus(STATUS.success);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input type="text" autoComplete="off" name="search" />
        <button type="submit">Search</button>
      </Form>
      {status === STATUS.error && <Error>NOT FOUND</Error>}
      {status === STATUS.loading && <Load>Loading...</Load>}
      <List>
        {movies &&
          movies.map(({ id, title }) => (
            <Item key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </Item>
          ))}
      </List>
    </div>
  );
};
export default MoviesPage;
