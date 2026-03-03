import './IndividualBook.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Navigation from '../../navigation/Navigation.jsx';
import BookRating from '../../components/book-rating/BookRating.jsx';
import {Link} from 'react-router-dom';


function IndividualBook() {

    const [individualBook, setIndividualBook] = useState({});
    const [individualAuthor, setIndividualAuthor] = useState('');
    const [individualGenre, setIndividualGenre] = useState('');
    const [individualReview, setIndividualReview] = useState([]);
    const [individualMember, setIndividualMember] = useState({});
    const {id} = useParams();


    async function getIndividualBook(id) {
        try {
            const resultIndividualBook = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/books/${id}`, {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            });
            setIndividualBook(resultIndividualBook?.data);
            console.log(resultIndividualBook?.data);
        } catch (error) {
            console.error('Het boek is niet gevonden.')
        }
    }

    useEffect(() => {
        void getIndividualBook(id);
    }, []);


    async function getIndividualAuthor(id) {
        try {
            const resultIndividualAuthor = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/authors/${id}`, {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            });
            setIndividualAuthor(resultIndividualAuthor?.data);
            console.log(resultIndividualAuthor?.data);
        } catch (error) {
            console.error('Auteur niet gevonden.');
        }
    }


    useEffect(() => {
        if (Object.keys(individualBook).length > 0) {
            void getIndividualAuthor(individualBook.authorId);
        }
    }, [individualBook.authorId]);


    async function getIndividualGenre(id) {
        try {
            const resultIndividualGenre = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/genres/${id}`, {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            });
            setIndividualGenre(resultIndividualGenre?.data?.name);
            console.log(resultIndividualGenre?.data);
        } catch (error) {
            console.error('Genre niet gevonden.');
        }
    }

    useEffect(() => {
        if (Object.keys(individualBook).length > 0) {
            void getIndividualGenre(individualBook.genreId);
        }
    }, [individualBook.genreId]);


    async function getIndividualReviews(id) {
        try {
            const resultIndividualReviews = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/books/${id}/reviews`, {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            });
            setIndividualReview(resultIndividualReviews?.data);
            console.log(resultIndividualReviews?.data);
        } catch (error) {
            `Reviews niet gevonden.`
            console.error('Reviews niet gevonden.')
        }
    }

    useEffect(() => {
        void getIndividualReviews(id);
    }, []);


    async function getIndividualMember() {
        try {
            const resultIndividualMember = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/members`, {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            });
            setIndividualMember(resultIndividualMember.data);
            console.log(resultIndividualMember.data);
        } catch (error) {
            console.error('Onbekend lid');
        }
    }

    useEffect(() => {
        void getIndividualMember();
    }, []);

        // useEffect(() => {
        //     if (Object.keys(individualReview).length > 0) {
        //         void getIndividualMember(individualReview.memberId);
        //     }
        // }, [individualReview.memberId]);


    return (
        <>

            <Navigation/>
            <div className="main-container-individual-book">
                <div className="container-image-review-individual-book">
                    <img src={`../${individualBook?.coverImage}`} alt={individualBook?.alt}/>
                    <BookRating/>
                    <Link to={`/review/${individualBook?.id}`}>Schrijf een review</Link>
                </div>
                <div className="book-info-container-individual-book">
                    <h3>{individualBook?.title}</h3>
                    <h5>{individualAuthor?.name}</h5>
                    <p>{individualBook?.description}</p>
                    <p><b>Genres:</b> {individualGenre}</p>
                    <div>
                        <h4>Reviews</h4>
                        <ul>
                            {individualReview?.map((reviews) => {
                                const member = individualMember?.find((m) => m.id === reviews.memberId);
                                return (
                                    <li key={reviews.review}>
                                        <p>{member ? member.name : "Lid onbekend."}</p>
                                        <p>{reviews.ratingId}</p>
                                        <p>{reviews.review}</p>
                                    </li>
                                )
                            })}
                        </ul>

                    </div>
                </div>
            </div>

        </>
    )
}

export default IndividualBook;