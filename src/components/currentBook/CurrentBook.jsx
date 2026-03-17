import './CurrentBook.css';
import ButtonSmall from '../button-small/ButtonSmall.jsx';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext.jsx';




function CurrentBook() {

    const [currentRead, setCurrentRead] = useState([]);
    const [getBooks, setGetBooks] = useState({});
    const [getAuthors, setGetAuthors] = useState({});
    const { id } = useParams();
    const { isAuth } = useContext(AuthContext);




    async function getCurrentRead(id) {
        try {
            const resultCurrentRead = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/members/${id}/currentlyReadingList`, {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            });
            setCurrentRead(resultCurrentRead?.data);
        } catch (error) {
            console.error('De boeken zijn niet gevonden.');
        }
    }

    useEffect(() => {
        void getCurrentRead(id);
    }, [id]);


    async function books() {
        try {
            const resultBooks = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/books`, {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            });
            setGetBooks(resultBooks);
        } catch (error) {
            console.error('Geen boeken gevonden');
        }
    }

    useEffect(() => {
        void books();
    }, []);


    async function authors() {
        try {
            const resultAuthors = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/authors`, {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            });
            setGetAuthors(resultAuthors);
        } catch (error) {
            console.error('Geen auteurs gevonden');
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
                                            <h5>{bookTitle ? bookTitle.title : "Geen boek"}</h5>
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