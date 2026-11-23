// Import Components
import StarRating from './ProductRating.jsx';

// Builds a List Of Reviews With The Required Info And Ratings Using The Start Ratings Format
const ReviewsTab = (props) => {
    if (props.reviews.length === 0) {
        return <p>No reviews yet.</p>;
    }

    return (
        <ul className="reviews">
            {props.reviews.map((review, index) => (
                <li key={index}>
                    <StarRating rating={review.rating} />
                    <p>{review.comment}</p>
                    <small>
                        {review.reviewerName},{' '}
                        {new Date(review.date).toLocaleDateString('en-CA', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </small>
                </li>
            ))}
        </ul>
    );
};

export default ReviewsTab;