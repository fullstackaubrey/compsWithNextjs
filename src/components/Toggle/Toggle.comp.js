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

    if (toggle === false) {
      backgroundColorHandler('rgb(225, 236, 252)', 'rgba(35, 35, 85)')
    } else {
      backgroundColorHandler('black', 'white')
    }
  }
  return (
    <div>
      <header>Toggle</header>
      <h4>Switch Theme:</h4>
      <section className={styles.togglecomp}>
        <p>Dark</p>
        <label className={styles.hiddenCheckbox}>
          <input
            type="checkbox"
            onChange={handleToggle} />
          <span className={styles.switchTheme} />
        </label>
        <p>Light</p>
      </section>
    </div>
  )
}

export default Toggle;