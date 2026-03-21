import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import PreLoader from './components/PreLoader/PreLoader'
import ScrollToTop from './utils/ScrollToTop'

import Footer from '@/components/footer/Footer'
import Nav from '@/components/Nav/Nav'
import Home from '@/pages/Home/Home'
import Projects from './pages/Projects/Projects'
import ProjectPage from './pages/ProjectPage/ProjectPage'
import Contacts from './pages/Contacts/Contacts'

import '@/styles'
import NotFound from './components/NotFound/NotFound'

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
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="project/:id" element={<ProjectPage />}/>
          <Route path="/contacts" element={<Contacts />} />

          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  )
}

export default App
