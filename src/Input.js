import React from 'react'

function Input() {
    return (
        <div className="input">
            <form className="form__input">
                <label for="file">Select File</label>
                <input type="file" id="file" name="file"></input>
            </form>
        </div>
    )
}

export default Input;