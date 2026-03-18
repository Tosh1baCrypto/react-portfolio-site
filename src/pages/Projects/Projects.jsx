import projects from '@/helpers/projectsList/projectsList.jsx'

import Project from '@/components/Project/Project'

import s from './Projects.module.scss'


const Projects = () => {


  return (
    <main className="section section--center">
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className={s.projects}>
              { projects.map((project, index) => (
                <Project title={project.title} img={project.img} key={index} id={index}/>
              ))}
            </ul>
        </div>
    </main>
  )
}

export default Projects