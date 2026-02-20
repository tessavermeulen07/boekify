import './AddBooks.css';
import Navigation from '../../navigation/Navigation.jsx';
import axios from 'axios';
import {useState} from 'react';
import TextLabel from '../../components/textLabel/TextLabel.jsx';
import ButtonNavStart from '../../components/button-nav-start/ButtonNavStart.jsx';

function AddBooks() {

    const [titleOfBook, setTitleOfBook] = useState('');
    const [authorOfBook, setAuthorOfBook] = useState('');
    const [isbnOfBook, setIsbnOfBook] = useState('');
    const [genreOfBook, setGenreOfBook] = useState('')
    const [priceOfBook, setPriceOfBook] = useState('');
    const [description, setDescription] = useState('');

    return (
        <>
            <Navigation/>
            <div>
                <h2>Voeg een boek toe</h2>
            </div>
            <form className="form-add-books">
                <TextLabel
                    startTextLabel="Titel"
                    typeOfLabel="text"
                    idOfLabel="title"
                    nameOfLabel="title"
                    valueOfLabel={titleOfBook}
                    onChangeOfLabel={(e) => setTitleOfBook(e.target.value)}
                />
                <TextLabel
                    startTextLabel="Auteur"
                    typeOfLabel="text"
                    idOfLabel="author"
                    nameOfLabel="author"
                    valueOfLabel={authorOfBook}
                    onChangeOfLabel={(e) => setAuthorOfBook(e.target.value)}
                />
                <TextLabel
                    startTextLabel="ISBN"
                    typeOfLabel="text"
                    idOfLabel="isbn"
                    nameOfLabel="isbn"
                    valueOfLabel={isbnOfBook}
                    onChangeOfLabel={(e) => setIsbnOfBook(e.target.value)}
                />
                <TextLabel
                    startTextLabel="Genre"
                    typeOfLabel="text"
                    idOfLabel="genre"
                    nameOfLabel="genre"
                    valueOfLabel={genreOfBook}
                    onChangeOfLabel={(e) => setGenreOfBook(e.target.value)}
                />
                {/*Of voor de genres een select menu maken met de ID's er al in, zodat dit makkelijker toegevoegd kan worden*/}
                <TextLabel
                    startTextLabel="Prijs"
                    typeOfLabel="number"
                    idOfLabel="price"
                    nameOfLabel="price"
                    valueOfLabel={priceOfBook}
                    onChangeOfLabel={(e) => setPriceOfBook(e.target.value)}
                />
                <label htmlFor="description" className="text-area-label-add-books">Beschrijving:
                <textarea className="text-area-add-books"
                          id="description"
                          name="description"
                          value={description}
                          onChange={(e) => setDescription((e.target.value))}
                          rows="10"
                          cols="120"
                ></textarea>
                </label>
                <ButtonNavStart
                    typeOfButton="send"
                    valueOfButton="send"
                    nameOfButton="add-book"
                    // onClickOfButton={}
                    textOnButton="Voeg toe"
                />
            </form>

        </>
    )
}

export default AddBooks;