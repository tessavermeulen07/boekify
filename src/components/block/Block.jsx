import './Block.css';
import ButtonSmall from '../button-small/ButtonSmall.jsx';


function Block() {
    return (
        <>
            <div className="block-item">
                <h2>Title</h2>
                <ButtonSmall
                    typeOfButton="button"
                    textOnButton="test"
                />
                <div>Inhoud</div>
            </div>
        </>
    )
}

export default Block;