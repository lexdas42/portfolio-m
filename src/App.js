import React from 'react'
import './index.css'
import Skill from './pages/skill'
import Project from './pages/project'
import About from './pages/about'


 function App() {
  return (
    <div>
    <div className="min-h-screen w-screen" style={{
      backgroundColor: 'black',
      opacity: 0.9
    }}>
     <div className="pt-48">
     <h1 className="animate-bounce font-serif text-7xl italic text-center text-white">Hello i'm a web developer</h1>
      <p className="animate-pulse font-sans text-4xl text-justify font-light text-white">My name is Adelson Alexandro, i have two years of experience in web development
         
      </p>
     </div>
     
    </div>
    <Skill />
    <Project />
    <About />
    </div>
  
  )
}

export default App;
