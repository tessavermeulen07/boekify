import './Library.css';
import Navigation from '../../navigation/Navigation.jsx';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import add from '../../assets/icons/add.svg';
import BookRating from '../../components/book-rating/BookRating.jsx';
import TextLabel from '../../components/textLabel/TextLabel.jsx';
import ButtonNavStart from '../../components/button-nav-start/ButtonNavStart.jsx';
import ButtonSmall from '../../components/button-small/ButtonSmall.jsx';


function Library() {

    const [library, setLibrary] = useState(null);
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);
    const [libraryAuthor, setLibraryAuthor] = useState(null);
    const [query, setQuery] = useState('');
    const [wrongName, setWrongName] = useState('');
    const [genres, setGenres] = useState(null);
    const [ratings, setRatings] = useState(null);
    const [activeSort, setActiveSort] = useState('title');
    const [bookSearch, setBookSearch] = useState({});
    const [wrongTitle, setWrongTitle] = useState('');


    async function getBooks() {
        try {

            toggleLoading(true);

            toggleError(false);

            const resultBooks = await axios.get('https://novi-backend-api-wgsgz.ondigitalocean.app/api/books', {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            });

            const sortedInitial = resultBooks.data.sort((a, b) => {
                const titleA = a.title;
                const titleB = b.title;

                if (titleA < titleB) {
                    return -1;
                } else if (titleA > titleB) {
                    return 1;
                } else {
                    return 0;
                }
            });

            setLibrary(sortedInitial);
        } catch (e) {
            console.error(e);
            toggleError(true);
        } finally {
            toggleLoading(false);
        }
    }

    useEffect(() => {
        void getBooks();
    }, []);


    async function getAuthors() {
        try {

            toggleLoading(true);

            toggleError(false);

            const resultAuthors = await axios.get('https://novi-backend-api-wgsgz.ondigitalocean.app/api/authors', {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            })

            setLibraryAuthor(resultAuthors.data);

        } catch (e) {
            console.error(e);
            toggleError(true);
        } finally {
            toggleLoading(false);
        }
    }

    useEffect(() => {
        void getAuthors();
    }, []);


    async function getGenres() {
        try {

            toggleLoading(true);

            toggleError(false);

            const resultGenres = await axios.get('https://novi-backend-api-wgsgz.ondigitalocean.app/api/genres', {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            })

            setGenres(resultGenres.data);

        } catch (e) {
            console.error(e);
            toggleError(true);
        } finally {
            toggleLoading(false);
        }
    }

    useEffect(() => {
        void getGenres();
    }, []);


    const handleSort = (sortType) => {
        setActiveSort(sortType);
        if (!library) return;

        const sortedLibrary = [...library].sort((a, b) => {
            switch (sortType) {
                case 'author':
                    const authorA = libraryAuthor?.find(auth => auth.id === a.authorId)?.name || "";
                    const authorB = libraryAuthor?.find(auth => auth.id === b.authorId)?.name || "";
                    return authorA.localeCompare(authorB);
                case 'genre':
                    const genreA = genres?.find(g => g.id === a.genreId)?.name || "";
                    const genreB = genres?.find(g => g.id === b.genreId)?.name || "";
                    return genreA.localeCompare(genreB);
                case 'title':
                default:
                    return a.title.localeCompare(b.title);
            }
        });
        setLibrary(sortedLibrary);
    }

    async function searchBook() {
        try {
            toggleLoading(true);
            toggleError(false);
            setWrongTitle('');
            const resultSearchBook = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/books`, {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                },
            });

            const allBooks = resultSearchBook.data;


            const foundBook = allBooks.find((book) => {
                return book.title.toLowerCase() === query.toLowerCase();
            })

            if (foundBook) {
                setBookSearch(foundBook);

            } else {
                    console.error(error);
                    toggleError(true);
                    setWrongTitle(query);
                    setBookSearch({});
                }
            } catch (error) {
            console.error(error);
            toggleError(true);
        } finally {
            toggleLoading(false);
        }
    }



    const handleSearch = (e) => {
        e.preventDefault();
        searchBook();
        setQuery('');
    }

    return (
        <>
            <Navigation/>

            <div className="main-content-library">
                <div className="left-content-library">
                    <div className="add-book-library">
                        <img src={add} alt="plus-icon"/> <Link to="/add-books">Boek toevoegen</Link>
                    </div>
                    <div className="inside-left-content-library">
                        <h3>Sorteer op</h3>
                        <a
                            href="#titel"
                            onClick={() => handleSort('title')}
                            style={{cursor: 'pointer'}}
                            className={activeSort === 'title' ? 'active-link' : 'nonactive-link'}
                        >Titel A-Z</a>
                        <a
                            href="#auteur"
                            onClick={() => handleSort('author')}
                            style={{cursor: 'pointer'}}
                            className={activeSort === 'author' ? 'active-link' : 'nonactive-link'}
                        >Auteur A-Z</a>
                        <a
                            href="#genre"
                            onClick={() => handleSort('genre')}
                            style={{cursor: 'pointer'}}
                            className={activeSort === 'genre' ? 'active-link' : 'nonactive-link'}
                        >Genre A-Z</a>
                    </div>
                    <div className="inside-left-content-library">
                        <h3>zoek een boek</h3>
                        <form onSubmit={handleSearch}>
                            <TextLabel
                                labelHTML="searchBook"
                                typeOfLabel="text"
                                idOfLabel="book"
                                nameOfLabel="book"
                                valueOfLabel={query}
                                onChangeOfLabel={(e) => setQuery(e.target.value)}
                            />
                            <ButtonSmall
                                typeOfButton="submit"
                                disabled={loading}
                                textOnButton="zoek"
                            />
                        </form>
                    </div>
                </div>
                <div className="right-content-library">

                    <div className="inside-right-content-library">
                        <div className="search-book">
                            <span>{error && <p> {wrongTitle} bestaat niet. Probeer het nog een keer.</p>}</span>

                            {Object.keys(bookSearch).length > 0 &&
                                <span>
                                <img src={bookSearch.coverImage} alt={bookSearch.alt} className="search-book-img"/>
                                <Link to={`/books/${bookSearch.id}`}><h4>{bookSearch.title}</h4></Link>
                            </span>
                            }
                        </div>

                        <h3 className="h3-library">Library</h3>
                        <ul>
                            {library?.map((books) => {
                                    const author = libraryAuthor?.find((a) => a.id === books.authorId);
                                    const genre = genres?.find((g) => g.id === books.genreId);
                                    return (
                                        <li key={books.title} className="list-books-library">
                                            <img src={books.coverImage} alt={books.alt}/>
                                            <div className="main-books-library">
                                                <div className="books-library">
                                                    <Link to={`/books/${books.id}`}><h3
                                                        className="title-books-library">{books.title}</h3></Link>
                                                    <h5 className="author-books-library">{author ? author.name : "Auteur laden..."}</h5>
                                                    <p className="author-books-library">{genre ? genre.name : "Genre laden..."}</p>
                                                </div>
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