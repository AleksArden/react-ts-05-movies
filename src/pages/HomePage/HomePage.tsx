import { useState, useEffect } from 'react';
import { fetchRequest } from 'services/Movies.services';
import TrendingMovies from 'components/TrendingMovies/TrendingMovies';
import { STATUS } from 'constans/Status';
import { Wrapper, Title } from './HomePage.styled';
import { Movie } from 'types/typeMovie';
import { IResponse } from 'types/typeFetchMovie';

const HomePage = () => {
  const [movies, setMovies] = useState<Movie [] | []>([]);
  const [status, setStatus] = useState(STATUS.idle);

  useEffect(() => {
    const getMovies = async (): Promise<void> => {
      setStatus(STATUS.loading);
      try {
        const data = await fetchRequest<IResponse>({URL:`trending/movie/day`});
        onResolve(data);
      } catch (error) {
        console.log(error);
        setStatus(STATUS.error);
      }
    };
    getMovies();
  }, []);
  const onResolve = ({results}:IResponse): void => {
    const movieTitles: Movie[] = results.map(({ id, original_title: title}) => ({
      id,
      title,
    }));
    setMovies(movieTitles);
    setStatus(STATUS.success);
  };
  return (
    <Wrapper>
      {status === STATUS.error && <Title>NOT FOUND</Title>}
      {status === STATUS.loading && (
        <>
          <Title>Trending today</Title>
          <p>Loading...</p>
        </>
      )}
      {status === STATUS.success && (
        <>
          <Title>Trending today</Title>
          <TrendingMovies movies={movies} />
        </>
      )}
    </Wrapper>
  );
};
export default HomePage;
