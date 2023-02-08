import { useState } from 'react';

function Input() {
  const [input, setInput] = useState('');

  const inputHandler = () => {
    setInput('');
  }

  console.log("input", input)

  return (
    <div>
      <h3>Input</h3>
      <div className="ma5 white-80">


        <label className="ma3">
          <p className="pa2">First name:</p>
          <input className="gray" type="text" name="firstName" value="defaultFirst" onChange={inputHandler} />
        </label>

        <label className="ma3">
          <p className="pa2">Last name:</p>
          <input className="gray" type="text" name="lastName" value="defaultLast" onChange={inputHandler} />
        </label>

        <label className="ma3">
          <p className="pa2">Email address:</p>
          <input className="gray" type="text" name="email" value="defaultEmail" onChange={inputHandler} />
        </label>

        <input className="pointer dim" type="submit" value="Save Changes" />


      </div>
    </div>
  )
}

export default Input;