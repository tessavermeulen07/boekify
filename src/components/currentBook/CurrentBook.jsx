import './CurrentBook.css';

function CurrentBook() {
    return (
        <>

            <article className="article-box-current">
                <h3>Op dit moment aan het lezen</h3>
                {/*bookcover*/}
                <span className="span-box-current">
                    <h5>book title</h5>
                    <p>book author</p>
                    <p>voortgang</p>
                    <p>button update voortgang</p>
                </span>
            </article>
        </>
    )
}

export default CurrentBook