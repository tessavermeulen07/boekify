import './Library.css';
import Navigation from '../../navigation/Navigation.jsx';

function Library() {

    // async function getBooks() {
    //     const resultBooks =
    // }

    return (
        <>
            <Navigation />

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
                    <div className="banner-library">A-balk</div>
                </div>
            </div>

        </>
    )
}

export default Library;