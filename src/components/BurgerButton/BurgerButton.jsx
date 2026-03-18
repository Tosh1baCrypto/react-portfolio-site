
import { useEffect } from "react"
import s from './BurgerButton.module.scss'

const BurgerButton = (props) => {

  const {
    isOpen,
    toggleMenu
  } = props

  useEffect(() => {
    if(isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.touchAction = 'none'
    } else {
      document.body.style.overflow = 'unset'
      document.body.style.touchAction = 'auto'
    }

    return () => {
      document.body.style.overflow = 'unset'
      document.body.style.touchAction = 'auto'
    }
  }, [isOpen])

  return (
    <label htmlFor='burger' className={s['hamburger-circle']}>
      <input id='burger' type='checkbox' checked={isOpen} onChange={toggleMenu} />
      <span></span>
      <span></span>
      <span></span>
    </label>
  )
}

export default BurgerButton