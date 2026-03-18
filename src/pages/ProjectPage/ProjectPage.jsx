import { Navigate, useParams } from 'react-router-dom'
import BtnGitHub from '@/components/BtnGitHub/BtnGitHub'

import projects from '@/helpers/projectsList/projectsList.jsx'

import s from './ProjectsPage.module.scss'

const ProjectPage = () => {
  const {id} = useParams()
  const projectIndex = parseInt(id)
  const project = projects[projectIndex]

  if (!project) {
    return <Navigate to="/404" replace />
  }

  return (
      <main className="section section--center">
        <div className="container">
            <div className={s['project-details']}>
                <h1 className="title-1">{project.title}</h1>
                <img src={project.imgB} alt="" className={s.cover} />
                <div className={s.desc}>
                    <p>{project.skills}</p>
                </div>

                {project.gitHub && <BtnGitHub link={project.gitHub}/>}
            </div>
        </div>
    </main>
  )
}

export default ProjectPage