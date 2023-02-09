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
      <header>Input</header>
      <section>
        <label>
          <p>First name:</p>
          <input
            type="text"
            name="firstName"
            onChange={inputHandler}
            readOnly={save} />
        </label>
        <label>
          <p>Last name:</p>
          <input
            type="text"
            name="lastName"
            onChange={inputHandler}
            readOnly={save} />
        </label>
        <label>
          <p>Email address:</p>
          <input
            type="text"
            name="email"
            onChange={inputHandler}
            readOnly={save} />
        </label>
        <input
          type="submit"
          value={saveButton}
          onClick={saveHandler}
        />
      </section>
    </div>
  )
}

export default Input;