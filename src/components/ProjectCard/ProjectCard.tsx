export type projectType={
    date:string,
    description:string,
    githubLink:string,
    heading:string,
    imageLink:string,
    liveLink:string
}

type CustomInputProps = {
    data: projectType;
  }

export const ProjectCard:React.FC<CustomInputProps> = ({data}) =>{
 return (   
 <div>
        <div className="project-card" style={{backgroundImage:  `url(${data.imageLink})`}}>
        <div className="project-card-body">
          <div className="project-card-links">
            <a href={data.githubLink} className="github project-icon"  target="_blank"></a>
            <a href={data.liveLink} className="link project-icon" target="_blank"></a>
          </div>
        </div>
      </div>
    <h2 className="project-card-title">{data.heading}</h2>
</div>
 )
}