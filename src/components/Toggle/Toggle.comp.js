import { useState } from 'react';
import styles from './Toggle.module.css';

function Toggle() {
  const backgroundColorHandler = (bgcolor, txcolor) => {
    document.body.style.background = bgcolor;
    document.body.style.color = txcolor;
  }

  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle)

    if (toggle === true) {
      backgroundColorHandler('blanchedalmond', 'brown')
    } else {
      backgroundColorHandler('black', 'white')
    }
  }

  return (
    <div>
      <h3>Toggle</h3>
      <div className="ma5 pa3 br2 white-80 bg-light-purple hover-bg-purple w-30">
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
              onChange={handleToggle} />
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