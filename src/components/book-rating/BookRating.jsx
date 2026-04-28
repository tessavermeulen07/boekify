import './BookRating.css';
import {useState, useEffect} from 'react';
import {FaHeart} from 'react-icons/fa';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function BookRating( { rating, setRating }) {

    const location = useLocation();
    const {ratingId} = location.state || {};

    const [hover, setHover] = useState(null);
    const [ratingValue, setRatingValue] = useState(ratingId || 0)
    


    return (
        <>
            <div className="heart-rating">
                {[... Array(5)].map((heart, i) => {
                    const ratingValue = i + 1;

                    return (
                        <label key={i}>
                            <input
                                className="input-radio-book-rating"
                                type="radio"
                                name="rating"
                                value={ratingValue}
                                onClick={() => setRating(ratingValue)}
                            />
                            <FaHeart
                                className="heart-book-rating"
                                size={20}
                                color={ratingValue <= (hover || rating) ? "#DC143C" : "lightgrey"}
                                onMouseOver={() => setHover(ratingValue)}
                                onMouseOut={() => setHover(null)}
                            />
                        </label>
                    )
                })}
            </div>
        </>
    )
}

export default BookRating;