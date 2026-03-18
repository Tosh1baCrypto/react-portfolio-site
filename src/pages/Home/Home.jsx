import Header from "@/components/Header/Header"
import s from './Home.module.scss'

const Home = () => {
  return(
    <>
      <Header />
      <main className="section section--center">
        <div className="container">
            <ul className={s['content-list']}>
              <li className={s.item}>
                <h2 className="title-2">Frontend</h2>
                <p>JavaScript, ReactJS, Redux, HTML, CSS, NPM, TailwindCSS, StyledComponents</p>
              </li>
            </ul>
        </div>
    </main>
    </>
  )
}

export default Home