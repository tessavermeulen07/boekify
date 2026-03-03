import './CurrentBook.css';
import ButtonSmall from '../button-small/ButtonSmall.jsx';
import {useState, useEffect} from 'react';
import axios from 'axios';

function CurrentBook() {

    const [currentRead, setCurrentRead] = useState('');

    async function getCurrentRead() {
        try {
            const resultCurrentRead = await axios.get('https://novi-backend-api-wgsgz.ondigitalocean.app/api/members/1/currentlyReadingList', {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            });
            setCurrentRead(resultCurrentRead?.data);
            console.log(resultCurrentRead);
        } catch (error) {
            'De boeken zijn niet gevonden.'
            console.error('De boeken zijn niet gevonden.');
        }
    }

    useEffect(() => {
        void getCurrentRead();
    }, []);

    return (
        <>
            <article className="article-box-current">
                <h3>Op dit moment aan het lezen</h3>
                <span className="span-box-current">
                {currentRead.filter}

                    book author
                    {/*<label htmlFor="pagesRead">Pagina's gelezen:</label>*/}
                    {/*<input type="number" id="pagesRead" value="0" min="0" onInput="updateProgress()"/>*/}
                    {/*<p>van <span id="totalPages">100</span> pagina's</p>*/}
                    {/*<progress id="myProgress" value="0" max="100"></progress>*/}

                    {/*<div id="progress-bar">*/}
                    {/*    <div*/}
                    {/*        value="0"*/}
                    {/*        max="100"*/}
                    {/*        id="reading-progress"*/}
                    {/*    ></div>*/}
                    {/*</div>*/}
                    {/*<label for htmlFor="pagesRead">Gelezen:*/}
                    {/*<input type="number" id="pagesRead" placeholder="0" />*/}
                    {/*Totaal: ?</label>*/}
                    {/*<ButtonSmall*/}
                    {/*    idOnButton="updateBook"*/}
                    {/*    textOnButton="Update"*/}
                    {/*/>*/}
                </span>
            </article>
        </>
    )
}

export default CurrentBook