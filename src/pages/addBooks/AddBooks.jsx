import './AddBooks.css';
import Navigation from '../../navigation/Navigation.jsx';
import axios from 'axios';
import {useState} from 'react';

function AddBooks() {

    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);
    const [wrongTitle, setWrongTitle] = useState('');
    const [query, setQuery] = useState('');

    //helper functie schrijven spatie vervangen voor + teken
    // template literals

    async function searchBooks() {
        try {
            const resultBookSearch = await axios.get('https://novi-backend-api-wgsgz.ondigitalocean.app/api/books', {
                'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
            });
            console.log(resultBookSearch);
            // setCountrySearch(resultBookSearch.data[0]);
        } catch (error) {
            console.error(error);
            // toggleError(true);
            // setWrongName(query);
        } finally {
            toggleLoading(false);
        }
    }

    const handleSearch = (event) => {
        event.preventDefault();
        searchBooks('');
        setQuery('');
    }

    return (
        <>
            <Navigation/>

            <form>
                <label htmlFor="booksearch" onSubmit={handleSearch}>
                    <input
                        type="text"
                        id="booksearch"
                        name="booksearch"
                        size="50"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </label>
                <button
                    type="submit"
                    disabled={loading}
                >
                    Search
                </button>
            </form>

        </>
    )
}

export default AddBooks;