import './TextLabel.css';

function TextLabel({
                       labelHTML,
                       startTextLabel,
                       typeOfLabel,
                       idOfLabel,
                       nameOfLabel,
                       valueOfLabel,
                       onChangeOfLabel
                   }) {

    return (
        <div className="container-text-label-register">
            <label className="text-label-register"
                htmlFor={labelHTML}>
                <p>{startTextLabel}</p>
                <input className="text-input-register"
                    type={typeOfLabel}
                    id={idOfLabel}
                    name={nameOfLabel}
                    value={valueOfLabel}
                    onChange={onChangeOfLabel}/>
            </label>
        </div>
    )
}

export default TextLabel;