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
      <header>Radio</header>

      <section>
        <h4>Activate your schedule?</h4>
        <p>(Note: To deactive your availability, select `No` on this form!)</p>
        <label>
          <p>Yes</p>
          <input
            className="pointer w1"
            name="availability"
            value="yes"
            type="radio"
            onClick={availabilityHandler}
          />
        </label>
        <label className="flex">
          <p>No</p>
          <input
            className="pointer w1"
            name="availability"
            value="no"
            type="radio"
            onClick={availabilityHandler}
          />
        </label>
      </section>

      <section>
        <p>{flare}</p>
        {availability && renderedDays}
      </section>

    </div>
  )
}

export default Radio;