import './Block.css';
import ButtonSmall from '../button-small/ButtonSmall.jsx';


function Block({ title, content, blockTextButton }) {
    return (
        <>
            <div className="block-item">
                <div className="block-item-header">
                    <h3>{title}</h3>
                    {/*<ButtonSmall*/}
                    {/*    typeOfButton="button"*/}
                    {/*    textOnButton={blockTextButton}*/}
                    {/*/>*/}
                </div>
                <div className="block-item-content">{content}</div>
            </div>
        </>
    )
}

export default Block;