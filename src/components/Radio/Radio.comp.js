import { useState } from 'react';

function Radio() {
  const [availability, setAvailability] = useState(true);
  const [flare, setFlare] = useState("schedule is active");

  const days = [
    { title: "Monday", status: false },
    { title: "Tuesday", status: false },
    { title: "Wednesday", status: false },
    { title: "Thursday", status: false },
    { title: "Friday", status: false },
    { title: "Saturday", status: false },
    { title: "Sunday", status: false }
  ]

  const renderedDays = days.map((day => {
    const checkboxHandler = () => {
      if (day.status == false) {
        day.status = true;
      } else {
        day.status = false;
      }
    }
    return (
      <label
        key={day.title}
        className="ma3">
        <div className="flex hover-bg-green br2">
          <p className="ph3 pv2 pointer grow w-80">
            {day.title}
          </p>
          <input
            className="pointer ma2 w1 bg-white"
            type="checkbox"
            onClick={checkboxHandler}
          />
        </div>
      </label>
    )
  }))

  const availabilityHandler = (event) => {
    if (event.target.value === "yes") {
      setAvailability(true);
      setFlare("schedule is active")
    } else {
      setAvailability(false);
      setFlare("schedule is inactive")
    }
  }

  return (
    <div>
      <h3>Radio</h3>

      <h4 className="mt5">
        Activate your schedule?
      </h4>
      <p className="mt2">
        (Note: To deactive your availability, select `No` on this form!)
      </p>
      <div className="flex mt2">
        <label className="flex">
          <p className="pa2">
            Yes
          </p>
          <input
            className="pointer w1"
            name="availability"
            value="yes"
            type="radio"
            onClick={availabilityHandler}
          />
        </label>
        <label className="flex">
          <p className="pa2">
            No
          </p>
          <input
            className="pointer w1"
            name="availability"
            value="no"
            type="radio"
            onClick={availabilityHandler}
          />
        </label>
      </div>

      <div className="pointer ma5 ph4 pv2 grow white-80 bg-purple br4 w5">
        <p className="f4 ma3">{flare}</p>
        {availability && renderedDays}
      </div>

    </div>
  )
}

export default Radio;