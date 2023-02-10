import "./Skills.css"
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
            <img src="../assets/html.webp" alt="html image" className="skills-img"/>
            <img src="../assets/css.webp" alt="css image" className="skills-img"/>
            <img src="../assets/js.webp" alt="js image" className="skills-img"/> 
            <img src="../assets/react.webp" alt="react image" className="skills-img"/>
            <img src="../assets/typescript.png" alt="typescript image" className="skills-img" />
            <img src="../assets/redux.jpg" alt="redux image" className="skills-img"/>
      </div>
    </div>
    )
}