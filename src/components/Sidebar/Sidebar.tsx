import "./Sidebar.css"
export function Sidebar() {
    return (
    <div className='subcontainer'>
      
      <a href="#contactMe"><button className='sub-container-btn contact-me'>Contact Me</button></a>
      <div className='subcontainer-btn-section'>
       <a href="#about">
         <button className='subcontainer-btn ' id="about-btn" data-hover="About Me"><span>01</span></button>
       </a>
       <a href="#skills"> 
        <button className='subcontainer-btn ' id="skills-btn" data-hover="Skills"><span>02</span></button>
       </a>
       <a href="#projects">
        <button className='subcontainer-btn' id="projects-btn" data-hover="Projects"><span>03</span></button>
       </a>
       <a href="#blogs">
        <button className='subcontainer-btn' id="blogs-btn" data-hover="Blogs"><span>04</span></button>
       </a>
      </div>

      <div>
      <p className='follow'>Follow Me</p>
      <div>
        <a href=""><img src="../public/assets/github.png" alt="" className='links'/></a>
        <a href=""><img src="../public/assets/linkedin.png" alt="" className='links'/></a>
        <a href=""><img src="../public/assets/twitter.png" alt="" className='links'/></a>
        <a href=""><img src="../public/assets/dev.png" alt="" className='links'/></a>
      </div>

      </div>
    
    </div>
    )
}

