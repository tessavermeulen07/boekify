import './IndividualBook.css';
import axios from 'axios';
import {useEffect, useState, useContext} from 'react';
import { useParams, Link } from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext.jsx";
import Navigation from '../../navigation/Navigation.jsx';
import BookRating from '../../components/book-rating/BookRating.jsx';



function IndividualBook() {

    const [individualBook, setIndividualBook] = useState({});
    const [individualAuthor, setIndividualAuthor] = useState('');
    const [individualGenre, setIndividualGenre] = useState('');
    const [individualReview, setIndividualReview] = useState([]);
    const [allMembers, setAllMembers] = useState([]);
    const [individualMember, setIndividualMember] = useState({});
    const [readList, setReadList] = useState({});
    const [currentlyReadingList, setCurrentlyReadingList] = useState({});
    const [readListItems, setReadListItems] = useState([]);
    const [currentlyReadingListItems, setCurrentlyReadingListItems] = useState([]);
    const [bookStatus, setBookStatus] = useState('Laden...');
    const [selectedStatus, setSelectedStatus] = useState("");
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);
    const [rating, setRating] = useState(0)
    const [currentRatingId, setCurrentRatingId] = useState(0);
    const {id} = useParams();
    const {isAuth, user} = useContext(AuthContext);


    async function getIndividualBook(id) {

        try {
            toggleLoading(true);

            toggleError(false);

            const resultIndividualBook = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/books/${id}`, {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            });
            setIndividualBook(resultIndividualBook?.data);
        } catch (error) {
            console.error('Het boek is niet gevonden.')
            toggleError(true);
        } finally {
            toggleLoading(false);
        }
    }

    useEffect(() => {
        void getIndividualBook(id);
    }, [id]);


    async function getIndividualAuthor(id) {
        try {
            toggleLoading(true);

            toggleError(false);

            const resultIndividualAuthor = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/authors/${id}`, {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            });
            setIndividualAuthor(resultIndividualAuthor?.data);
        } catch (error) {
            console.error('Auteur niet gevonden.');
            toggleError(true);
        } finally {
            toggleLoading(false);
        }
    }


    useEffect(() => {
        if (Object.keys(individualBook).length > 0) {
            void getIndividualAuthor(individualBook.authorId);
        }
    }, [individualBook.authorId]);


    async function getIndividualGenre(id) {
        try {
            toggleLoading(true);

            toggleError(false);

            const resultIndividualGenre = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/genres/${id}`, {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            });
            setIndividualGenre(resultIndividualGenre?.data?.name);
        } catch (error) {
            console.error('Genre niet gevonden.');
            toggleError(true);
        } finally {
            toggleLoading(false);
        }
    }

    useEffect(() => {
        if (Object.keys(individualBook).length > 0) {
            void getIndividualGenre(individualBook.genreId);
        }
    }, [individualBook.genreId]);


    async function getIndividualReviews(id) {
        try {
            toggleLoading(true);

            toggleError(false);

            const resultIndividualReviews = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/books/${id}/reviews`, {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            });
            setIndividualReview(resultIndividualReviews?.data);
        } catch (error) {
            console.error('Reviews niet gevonden.')
            toggleError(true);
        } finally {
            toggleLoading(false);
        }
    }

    useEffect(() => {
        void getIndividualReviews(id);
    }, [id]);


    async function getAllMembers() {
        try {
            toggleLoading(true);

            toggleError(false);

            const resultAllMembers = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/members`, {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            });
            setAllMembers(resultAllMembers.data);
        } catch (error) {
            console.error('Onbekend lid');
            toggleError(true);
        } finally {
            toggleLoading(false);
        }
    }

    useEffect(() => {
        void getAllMembers();
    }, []);


    async function checkBookStatus(memberId) {

        try {
            const resultReadList = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/users/${memberId}/readList`, {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            });

            const resultCurrentlyReadingList = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/users/${memberId}/currentlyReadingList`, {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            });

            const resultReadListItems = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/readList/1/readListItem
`, {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            });
            setReadListItems(resultReadListItems?.data);
            console.log("Items: ", resultReadListItems?.data);

            const myReadList = resultReadList?.data[0];
            setReadList(myReadList);
            console.log("gelezen boeken: ", myReadList);

            const resultCurrentlyReadingListItems = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/currentlyReadingList/1/currentlyReadingItem`, {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            });
            setCurrentlyReadingListItems(resultCurrentlyReadingListItems?.data);
            console.log("Items: ", resultCurrentlyReadingListItems?.data);

            const myCurrentlyReadingList = resultCurrentlyReadingList?.data[0];
            setCurrentlyReadingList(myCurrentlyReadingList);
            console.log("op dit moment aan het lezen: ", myCurrentlyReadingList);

            const isRead = readListItems?.some(book => book.bookId == id);
            const isCurrentlyReading = currentlyReadingListItems?.some(book => book.bookId == id)


            if (isRead) {
                setIndividualMember({ status: 'Gelezen'} );
                setSelectedStatus('read');
            } else if (isCurrentlyReading) {
                setIndividualMember({ status: 'Aan het lezen' });
                setSelectedStatus('current');
            } else {
                setIndividualMember({ status: 'Ongelezen' });
                    setSelectedStatus('unread');
            }
        } catch (error) {
            console.error('Fout bij het ophalen.', error);
            void setBookStatus('Status onbekend.');
        }
    }

    useEffect(() => {
            if (allMembers.length > 0) {

                const loggedMember = allMembers.find((m) => {
                    return m.id === user?.id
                });

                if (loggedMember) {
                    void checkBookStatus(loggedMember.id);
                } else {
                    console.error("Geen match gevonden. Is 'user' wel gevuld?")
                }
            }
        }, [allMembers, user]
    );


    const handleStatusChange = async (e) => {
        const newStatus = e.currentTarget.value;
        if (!newStatus || newStatus === 'unread') return;

        const currentlyReadingBook = currentlyReadingListItems.find(b => b.bookId == id);
        const readBook = readListItems.find(b => b.bookId == id);


        try {
            toggleLoading(true);
            toggleError(false);

            if (currentlyReadingBook) {
                // TODO endpoint veranderen in currentlyReadingItem
                const deleteBookCurrentlyReading = await axios.delete(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/currentlyReadingItem/${currentlyReadingBook.id}`, {
                    headers: {
                        'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d',
                        'Authorization': `Bearer ${localStorage.getItem('JWT')}`
                    }
                });
            }

            if (readBook) {
                // TODO endpoint veranderen in readingItem
                const deleteBookRead = await axios.delete(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/readListItem/${readBook.id}`, {
                    headers: {
                        'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d',
                        'Authorization': `Bearer ${localStorage.getItem('JWT')}`
                    }
                });
            }

            if (newStatus === 'read') {
                // TODO endpoint veranderen in readingItem
                const moveReadBook = await axios.post(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/readListItem`, {
                    bookId: individualBook.id,
                    readListId: readList.id,
                }, {
                    headers: {
                        'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d',
                        'Authorization': `Bearer ${localStorage.getItem('JWT')}`
                    }
                });
            } else if (newStatus === 'current') {
                // TODO endpoint veranderen in currentlyReadingItem
                const moveCurrentlyReadingBook = await axios.post(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/currentlyReadingItem`, {
                    bookId: individualBook.id,
                    currentlyReadingListId: currentlyReadingList.id,
                }, {
                    headers: {
                        'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d',
                        'Authorization': `Bearer ${localStorage.getItem('JWT')}`
                    }
                });
        } else if (newStatus === 'unread') {
                return setIndividualMember({status: 'Ongelezen'});
                void selectedStatus('unread');
            }

            setSelectedStatus(newStatus);

            await checkBookStatus(user.id);
    } catch (error) {
        toggleError(true);
        console.error('API Fout:', error.response ? error.response.data : error.message);
        } finally {
            toggleLoading(false);
        }
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
            // console.log(ratingBook.data);
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

            <Navigation/>
            <div className="main-container-individual-book">
                <div className="container-image-review-individual-book">
                    <img src={`../${individualBook?.coverImage}`} alt={individualBook?.alt}/>
                    <BookRating
                        rating={rating}
                        setRating={setRating}
                        book={individualBook}
                        user={user}
                    />
                    <h6>Status: {individualMember.status}</h6>
                    <select name="book-status" id="book-status" className="select-current-book" value={selectedStatus} onChange={handleStatusChange} disabled={loading}>
                        <option value="">Verander leesstatus</option>
                        <option value="read">Gelezen</option>
                        <option value="current">Op dit moment aan het lezen</option>
                    </select>
                    <Link to={`/review/${individualBook?.id}`}
                          state={{
                              bookId: individualBook.id,
                              authorId: individualBook.authorId
                          }}>Schrijf een review</Link>
                </div>
                <div className="book-info-container-individual-book">
                    <h3>{individualBook?.title}</h3>
                    <h5>{individualAuthor?.name}</h5>
                    <p>{individualBook?.description}</p>
                    <p><b>Genres:</b> {individualGenre}</p>
                    <div className="reviews-individual-book">
                        <h4>Reviews</h4>
                        <ul className="list-reviews-individual-book">
                            {individualReview?.map((reviews) => {
                                const member = allMembers?.find((m) => m.id === reviews.userId);
                                return (
                                    <li key={reviews.review} className="list-item-reviews-individual-book">
                                        <p>{member ? member.name : "Lid onbekend."}</p>
                                        <p>{reviews.ratingId} hartjes</p>
                                        {/*<BookRating/>*/}
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