import React,{useState} from 'react'
//import Box from '@mui/material/Box';
//import TextField from '@mui/material/TextField';




function Contact() {


const validateEmail = value => {
    const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (regExp.test(value) === false) {
      return false;
    } else {
      return true;
    }
  };
  const sendMessage=()=>{
    
  if(name.trim() ==''){
    return alert('Please enter your Valid name') 
  }else if (!validateEmail(email)) {
  return alert('Please enter your Valid Email address')
} else if (phone.trim() == '' ) {
    return alert('Please enter your Valid Phone number')
}else if (phone.length < 10) {
    return alert('Please enter your Valid Phone number length')
}
else{
    alert('Form submission successful!')
}

}

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [phone, setPhone] = useState('')
const [message, setMessage] = useState('')
  return (
    
     <section className="bg-light py-5">
            <div className="container px-5 my-5 px-5">
                <div className="text-center mb-5">
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-envelope"></i></div>
                    <h2 className="fw-bolder">Get in touch</h2>
                    <p className="lead mb-0">We'd love to hear from you</p>
                </div>
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-6">
                        
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                           
                            <div className="form-floating mb-3">
                                <input className="form-control" id="name" type="text" placeholder="Enter your name..."
                                value={name} onChange={(event)=>setName(event.target.value)} data-sb-validations="required" />
                                <label htmlFor="name">Full name</label>
                                <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                           
                            <div className="form-floating mb-3">
                                <input className="form-control" id="email" type="email" value={email} 
                                onChange={(event)=>setEmail(event.target.value)} 
                                placeholder="name@example.com" data-sb-validations="required,email" />
                                <label htmlFor="email">Email address</label>
                                <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>
                         
                            <div className="form-floating mb-3">
                                <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" 
                                value={phone} onChange={(event)=>setPhone(event.target.value)} 
                                data-sb-validations="required" />
                                <label htmlFor="phone">Phone number</label>
                                <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                            </div>
                       
                            <div className="form-floating mb-3">
                                <textarea className="form-control" id="message" type="text"
                                 placeholder="Enter your message here..." style={{height: 10}} data-sb-validations="required"
                                 value={message} onChange={(event)=>setMessage(event.target.value)} ></textarea>
                                <label htmlFor="message">Message</label>
                                <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                            </div>
                        
                            <div className="d-none" id="submitSuccessMessage">
                                <div className="text-center mb-3">
                                    <div className="fw-bolder">Form submission successful!</div>
                                    To activate this form, sign up at
                                    <br />
                                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>
                        
                            <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                           
                            <div className="d-grid">
                            <button className="btn btn-primary btn-lg" id="submitButton" type="submit" onClick={()=>{sendMessage()}}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Contact