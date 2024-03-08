import ReviewsListItem from 'components/ReviewsListItem/ReviewsListItem';

const ReviewsList = ({ data }) => {
  return (
    <ul>
      {data.map(item => (
        <ReviewsListItem
          key={item.id}
          author={item.author}
          content={item.content}
        />
      ))}
    </ul>
  );
};

export default ReviewsList;
