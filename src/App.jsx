import { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import PreLoader from './components/PreLoader/PreLoader'
import ScrollToTop from './utils/ScrollToTop'

import Footer from '@/components/footer/Footer'
import Nav from '@/components/Nav/Nav'

const Home = lazy(() => import('@/pages/Home/Home'))
const Projects = lazy(() => import('./pages/Projects/Projects'))
const ProjectPage = lazy(() => import('./pages/ProjectPage/ProjectPage'))
const Contacts = lazy(() => import('./pages/Contacts/Contacts'))
const NotFound = lazy(() => import('./components/NotFound/NotFound'))

import '@/styles'

const App = () => {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const handleLoad = () => {
      setLoading(false)
    }

    if(document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => window.removeEventListener('load', handleLoad)
  }, [])

  return (
    <div className='app'>
      <PreLoader isLoading={loading} />

      <Router basename="/react-portfolio-site/">
        <ScrollToTop />
        <Nav/>

        <Routes>
          <Route path="/" element={<Suspense> <Home /> </Suspense>} />
          <Route path="/projects" element={<Suspense> <Projects /> </Suspense>} />
          <Route path="project/:id" element={<Suspense> <ProjectPage /> </Suspense>} />
          <Route path="/contacts" element={<Suspense> <Contacts /> </Suspense>} />

          <Route path="/404" element={<Suspense> <NotFound /> </Suspense>} />
          <Route path="*" element={<Suspense> <NotFound /> </Suspense>} />
        </Routes>

        <Footer />
      </Router>
    </div>
  )
}

export default App
