import React, { useState } from 'react';

function Rating() {
    const [rating, setRating] = useState(0);
    const maxRating = 5;

    const handleRatingClick = (index) => {
        setRating(index + 1);
    };

    return (
        <div>
            <h2>Rating: {rating}</h2>
            <div>
                {[...Array(maxRating)].map((_, index) => (
                    <span
                        key={index}
                        onClick={() => handleRatingClick(index)}
                        style={{ cursor: 'pointer', color: index < rating ? 'gold' : 'gray' }}
                    >
                        ★
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Rating;