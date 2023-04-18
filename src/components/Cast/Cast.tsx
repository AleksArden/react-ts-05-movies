import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IMAGE_URL } from 'constans/ImageURL';
import { fetchMovies } from 'services/Movies.services';
import { STATUS } from 'constans/Status';
import { Wrapper, List, Item, Thumb, Name } from './Cast.styled';
import imageReplace from 'assets/poster/poster-not-found.jpg';

interface ICast {
   cast_id: string,
    character: string,
    name: string,
     profile_path: string,
}

const Cast = () => {
  const [cast, setCast] = useState<ICast[] | []>([]);
  const [status, setStatus] = useState(STATUS.idle);

  const { movieId } = useParams();

  useEffect(() => {
    const getCastById = async (movieId: string) => {
      setStatus(STATUS.loading);
      try {
        const data = await fetchMovies<ICast[]>({URL: `movie/${movieId}/credits`});
        onResolve(data);
      } catch (error) {
        console.log(error);
        setStatus(STATUS.error);
      }
    };
    getCastById(movieId);
  }, [movieId]);

  const onResolve = (data: ICast[]) => {
    const dataCast = data.map(({ cast_id, character, name, profile_path }) => ({
     cast_id,
    character,
    name,
     profile_path,
    }));

    setCast(dataCast);
    setStatus(STATUS.success);
  };
  return (
    <Wrapper>
      {status === STATUS.error && <h2>NOT FOUND</h2>}
      {status === STATUS.loading && <p>Loading...</p>}
      {status === STATUS.success && cast.length === 0 ? (
        <p>Not information</p>
      ) : (
        <List>
          {cast.map(({ cast_id, character, name, profile_path }) => (
            <Item key={cast_id}>
              {profile_path ? (
                <img src={`${IMAGE_URL}` + profile_path} alt={name} width="150" />
              ) : (
                <img src={imageReplace} alt="Not poster" width="150" />
              )}
              <Thumb>
                <Name>{name}</Name>
                <p>
                  <b>Character:</b> {character}
                </p>
              </Thumb>
            </Item>
          ))}
        </List>
      )}
    </Wrapper>
  );
};
export default Cast;
