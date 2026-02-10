import styles from './Button.module.css';

function ButtonNavStart({typeOfButton, valueOfButton, nameOfButton, onClickOfButton, textOnButton}) {



    return (
        <button className={styles['nav-start-button']}
            type={typeOfButton}
            value={valueOfButton}
            name={nameOfButton}
            onClick={onClickOfButton}>
            {textOnButton}
        </button>
    )
}

export default ButtonNavStart;