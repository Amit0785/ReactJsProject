import React from 'react'
import {useNavigate} from 'react-router-dom'
//import {useParams,useLocation,} from 'react-router-dom'

function Navbar() {
  const navigation=useNavigate()

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container px-5">
                <a class="navbar-brand" href="#!">Start Bootstrap</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!" onClick={()=>{ navigation('/')}}>Home</a></li>
                         <li class="nav-item"><a class="nav-link" href="#!" onClick={()=>{ navigation('/AboutUs')}}>About</a></li>
                        <li class="nav-item"><a class="nav-link" href="#!" onClick={()=>{ navigation('/Contact')}}>Contact</a></li>
                        <li class="nav-item"><a class="nav-link" href="#!" onClick={()=>{ navigation('/Gallery')}}>Gallery</a></li>
                       
                        <li class="nav-item"><a class="nav-link" href="#!" onClick={()=>{ navigation('/Service')}}>Services</a></li>
                    </ul>
                </div>
            </div>
        </nav>
  )
}

export default Navbar