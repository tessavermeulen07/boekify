import './Block.css';
import ButtonSmall from '../button-small/ButtonSmall.jsx';


function Block() {
    return (
        <>
            <div className="block-item">
                <div className="block-item-header">
                    <h2>Title</h2>
                    <ButtonSmall
                        typeOfButton="button"
                        textOnButton="test"
                    />
                </div>
                <div className="block-item-content">Inhoud</div>
            </div>
        </>
    )
}

export default Block;