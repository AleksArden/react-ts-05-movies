import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IMAGE_URL } from 'constans/ImageURL';
import { fetchCastById } from 'services/Movies.services';
import { STATUS } from 'constans/Status';
import { Wrapper, List, Item, Thumb, Name } from './Cast.styled';
import imageReplace from 'assets/poster/poster-not-found.jpg';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState(STATUS.idle);

  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async query => {
      setStatus(STATUS.loading);
      try {
        const data = await fetchCastById(query);
        onResolve(data);
      } catch (error) {
        console.log(error);
        setStatus(STATUS.error);
      }
    };
    getCast(movieId);
  }, [movieId]);

  const onResolve = data => {
    const dataCast = data.map(({ cast_id, character, name, profile_path }) => ({
      id: cast_id,
      character,
      name,
      image: profile_path,
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
          {cast.map(({ id, character, name, image }) => (
            <Item key={id}>
              {image ? (
                <img src={`${IMAGE_URL}` + image} alt={name} width="150" />
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
