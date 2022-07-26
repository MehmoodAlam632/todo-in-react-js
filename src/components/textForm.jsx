import React, {useState} from "react"
export default function TextForm(props) {
    const clickUpperCase = () => {
        text.toUpperCase();
    }
    const [text, setText] = useState("Enter text here");
    return (
        <div className="container">
            <div className="mt-5">
                <h3>{props.heading}</h3>
                <label for="exampleFormControlTextarea1" className="form-label"><p>Example Text</p></label>
                <textarea className="form-control"  value={text} id="exampleFormControlTextarea1" rows="5"></textarea>
            </div>
            <button type="button" className="btn btn-primary mt-2 " onClick={clickUpperCase}>Convert to Upper case</button>

        </div>

    )
}