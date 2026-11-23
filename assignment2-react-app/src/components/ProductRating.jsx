
// Returns Rating STar Diagram
const StarRating = ({ rating }) => {

    // Sets Number Of Filled In Stars Vs Empty Stars
    const stars = Math.round(rating);
    const empty = 5 - stars;

    return (
        <span className="stars">
            {'★'.repeat(stars)}{'☆'.repeat(empty)}
        </span>
    );
};

export default StarRating;