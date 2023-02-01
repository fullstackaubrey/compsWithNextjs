import {useState} from 'react';

// NOT DONE WITH CHALLENGE, MUST SLEEP! 

function Radio() {
  const [days, setDays] = useState(false);
  const radioHandler = () => {
    setDays(!setDays)
  }

  const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

  const renderedDays = daysOfTheWeek.map((day) => {
    return (
        <label 
        key={day.valueOf()} 
        className="ma3">
          <p className="pa2 pointer grow">
            {day.valueOf()}
          </p>
          <input
          className="pointer"
          type="radio"
          value={day.valueOf()}
          onChange={radioHandler}
          />
        </label>
    )
  })

  console.log(renderedDays);

  return (
    <div>
      <h3>Radio</h3>
        <div className="ma5 white-80">

          {renderedDays}

            {/* <label className="ma3">
              <h2 className="pa2">
                Availability:
              </h2>

              <p className="pa2">
                Monday
              </p>
              <input className="pointer dim" type="radio" value="Monday" />

              <p className="pa2">
                Tuesday
              </p>
              <input className="pointer dim" type="radio" value="Tuesday" />

              <p className="pa2">
                Wednesday
              </p>
              <input className="pointer dim" type="radio" value="Wednesday" />

              <p className="pa2">
                Thursday
              </p>
              <input className="pointer dim" type="radio" value="Thursday" />

              <p className="pa2">
                Friday
              </p>
              <input className="pointer dim" type="radio" value="Friday" />

              <p className="pa2">
                Saturday
              </p>
              <input className="pointer dim" type="radio" value="Saturday" />

              <p className="pa2">
                Sunday
              </p>
              <input className="pointer dim" type="radio" value="Sunday" />

            </label> */}

        </div>
    </div>
  )
}

export default Radio;