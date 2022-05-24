import {useState} from 'react';

import styles from './darkMode.module.scss';
import layout from '../../styles/layout.module.scss';

import moonIcon from '../../assets/images/moon.svg';
import sunnyIcon from '../../assets/images/sunny.svg';

export default function DarkMode () {
  const [theme, setTheme] = useState('default');

  const darkModeHandler = function () {
    return (theme === 'default') ? setTheme('darktheme') : setTheme('default');
  };

  return (
    <div className={`${styles[theme]} ${styles['dark-mode']} ${layout['flex']} ${layout['column']} ${layout['justify-center']} ${layout['align-center']}`}>
      {(theme === 'default')
      ?
      <div className={`${styles['icon']} ${layout['flex']} ${layout['col-1']} ${layout['mb-3']}`}>
        <img className={`${layout['image-responsive']}`} src={sunnyIcon} alt="Sunny Icon" />
      </div>
      :
      <div className={`${styles['moon-icon']} ${layout['flex']} ${layout['col-1']} ${layout['mb-3']}`}>
        <img className={`${layout['image-responsive']}`} src={moonIcon} alt="Sunny Icon" />
      </div>
      }
      <h1 className={`${styles[theme]} ${styles['header']} ${layout['mb-3']}`} >Dark Mode</h1>
      <button className={`${styles[theme]} ${styles['button']}`} onClick={darkModeHandler}>SWITCH</button>
    </div>
  );
}
