import './BookRating.css';
import {useState, useEffect} from 'react';
import {FaHeart} from 'react-icons/fa';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';

function BookRating( { rating, setRating, book, user }) {

    const location = useLocation();
    const {ratingId} = location.state || {};

    const [hover, setHover] = useState(null);
    const [ratingValue, setRatingValue] = useState(ratingId || 0);
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);
    const {id} = useParams();


    async function updateRating(ratingValue) {
        try {
            toggleLoading(true);
            toggleError(false);

            const newRating = await axios.post(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/ratings`, {
                rating: ratingValue,
                bookId: book?.id,
                userId: user?.id
            }, {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('JWT', ratingValue)}`
                }
            });
            console.log("Rating succesvol opgeslagen");
        } catch (error) {
            console.error("Fout bij opslaan rating", error);
        }
    }

    const handleHeartClick = (ratingValue) => {
        setRating(ratingValue);
        updateRating(ratingValue);
    }

    async function getRating(id) {
        try {
            toggleLoading(true);
            toggleError(false);

            const ratingBook = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/books/${id}/ratings`, {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d',
                    'Authorization': `Bearer ${localStorage.getItem('JWT')}`
                }
            });
            console.log(ratingBook.data);
            const ratingList =ratingBook.data;

            if (Array.isArray(ratingList) && ratingList.length > 0) {
                const myRating = ratingList.find(r => r.userId === user?.id);
                if (myRating) {
                    setRating(myRating.rating);
                    setCurrentRatingId(myRating.id);
                }
            }
        } catch (error) {
            toggleError(true);
            console.error("Rating niet gevonden", error);
        } finally {
            toggleLoading(false);
        }
    }


    useEffect(() => {
        void getRating(id);

    }, [id]);



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
                                onClick={() => handleHeartClick(ratingValue)}
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