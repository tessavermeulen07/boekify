import './BookRating.css';
import {useState, useEffect} from 'react';
import {FaHeart} from 'react-icons/fa';
import axios from 'axios';

function BookRating() {

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    async function postRating() {
        try {
            const resultRating = await axios.post('https://novi-backend-api-wgsgz.ondigitalocean.app/api/ratings', {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            });
            setRating(resultRating);
            console.log(resultRating);
        } catch (error) {
            console.error (error);
        }
    }

    // useEffect(() => {
    //     void postRating();
    // }, []);

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