import { Link } from 'react-router-dom'
import s from './Project.module.scss'


const Project = (props) => {
  const {
    title,
    img,
    id
 } = props

  return (
    <li className={s.project}>
        <Link to={`/project/${id}`}>
            <img src={img} alt="Project img" className={s.img} loading='lazy'/>
            <h3 className={s.title}>{title}</h3>
        </Link>
    </li>
  )
}

export default Project