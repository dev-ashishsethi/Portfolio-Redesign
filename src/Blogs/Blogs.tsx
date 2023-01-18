import axios from "axios"
import { useEffect, useState } from "react"
import { Blog, BlogType } from "../components/Blog/Blog"
import { Loader } from "../components/Loader/Loader"
import "../components/Blog/Blog.css"

export function Blogs() {
const [blogs,setBlogs]=useState<BlogType[]>([])
    useEffect(()=>{
        (async ()=>{
            const response = await axios.get('https://portfolio.aashishsethii01.repl.co/blogs')
            setBlogs(response.data);
        })()
    },[])
    return (
        <div className="container" id="blogs">
      <div className="text-section">
        <p className="tags">&lt;section&gt;</p>
        <p className="tags">&lt;h1&gt;</p>
        <h1 className="main-heading clr-black">Blogs </h1>
        <span className="tags">&lt;/h1&gt;</span>
        <p className="tags">&lt;article&gt;</p>
        <div className="blogs-container">
            {blogs.length>0? blogs.map(blog=><Blog data={blog}/>) :<Loader/>}
        </div>
        <p className="tags">&lt;/article&gt;</p>

        <p className="tags">&lt;/section&gt;</p>
      </div>
    </div>
    )
}