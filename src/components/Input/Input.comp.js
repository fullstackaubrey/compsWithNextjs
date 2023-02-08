import { useState } from 'react';

function Input() {
  const [input, setInput] = useState('');
  const [save, setSave] = useState(false);
  const [saveButton, setButton] = useState("Save Changes");

  const saveHandler = (event) => {
    if (save === false) {
      setButton("Update Info")
    } else {
      setButton("Save Changes")
    }

    setSave(!save);
    console.log("Saved")
  }

  const inputHandler = (event) => {
    setInput(event.target.value);
  }

  console.log("input", input)

  return (
    <div>
      <h3>Input</h3>
      <div className="br4 ma5 pa4 black bg-light-red w-50">
        <label className="ma3">
          <p className="f4 pa2">First name:</p>
          <input
            className="f4 dark-gray bg-light-gray"
            type="text"
            name="firstName"
            onChange={inputHandler}
            readOnly={save} />
        </label>

        <label className="ma3">
          <p className="f4 pa2">Last name:</p>
          <input
            className="f4 dark-gray bg-light-gray"
            type="text"
            name="lastName"
            onChange={inputHandler}
            readOnly={save} />
        </label>

        <label className="ma3">
          <p className="f4 pa2">Email address:</p>
          <input
            className="f4 dark-gray bg-light-gray"
            type="text"
            name="email"
            onChange={inputHandler}
            readOnly={save} />
        </label>

        <input
          className="flex dim pointer br2 mv3 pa2 bg-purple hover-bg-dark-green"
          type="submit"
          value={saveButton}
          onClick={saveHandler}
        />
      </div>
    </div>
  )
}

export default Input;