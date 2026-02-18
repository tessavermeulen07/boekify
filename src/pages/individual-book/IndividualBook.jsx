import './IndividualBook.css';
import axios from 'axios';
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Navigation from '../../navigation/Navigation.jsx';

function IndividualBook() {

    const [individualBook, setIndividualBook] = useState('');
    const [individualAuthor, setIndividualAuthor] = useState('');
    const [individualGenre, setIndividualGenre] = useState('');



    async function getIndividualBook() {
        try {
            const resultIndividualBook = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/books/5`, {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            });
            setIndividualBook(resultIndividualBook.data);
            console.log(resultIndividualBook.data);
        } catch (error) {
            `Het boek is niet gevonden.`
            console.error('Het boek is niet gevonden.')
        }
    }

    useEffect(() => {
        void getIndividualBook();
    }, []);


    async function getIndividualAuthor(id) {
        try {
            const resultIndividualAuthor = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/authors/4`, {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            });
            setIndividualAuthor(resultIndividualAuthor);
            console.log(resultIndividualAuthor);
        } catch (error) {
            `Auteur niet gevonden.`
            console.error('Auteur niet gevonden.');
        }
    }

    useEffect(() => {
        void getIndividualAuthor();
    }, []);


    async function getIndividualGenre(id) {
        try {
            const resultIndividualGenre = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/genres/5`, {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            });
            setIndividualGenre(resultIndividualGenre.data.name);
            console.log(resultIndividualGenre.data.name);
        } catch (error) {
            `Genre niet gevonden.`
            console.error('Genre niet gevonden');
        }
    }

    useEffect(() => {
        void getIndividualGenre();
    }, []);




    return (
        <>

            <Navigation />
            <div className="main-container-individual-book">
                <img src={individualBook.coverImage} alt={individualBook.alt} />
                <div className="book-info-container-individual-book">
                    <h3>{individualBook.title}</h3>
                    <h5>{individualAuthor?.data?.name}</h5>
                    <p>{individualBook.description}</p>
                    <p><b>Genres:</b> {individualGenre}</p>
                </div>
            </div>

        </>
    )
}

export default IndividualBook;