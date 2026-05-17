import './Quotes.css';
import Navigation from '../../navigation/Navigation.jsx';
import axios from 'axios';
import {useState, useEffect} from "react";

function Quotes() {

    //TODO Ik was begonnen met deze functie, maar omdat andere functies niet goed werkten en er dingen aangepast moesten
    //TODO worden, heb ik deze pagina onhold gezet. Ik wilde hem niet verwijderen uit de folder, want dan was ik alles
    //TODO kwijt. Dit is een limitation die ik later nog wil gaan toevoegen.

    const [quotes, setQuotes] = useState('');

    async function getQuotes() {
        try {
            const resultGetQuotes = await axios.get('https://novi-backend-api-wgsgz.ondigitalocean.app/api/quotes', {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            });
            setQuotes(resultGetQuotes);

        } catch (error) {
            'Quotes niet gevonden.'
            console.error('Quotes niet gevonden.');
        }
    }

    useEffect(() => {
        void getQuotes();
    }, []);

    return (
        <>

            <Navigation/>

            {/*<div>*/}
            {/*    <h2>Quotes</h2>*/}
            {/*    <ul>*/}
            {/*        <li key={quotes.data.quote}>*/}
            {/*            <p>{quotes.data.quote}</p>*/}
            {/*        </li>*/}
            {/*        )*/}
            {/*        })}*/}
            {/*    </ul>*/}
            {/*</div>*/}

        </>
    )

}

export default Quotes;