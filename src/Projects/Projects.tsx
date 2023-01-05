import axios from "axios";
import { useEffect, useState } from "react";
import { ProjectCard, projectType } from "../components/ProjectCard/ProjectCard";
import "./Project.css";

export function Projects() {
    const [projects,setProjects] = useState<projectType[]>([])
    useEffect(()=>{
            (async () => {
                const response = await axios.get('https://portfolio.aashishsethii01.repl.co/projects')
                setProjects(response.data);
            })()
    },[])
  return (
    <div className="container" id="projects">
      <div className="text-section">
        <p className="tags">&lt;section&gt;</p>
        <p className="tags">&lt;h1&gt;</p>
        <h1 className="main-heading clr-black">Projects </h1>
        <span className="tags">&lt;/h1&gt;</span>

        <p className="tags">&lt;/section&gt;</p>
      </div>
      <div>
        {projects.length>0 && projects.map((project)=><ProjectCard data={project}/>)}

      </div>
    </div>
  );
}
