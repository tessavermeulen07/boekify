import './AddReview.css';
import Navigation from '../../navigation/Navigation.jsx';
import {useState} from 'react';
import ButtonNavStart from '../../components/button-nav-start/ButtonNavStart.jsx';
import BookRating from '../../components/book-rating/BookRating.jsx';
import TextLabel from '../../components/textLabel/TextLabel.jsx';

function AddReview() {

    const [reviewValue, setReviewValue] = useState('');
    const [bookIdValue, setBookIdValue] = useState('');
    const [authorIdValue, setAuthorIdValue] = useState('');
    const [memberIdValue, setMemberIdValue] = useState('');
    const [ratingIdValue, setRatingIdValue] = useState(null);
    const [error, setError] = useState('');
    const [succes, setSucces] = useState(false);
    const [newReviewId, setNewReviewId] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const postReview = await axios.post('https://novi-backend-api-wgsgz.ondigitalocean.app/api/reviews', {
                "bookId": `${bookIdValue}`,
                "authorId": `${authorIdValue}`,
                "memberId": `${memberIdValue}`,
                "ratingId": `${ratingIdValue}`,
                "review": `${reviewValue}`
            }, {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d',
                }
            });
            setNewReviewId();
            setSucces(true);
        } catch (error) {
            setError("Het is niet gelukt om het review te plaatsen. Probeer het later opnieuw")
        }
    }



    return (
        <>
            <Navigation />
            <div>
                <h2>Schrijf je review</h2>
            </div>
            <form className="form-add-review">
                <TextLabel
                    startTextLabel="Titel"
                    typeOfLabel="hidden"
                    idOfLabel="test"
                    nameOfLabel="bookId"
                    valueOfLabel={bookIdValue}
                    onChangeOfLabel={(e) => setBookIdValue(e.target.value)}
                />
                <TextLabel
                    startTextLabel="Auteur van het boek:"
                    typeOfLabel="hidden"
                    idOfLabel="authorId"
                    nameOfLabel="authorId"
                    valueOfLabel={authorIdValue}
                    onChangeOfLabel={(e) => setAuthorIdValue(e.target.value)}
                />
                <TextLabel
                    startTextLabel="member"
                    typeOfLabel="hidden"
                    idOfLabel="memberId"
                    nameOfLabel="memberId"
                    valueOfLabel={memberIdValue}
                    onChangeOfLabel={(e) => setMemberIdValue(e.target.value)}
                />
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
                    <BookRating />
                    <ButtonNavStart
                        typeOfButton="send"
                        valueOfButton="send"
                        nameOfButton="add-review"
                        // onClickOfButton={}
                        textOnButton="Verstuur review"
                    />
            </form>
        </>
    )
}

export default AddReview;