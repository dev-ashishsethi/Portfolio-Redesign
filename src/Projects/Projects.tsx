import "./Project.css"
export function Projects() {
    return(
        <div className="container" id="skills">
      
      <div className="text-section">
        <p className='tags'>&lt;section&gt;</p>
        <p className='tags'>&lt;h1&gt;</p>
        <h1 className='main-heading clr-black'>Projects </h1>
        <span className='tags'>&lt;/h1&gt;</span>
       
        <p className='tags'>&lt;/section&gt;</p>
        
      </div>
      <div className="project-card">
        <div className="image-links-section">
            {/* <img src="https://drive.google.com/uc?export=view&id=1H_2DSSu2Nre8gVyQWRzgmty4Ea8lYi9D" alt="" className="project-img"/> */}
            {/* <img src="../../public/assets/projectDropShadow.png" alt="" className="project-shadow"/> */}
        </div>
        <span className="project-title">project title</span>
      </div>
    </div>
    )
}