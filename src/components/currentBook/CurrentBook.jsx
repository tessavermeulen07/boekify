import './CurrentBook.css';
import ButtonSmall from '../button-small/ButtonSmall.jsx';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext.jsx';





function CurrentBook() {

    const [currentRead, setCurrentRead] = useState([]);
    const [getBooks, setGetBooks] = useState({});
    const [getAuthors, setGetAuthors] = useState({});
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);
    const { isAuth, user } = useContext(AuthContext);




    async function getCurrentRead(id) {
        console.log('ik ga nu ophalen voor ID:', id);
        try {
            toggleLoading(true);

            toggleError(false);

            const resultCurrentRead = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/users/${user,id}/currentlyReadingList`, {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            });
            setCurrentRead(resultCurrentRead?.data);
        } catch (error) {
            console.error('De boeken zijn niet gevonden.');
            toggleError(true);
        } finally {
            toggleLoading(false);
        }
    }

    useEffect(() => {
        void getCurrentRead(user.id);
    }, [user.id]);


    async function books() {
        try {
            toggleLoading(true);

            toggleError(false);

            const resultBooks = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/books`, {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            });
            setGetBooks(resultBooks);
        } catch (error) {
            console.error('Geen boeken gevonden');
            toggleError(true);
        } finally {
            toggleLoading(false);
        }
    }

    useEffect(() => {
        void books();
    }, []);


    async function authors() {
        try {
            toggleLoading(true);

            toggleError(false);

            const resultAuthors = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/authors`, {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            });
            setGetAuthors(resultAuthors);
        } catch (error) {
            console.error('Geen auteurs gevonden');
            toggleError(true);
        } finally {
            toggleLoading(false);
        }
    }

    useEffect(() => {
        void authors();
    }, []);



    return (
        <>
            <article className="article-box-current">
                <h3>Op dit moment aan het lezen</h3>
                <span className="span-box-current">
                    <ul className="list-current-book">
                        {currentRead?.map((currentlyReading) => {
                                const bookTitle = getBooks?.data?.find((b) => b.id === currentlyReading.bookId);
                                const author = getAuthors?.data?.find((a) => a.id === currentlyReading.authorId);

                                return (
                                    <li
                                        key={currentlyReading?.bookId}
                                        className="list-items-current-book"
                                    >
                                        <img src={bookTitle?.coverImage} alt={currentlyReading.alt}/>
                                        <div>
                                            <Link to={`/books/${currentlyReading.bookId}`}><h5>{bookTitle ? bookTitle.title : "Geen boek"}</h5></Link>
                                            <p>{author ? author.name : "Geen auteur"}</p>
                                        </div>
                                    </li>
                                );
                            }
                        )}
                    </ul>
                </span>
            </article>
        </>
    )
}

export default CurrentBook;