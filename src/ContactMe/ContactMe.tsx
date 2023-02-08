import axios from "axios";
import { FormEvent } from "react";
import  "./ContactMe.css";


export function ContactMe() {
  function handleForm(e:FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
   
    axios.post('https://portfolio.aashishsethii01.repl.co/form',{
      name: formData.getAll('name').join(),
      email: formData.getAll('email').join(),
      message: formData.getAll('message').join()
    })
  }
    return (
        <div className="container" id="blogs">
        <div className="text-section">
          <p className="tags">&lt;h1&gt;</p>
          <h1 className="main-heading clr-black">Contact Me</h1>
          <span className="tags">&lt;/h1&gt;</span>
          <p className="tags">&lt;form&gt;</p>

           
          <form action="" method="post" onSubmit={(e)=>handleForm(e)}>
            <div>
              <input type="text" name="name" id="" placeholder="Full Name"/>
              <input type={'email'} name="email" id="" placeholder="Email"/>
            </div>
            <div>
              <textarea name="message" id="" cols={43} rows={10} placeholder='Message'/>
            </div>
            <button type="submit" className="sub-container-btn send-btn">Send Message!</button>
          </form>
         
          <p className="tags">&lt;/form&gt;</p>
        </div>
      </div>
    )
}