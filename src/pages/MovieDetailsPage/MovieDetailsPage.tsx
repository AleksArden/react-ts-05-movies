import { useState, useEffect, Suspense } from 'react';
import {
  Link,
  useParams,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { fetchMovieDetailsById } from 'services/Movies.services';
import {
  Wrapper,
  Poster,
  Content,
  Thumb,
  Button,
  List,
  Item,
  Error,
  Load,
  Div,
} from './MovieDetailsPage.styled';
import { IMAGE_URL } from 'constans/ImageURL';
import { STATUS } from 'constans/Status';
import imageReplace from 'assets/poster/poster-not-found.jpg';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState(STATUS.idle);

  const navigate = useNavigate();
  const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    const getMovie = async query => {
      setStatus(STATUS.loading);
      try {
        const data = await fetchMovieDetailsById(query);
        onResolve(data);
      } catch (error) {
        console.log(error);
        setStatus(STATUS.error);
      }
    };
    getMovie(movieId);
  }, [movieId]);
  const onResolve = data => {
    const dataMovie = {
      title: data.original_title,
      releaseDate: new Date(data.release_date).getFullYear(),
      overview: data.overview,
      genres: data.genres.map(item => item.name).join(' '),
      poster: data.poster_path,
      voteAverage: (data.vote_average * 10).toFixed(0),
    };
    setMovie(dataMovie);
    setStatus(STATUS.success);
  };
  return (
    <>
      {status === STATUS.error && <Error>NOT FOUND</Error>}
      {status === STATUS.loading && <Load>Loading...</Load>}
      {status === STATUS.success && movie && (
        <>
          <Button type="button" onClick={() => navigate(location?.state?.from)}>
            Go back
          </Button>
          <Wrapper>
            {movie.poster ? (
              <Poster
                src={`${IMAGE_URL}` + movie.poster}
                alt={`Poster ${movie.title}`}
              />
            ) : (
              <Poster src={imageReplace} />
            )}
            <Content>
              {movie.releaseDate ? (
                <h2>
                  {movie.title} ({movie.releaseDate})
                </h2>
              ) : (
                <h2>{movie.title}</h2>
              )}
              <p>User score {movie.voteAverage}%</p>
              <b>Overview</b>
              {movie.overview ? (
                <p>{movie.overview}</p>
              ) : (
                <p>Not information</p>
              )}
              <b>Genres</b>
              {movie.genres ? <p>{movie.genres}</p> : <p>Not information</p>}
            </Content>
          </Wrapper>
          <Thumb>
            <p>Additional information</p>
            <List>
              <Item>
                <Link to="cast" state={location.state}>
                  Cast
                </Link>
              </Item>
              <Item>
                <Link to="reviews" state={location.state}>
                  Reviews
                </Link>
              </Item>
            </List>
          </Thumb>
          <Suspense fallback={<Div>Loading...</Div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};
export default MovieDetailsPage;
