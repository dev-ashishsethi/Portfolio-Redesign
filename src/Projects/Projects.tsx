import axios from "axios";
import { useEffect, useState } from "react";
import { Loader } from "../components/Loader/Loader";
import { ProjectCard, projectType } from "../components/ProjectCard/ProjectCard";
import "./Project.css";

export function Projects() {
    const [projects,setProjects] = useState<projectType[]>([])
    useEffect(()=>{
            (async () => {
                const response = await axios.get('https://portfolio.aashishsethii01.repl.co/projects')
                setProjects(response.data.reverse());
            })()
    },[])
  return (
    <div className="container" id="projects">
      <div className="text-section">
        <p className="tags">&lt;section&gt;</p>
        <p className="tags">&lt;h1&gt;</p>
        <h1 className="main-heading clr-black">Projects </h1>
        <span className="tags">&lt;/h1&gt;</span>
      <div className="project-showcase">
        {projects.length>0 ? projects.map((project)=><ProjectCard data={project}/>):<Loader/>}
      </div>
      <p className="tags">&lt;/section&gt;</p>
      </div>
    </div>
  );
}
