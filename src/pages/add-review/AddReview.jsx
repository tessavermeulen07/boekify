import './AddReview.css';
import {AuthContext} from "../../context/AuthContext.jsx";
import Navigation from '../../navigation/Navigation.jsx';
import { useState, useEffect, useContext } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import ButtonNavStart from '../../components/button-nav-start/ButtonNavStart.jsx';
import BookRating from '../../components/book-rating/BookRating.jsx';
import TextLabel from '../../components/textLabel/TextLabel.jsx';
import axios from 'axios';


function AddReview() {

    const location = useLocation();
    const {bookId, authorId, ratingId} = location.state || {};

    const [reviewValue, setReviewValue] = useState('');
    const [bookIdValue, setBookIdValue] = useState(bookId || '');
    const [authorIdValue, setAuthorIdValue] = useState(authorId || '');
    // const [memberIdValue, setMemberIdValue] = useState('');
    const [ratingIdValue, setRatingIdValue] = useState(ratingId || 0);
    const [error, setError] = useState('');
    const [succes, setSucces] = useState(false);
    const [newReviewId, setNewReviewId] = useState(null);

    const { isAuth, user } = useContext(AuthContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        try {
            const postReview = await axios.post('https://novi-backend-api-wgsgz.ondigitalocean.app/api/reviews', {
                bookId: Number(bookIdValue),
                authorId: Number(authorIdValue),
                userId: user?.id,
                ratingId: Number(ratingIdValue),
                review: reviewValue
            }, {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d',
                }
            });
            setNewReviewId();
            setSucces(true);
        } catch (error) {
            console.error("Foute details:", error.response?.data);
            setError("Het is niet gelukt om het review te plaatsen. Probeer het later opnieuw")
        }
    }


    return (
        <>
            <Navigation/>
            <div>
                <h2>Schrijf je review</h2>
            </div>

            {succes === true ? (
                <section>
                    <p>Je review is toegevoegd</p>
                </section>
            ) : (

                <form
                    className="form-add-review"
                    onSubmit={handleSubmit}
                >
                    <label htmlFor="book-review" className="text-area-label-add-review">
                        Review:
                    </label>
                    <textarea
                        className="text-area-add-review"
                        id="bookreview"
                        value={reviewValue}
                        onChange={(e) => setReviewValue(e.target.value)}
                        rows="10"
                        cols="120"
                    ></textarea>
                    <BookRating
                        rating={ratingIdValue}
                        setRating={setRatingIdValue}
                    />
                    <ButtonNavStart
                        typeOfButton="send"
                        valueOfButton="send"
                        nameOfButton="add-review"
                        textOnButton="Verstuur review"
                    />
                </form>
            )}
        </>
    )
}

export default AddReview;