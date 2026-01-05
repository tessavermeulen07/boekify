import './Button.css';

function Button({typeOfButton, valueOfButton, nameOfButton, onClickOfButton, textOnButton}) {
    return (
        <button
            type={typeOfButton}
            value={valueOfButton}
            name={nameOfButton}
            onClick={onClickOfButton}>
            {textOnButton}
        </button>
    )
}

export default Button;