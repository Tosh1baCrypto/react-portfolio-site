import { useEffect } from 'react';
import { useLocalStorage } from '@/utils/useLocalStorage';
import detectDarkMode from '@/utils/detectDarkMode';

import sun from '@/img/icon/sun.svg';
import moon from '@/img/icon/moon.svg';

import s from './DarkModeButton.module.scss'

const DarkModeButton = () => {

  const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode())


  useEffect(() => {
    if(darkMode === 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [darkMode])
  
  useEffect(() => {
    window
    .matchMedia('(prefers-color-scheme:dark)')
    .addEventListener('change', (event) => {
      const newColorScheme = event.matches ? 'dark' : 'light'
      setDarkMode(newColorScheme)
      })
  }, [setDarkMode])

  const toggleDarkMode = () => {
    setDarkMode((currenValue) => {
      return currenValue === 'light' ? 'dark' : 'light'
    })
  }

  const btnNormal = `${s['dark-mode-btn']}`
  const btnActive = `${s['dark-mode-btn']} ${s['active']}`

  return (
    <button className={darkMode === 'dark' ? btnActive : btnNormal} onClick={toggleDarkMode}>
      <img src={sun} alt="Light mode" className={s.icon} loading='lazy'/>
      <img src={moon} alt="Dark mode" className={s.icon} loading='lazy'/>
    </button>
  )
}

export default DarkModeButton