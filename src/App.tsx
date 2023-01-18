import './App.css'
import { Blogs } from './Blogs/Blogs'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Home } from './Home/Home'
import { Projects } from './Projects/Projects'
import { Skills } from './Skills/Skills'

function App() {

  return (
   <>
    <Home/>
    <Skills/>
    <Projects/>
    <Blogs/>
    <Sidebar/>
   </>
  )
}

export default App
