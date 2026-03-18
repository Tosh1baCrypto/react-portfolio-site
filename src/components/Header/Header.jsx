import s from './Header.module.scss'

const Header = () => {

  return(
    <header className={s.header}>
        <div className={s.wrapper}>
            <h1 className={s.title}>
                <strong>Hi, my name is <em>Tosh1ba</em></strong><br />
                a frontend developer
            </h1>
            <div className={s.text}>
                <p>with passion for learning and creating.</p>
            </div>
            <a href="/" className={s.btn}>Download CV</a>
        </div>
    </header>
  )
}

export default Header