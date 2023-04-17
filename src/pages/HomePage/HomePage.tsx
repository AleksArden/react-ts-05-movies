import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/Movies.services';
import TrendingMovies from 'components/TrendingMovies/TrendingMovies';
import { STATUS } from 'constans/Status';
import { Wrapper, Title } from './HomePage.styled';

interface IMovies {
  id: string,
  
}

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(STATUS.idle);

  useEffect(() => {
    const getMovies = async () => {
      setStatus(STATUS.loading);
      try {
        const data = await fetchTrendingMovies();
        onResolve(data);
      } catch (error) {
        console.log(error);
        setStatus(STATUS.error);
      }
    };
    getMovies();
  }, []);
  const onResolve = data => {
    const movieTitles = data.map(({ id, original_title }) => ({
      id,
      title: original_title,
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
