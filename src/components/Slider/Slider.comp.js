import { useState, useEffect } from 'react';
import styles from './Slider.module.css';

function Slider() {
  const [count, setCount] = useState(1);
  const [hour, setHour] = useState(count);
  const [timeOfDay, setTimeOfDay] = useState("am")

  const min = 1;
  const max = 24;

  const sliderHandler = (ev) => {
    setCount(ev.target.value);
  }

  useEffect(() => {
    if (count < 13) {
      setTimeOfDay('am')
    } else {
      setTimeOfDay('pm')
    }

    if (count < 15) {
      setHour(count - 1); // When in doubt, console.log(count), and compare with hour.
    }

    if (count == 1) {
      setHour(12); // Start here: 12 AM
    }
    if (count == 2) {
      setHour(1) // 1 AM
    }
    if (count == 14) {
      setHour(1) // PM starts here: 1 PM
    }
    if (count >= 15) {
      setHour(count - 13) // Adds one hour to the previous hour (1 PM) --> Continues ++ till Clock End.
    }
  }, [count])


  return (
    <div>
      <header>Slider</header>
      <section>
        <label>
          <h2>Appointment Hour:</h2>
          <input
            className={styles.hoursSlider}
            type="range"
            value={count}
            min={min}
            max={max}
            onChange={sliderHandler} />
          {/* {count} */}
          <h3>{hour}{timeOfDay}</h3>
        </label>
      </section>
    </div>
  )
}

export default Slider;