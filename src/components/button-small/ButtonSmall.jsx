import styles from './ButtonSmall.module.css'

function ButtonSmall({typeOfButton, valueOfButton, nameOfButton, onClickOfButton, idOnButton, textOnButton}) {



    return (
        <button className={styles['button-small']}
                type={typeOfButton}
                value={valueOfButton}
                name={nameOfButton}
                onClick={onClickOfButton}
                id={idOnButton}>
            {textOnButton}
        </button>
    )
}

export default ButtonSmall;