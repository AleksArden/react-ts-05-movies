import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsById } from 'services/Movies.services';
import { STATUS } from 'constans/Status';
import { Wrapper, Item, List, Content } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState(STATUS.idle);

  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async query => {
      setStatus(STATUS.loading);
      try {
        const data = await fetchReviewsById(query);
        onResolve(data);
      } catch (error) {
        console.log(error);
        setStatus(STATUS.error);
      }
    };
    getReviews(movieId);
  }, [movieId]);
  const onResolve = data => {
    const dataReviews = data.map(({ id, author, content }) => ({
      id,
      author,
      content,
    }));
    setReviews(dataReviews);
    setStatus(STATUS.success);
  };

  return (
    <Wrapper>
      {status === STATUS.error && <h2>NOT FOUND</h2>}
      {status === STATUS.loading && <p>Loading...</p>}
      {status === STATUS.success && reviews.length === 0 ? (
        <p>We don`t have any reviews for this movie</p>
      ) : (
        <List>
          {reviews.map(({ id, author, content }) => (
            <Item key={id}>
              <b>{author}</b>
              <Content>{content}</Content>
            </Item>
          ))}
        </List>
      )}
    </Wrapper>
  );
};
export default Reviews;
