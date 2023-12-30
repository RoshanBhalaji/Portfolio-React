import { useState } from 'react'
import Navbar from './Components/Navbar'
import Intro from './Components/Intro'
import Skills from './Components/Skills'
import Project from './Components/Project'
import Contact from './Components/Contact'
import Footer from './Components/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="App">
    <Navbar/>
    <Intro/>
    <Skills/>
    <Project/>
    <Contact/>
    <Footer/>

   </div>
  )
}

export default App
