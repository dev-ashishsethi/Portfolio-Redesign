export type BlogType={
    heading:string,
    date:string,
    description:string,
    liveLink:string
}

interface BlogProps{
    data:BlogType
}
export const  Blog:React.FC<BlogProps> = ({data})=> {
    return (
        <div className="blog-card">
            <h2 className="blog-heading">{data.heading}</h2>
            <p className="blog-subheading">{data.date}</p>
            <span className="blog-subheading">{data.description}</span>
            <a href={data.liveLink} target="_blank" className="blog-readmore"> read more</a>
        </div>
    )
}