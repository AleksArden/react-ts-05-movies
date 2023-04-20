import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRequest } from 'services/Movies.services';
import { STATUS } from 'constans/Status';
import { Wrapper, Item, List, Content } from './Reviews.styled';

interface IReviews {
  id: string,
      author: string,
      content: string,
}

interface IRequestReview {
  page: number,
  results: IReviews[]
}

const Reviews = () => {
  const [reviews, setReviews] = useState<IReviews[] | []>([]);
  const [status, setStatus] = useState(STATUS.idle);

  const { movieId } = useParams<{movieId?: string}>();

  useEffect(() => {
    const getReviewsById = async (movieId?: string): Promise<void> => {
      setStatus(STATUS.loading);
      try {
        const data = await fetchRequest<IRequestReview>({URL: `movie/${movieId}/reviews`});
        onResolve(data);
      } catch (error) {
        console.log(error);
        setStatus(STATUS.error);
      }
    };
    getReviewsById(movieId);
  }, [movieId]);
  const onResolve = ({results}: IRequestReview): void => {
    const dataReviews: IReviews[] = results.map(({ id, author, content }) => ({
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
