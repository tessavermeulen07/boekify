import './Library.css';
import Navigation from '../../navigation/Navigation.jsx';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import add from '../../assets/icons/add.svg';



function Library() {

    const [library, setLibrary] = useState(null);
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);
    const [libraryAuthor, setLibraryAuthor] = useState(null);

    async function getBooks() {
        try {
            const resultBooks = await axios.get('https://novi-backend-api-wgsgz.ondigitalocean.app/api/books', {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            });

            resultBooks.data.sort((a, b) => {
                const titleA = a.title;
                const titleB = b.title;

                if (titleA < titleB) {
                    return -1;
                } else if (titleA > titleB) {
                    return 1;
                } else {
                    return 0;
                }
                // return a.title - b.title
            })

            setLibrary(resultBooks.data);
            console.log(resultBooks);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        void getBooks();
    }, []);


    async function getAuthors() {
        try {
            const resultAuthors = await axios.get('https://novi-backend-api-wgsgz.ondigitalocean.app/api/authors', {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            })

            setLibraryAuthor(resultAuthors.data);
            console.log(resultAuthors);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        void getAuthors();
    }, []);


    return (
        <>
            <Navigation/>

            <div className="main-content-library">
                <div className="left-content-library">
                    <div className="add-book-library">
                        <img src={add} alt="plus-icon" /> <Link to="/add-books">Boek toevoegen</Link>
                    </div>
                    <div className="inside-left-content-library">
                        <h3>Persoonlijke Filters</h3>
                        <p>Link</p>
                        <p>Link</p>
                    </div>
                    <div className="inside-left-content-library">
                        <h3>Boek Filters</h3>
                        <p>Link</p>
                        <p>Link</p>
                    </div>

                </div>
                <div className="right-content-library">
                    <div className="inside-right-content-library">
                        <ul>
                            {library?.map((books) => {
                                    const author = libraryAuthor?.find((a) => a.id === books.authorId);
                                    return (
                                            <li key={books.title} className="list-books-library">
                                                <img src={books.coverImage} alt={books.alt} />
                                                <div className="books-library">
                                                    <p className="title-books-library">{books.title}</p>
                                                    <p className="author-books-library">{author ? author.name : "Auteur laden..."}</p>
                                                </div>
                                            </li>
                                    );
                                }
                            )}
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Library;