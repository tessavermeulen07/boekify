import './AddBooks.css';
import Navigation from '../../navigation/Navigation.jsx';
import {useState, useEffect} from 'react';
import TextLabel from '../../components/textLabel/TextLabel.jsx';
import ButtonNavStart from '../../components/button-nav-start/ButtonNavStart.jsx';
import axios from 'axios';


function AddBooks() {

    const [titleOfBook, setTitleOfBook] = useState('');
    const [authorOfBook, setAuthorOfBook] = useState('');
    const [isbnOfBook, setIsbnOfBook] = useState('');
    const [genreOfBook, setGenreOfBook] = useState('');
    const [priceOfBook, setPriceOfBook] = useState('');
    const [description, setDescription] = useState('');
    const [newBookId, setNewBookId] = useState(null);
    const [error, setError] = useState(false);
    const [succes, setSucces] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!titleOfBook || !authorOfBook || !isbnOfBook || !genreOfBook || !priceOfBook || !description) {
            alert("Vul alle verplichte velden in.");
            return;
        }

        setSucces(false);
        try {
            const searchResponseAuthor = await axios.get('https://novi-backend-api-wgsgz.ondigitalocean.app/api/authors', {
                params: {
                    name: authorOfBook
                },
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            let finalAuthorId

            if (searchResponseAuthor.data && searchResponseAuthor.data.length > 0) {
                finalAuthorId = searchResponseAuthor.data[0].id;
            } else {
                const newAuthor = await axios.post('https://novi-backend-api-wgsgz.ondigitalocean.app/api/authors', {
                    name: authorOfBook
                }, {
                    headers: {
                        'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d',
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                });
                finalAuthorId = newAuthor.data.id;
            }

            let finalGenreId;

            const searchGenre = await axios.get('https://novi-backend-api-wgsgz.ondigitalocean.app/api/genres', {
                params: {name: genreOfBook},
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            if (searchGenre.data && searchGenre.data.length > 0) {
                finalGenreId = searchGenre.data[0].id;
            } else {
                const newGenre = await axios.post('https://novi-backend-api-wgsgz.ondigitalocean.app/api/genres', {
                    name: genreOfBook
                }, {
                    headers: {
                        'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d',
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                });
                finalGenreId = newGenre.data.id;
            }

            if (!finalAuthorId || !finalGenreId) {
                console.error("Auteur ID of Genre ID ontbreekt!");
                return;
            }

            console.log("Versturen met:", {
                "author": finalAuthorId,
                "genre": finalGenreId,
                "price": priceOfBook,
            })

            const newBook = await axios.post('https://novi-backend-api-wgsgz.ondigitalocean.app/api/books', {
                "title": titleOfBook,
                "authorId": Number(finalAuthorId),
                "isbn": isbnOfBook,
                "genreId": Number(finalGenreId),
                "price": Number(priceOfBook.replace(',', '.')),
                "description": description
            }, {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }

            });
            setSucces(true);
        } catch (error) {
            console.error(error);
            setError(true);
        } finally {
            setSucces(false);
        }
    }


    //     if (!titleOfBook && !authorOfBook && !isbnOfBook && !genreOfBook && !priceOfBook && !description) {
    //         setError('Zorg dat alle velden zijn ingevuld!');
    //     } else setError(error);
    //     console.log('Boek toegevoegd');
    //
    //     try {
    //         const post = await axios.post('https://novi-backend-api-wgsgz.ondigitalocean.app/api/books', {
    //             "title": `${titleOfBook}`,
    //             "author": `${authorOfBook}`,
    //             "isbn": `${isbnOfBook}`,
    //             "genre": `${genreOfBook}`,
    //             "price": `${priceOfBook}`,
    //             "description": `${description}`
    //         }, {
    //             headers: {
    //                 'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
    //             }
    //         });
    //         console.log('Boek toegevoegd', post.data);
    //         setNewBookId(post.data.id);
    //         setSucces(true);
    //     } catch (error) {
    //         console.log('Er ging iets mis');
    //         setError('Het is niet gelukt om het boek toe te voegen.');
    //     }
    // }

    return (
        <>
            <Navigation/>
            <div>
                <h2>Voeg een boek toe</h2>
            </div>
            {succes === true ? (
                <section>
                    <p>Het boek is succesvol toegevoegd.</p>
                </section>
            ) : (
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
                                  onChange={(e) => setDescription(e.target.value)}
                                  rows="20"
                        ></textarea>
                    </label>
                    <ButtonNavStart
                        typeOfButton="submit"
                        valueOfButton="send"
                        nameOfButton="add-book"
                        onClickOfButton={handleSubmit}
                        textOnButton="Voeg toe"
                    />
                </form>
            )}

        </>
    )
}

export default AddBooks;