import './CurrentBook.css';
import ButtonSmall from '../button-small/ButtonSmall.jsx';

function CurrentBook() {

    return (
        <>

            <article className="article-box-current">
                <h3>Op dit moment aan het lezen</h3>
                {/*bookcover*/}
                <span className="span-box-current">
                    <h5>book title</h5>
                    <p>book author</p>
                    {/*<label htmlFor="pagesRead">Pagina's gelezen:</label>*/}
                    {/*<input type="number" id="pagesRead" value="0" min="0" onInput="updateProgress()"/>*/}
                    {/*<p>van <span id="totalPages">100</span> pagina's</p>*/}
                    {/*<progress id="myProgress" value="0" max="100"></progress>*/}

                    <div id="progress-bar">
                        <div
                            value="0"
                            max="100"
                            id="reading-progress"
                        ></div>
                    </div>
                    <label for htmlFor="pagesRead">Gelezen:</label>
                    <input type="number" id="pagesRead" placeholder="0" />
                    Totaal: ?
                    <ButtonSmall
                        idOnButton="updateBook"
                        textOnButton="Update"
                    />
                </span>
            </article>
        </>
    )
}

export default CurrentBook