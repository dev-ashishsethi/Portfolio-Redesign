import "./Skills.css"
import html from "../assets/html.webp"
import css from "../assets/css.webp"
import js from "../assets/js.webp"
import react from "../assets/react.webp"
import typescript from '../assets/typescript.png'
import redux from "../assets/Redux.jpg"
export function Skills() {
    return(
    <div className="container" id="skills">
      
      <div className="text-section">
        <p className='tags'>&lt;section&gt;</p>
        <p className='tags'>&lt;h1&gt;</p>
        <h1 className='main-heading clr-black'>Skills </h1>
        <span className='tags'>&lt;/h1&gt;</span>
        <p className='tags'>&lt;p&gt;</p>
        <p className='text'>I am proficient in HTML5, CSS3, JavaScript, TypeScript, ReactJS and Redux. I have a work experience of <span className="clr-purple">2 years</span>  as a <span className="clr-purple">Software Engineer</span>. I have worked for <span className="clr-purple">Capgemini</span> in the past and I am currently working for <span className="clr-purple">Labra Ventures</span> (IbexLabs in India)</p>
        <span className='tags'>&lt;/p&gt;</span>
        <p className='tags'>&lt;/section&gt;</p>
        
      </div>
      <div className="skills-img-section">
            <img src={html} alt="html image" className="skills-img"/>
            <img src={css} alt="css image" className="skills-img"/>
            <img src={js} alt="js image" className="skills-img"/> 
            <img src={react} alt="react image" className="skills-img"/>
            <img src={typescript} alt="typescript image" className="skills-img" />
            <img src={redux} alt="redux image" className="skills-img"/>
      </div>
    </div>
    )
}