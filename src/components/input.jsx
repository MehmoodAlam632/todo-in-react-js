export default function Input(props) {
    const { value, onChange, placeHolder, type, inputName } = props;
    return (
        <div class>
            <br />
            <label htmlFor="text">{inputName}
            </label>
            <input
                type={type}
                className="form-control"
                id="exampleFormControlInput1"
                placeholder={placeHolder}
                value={value}
                onChange={onChange}
            />
        </div>
    )
} 