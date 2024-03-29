import { getMovieReviewsApi } from 'api/movies';
import ReviewsList from 'components/ReviewsList/ReviewsList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getMovieDeteils = async () => {
      try {
        const data = await getMovieReviewsApi(movieId);
        setReviews(data.results);
      } catch (error) {}
    };

    getMovieDeteils();
  }, [movieId]);

  return (
    <div>
      {reviews.length === 0 ? (
        <p>We don't have any reviews for this movie.</p>
      ) : (
        <ReviewsList data={reviews} />
      )}
    </div>
  );
};

export default Reviews;
