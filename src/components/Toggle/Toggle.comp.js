import {useState} from 'react';
import styles from './Toggle.module.css';

function Toggle() {
  const [toggle, setToggle] = useState(false);
  // console.log("start", toggle)
  
  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div>
    <h3>Toggle</h3>
      <div className="ma5 white-80">
        <h2 className="pa2">
          Switch Theme:
        </h2>

        <div className="flex">

          <p className="ph3">
            Light
          </p>

          <label className={styles.hiddenCheckbox}>
            <input 
            type="checkbox" 
            onChange={handleToggle}/>
            <span className={styles.switchTheme} />
          </label>

          <p className="ph3">
            Dark
          </p>

        </div>
      </div>
  </div>
  )
}

export default Toggle;