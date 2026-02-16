import './Library.css';
import Navigation from '../../navigation/Navigation.jsx';
import axios from 'axios';
import {useEffect, useState} from 'react';


function Library() {

    const [library, setLibrary] = useState(null);
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);

    async function getBooks() {
        try {
            const resultBooks = await axios.get('https://novi-backend-api-wgsgz.ondigitalocean.app/api/books', {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            });

            resultBooks.data.sort((a, b) => {
                return a - b
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



    return (
        <>
            <Navigation/>

            <div className="main-content-library">
                <div className="left-content-library">
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
                    {/*<div className="inside-right-content-library">*/}
                    {/*    <span className="banner-library">A-balk</span>*/}
                    {/*    <span className="list-books-library">Book 1</span>*/}
                    {/*    <span className="list-books-library">Book 2</span>*/}
                    {/*</div>*/}
                    {/*<div className="inside-right-content-library">*/}
                    {/*    <span className="banner-library">B-balk</span>*/}
                    {/*    <span className="list-books-library">Book 1</span>*/}
                    {/*</div>*/}
                    <div className="inside-right-content-library">
                            <ul>
                                {library?.map((books) => {
                                    return (
                                        <li key={books.title} className="list-books-library">
                                            <p>{books.title}</p>
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