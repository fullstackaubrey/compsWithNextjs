import { useState } from 'react';

function Radio() {
  const [availability, setAvailability] = useState(true);

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
        <p className="pa2 pointer grow">
          {day.title}
        </p>
        <input
          className="pointer"
          type="checkbox"
          onClick={checkboxHandler}
        />
      </label>
    )
  }))

  const availabilityHandler = (event) => {
    if (event.target.value === "yes") {
      setAvailability(true);
    } else {
      setAvailability(false);
    }
  }

  return (
    <div>
      <h3>Radio</h3>

      <h4 className="mt5">
        Would you like to make your availability Active & Visibile?
      </h4>
      <p className="mt2">
        (Note: If you would like to make your availability Inactive & Hidden, please select `No` on this form!)
      </p>
      <div className="flex mt2">
        <label className="flex">
          <p className="pa2">
            Yes
          </p>
          <input
            className="pointer"
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
            className="pointer"
            name="availability"
            value="no"
            type="radio"
            onClick={availabilityHandler}
          />
        </label>
      </div>

      <div className="ma5 white-80">
        {availability && renderedDays}
      </div>

    </div>
  )
}

export default Radio;