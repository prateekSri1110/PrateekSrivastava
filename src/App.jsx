import './App.css'
import Navigator from './component/navigator.jsx'
import About from './component/about.jsx'
import Footer from './component/footer.jsx'
import Qualifications from './component/qualifications.jsx'
import Skills from './component/skills.jsx'
import Projects from './component/projects.jsx'
import Extra from './component/extras.jsx'

function App() {

  return (
    <>
      <Navigator />
      <About />
      <Qualifications />
      <Extra />
      <Skills />
      <Projects />
      <Footer />
    </>
  )
}

export default App
