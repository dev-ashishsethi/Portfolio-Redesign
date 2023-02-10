import "./Home.css"
import hero from "../assets/hero.jfif"
export function Home() {
    return (
    <div className="container">
      
      <div className="text-section" id="about">
        <p className='tags'>&lt;html&gt;</p>
        <p className='tags'>&lt;head&gt;</p>
        <h1 className='main-heading clr-black'>Hi! </h1>
        <h1 className='main-heading clr-black'>I’m <span className='main-heading clr-purple'>Ashish</span></h1>
        <span className='tags'>&lt;/head&gt;</span>
        <p className='tags'>&lt;title&gt;</p>
        <h2 className='secondary-heading'>I’m a Front end developer</h2>
        <span className='tags'>&lt;/title&gt;</span>
        <p className='tags'>&lt;body&gt;</p>
        <button className='src-code-btn'>View source code</button>
      </div>
      <img src={hero} alt="" className='hero-img'/>

      
    </div>
    )
        }