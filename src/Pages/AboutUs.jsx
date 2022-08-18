import React from 'react'



function AboutUs() {
  return (
      
    <>
      <div style={{width:'100%',paddingLeft:15,paddingRight:15,height:449}} >

      <div class="row">
        <div class="col-md-6 ">
          <div style={{height:400,width:400,padding:20}}>
            <img src="images/about-img.png" alt="" style={{height:250,width:250,alignSelf:'center'}}/>
          </div>
        </div>
        <div class="col-md-6">
          <div class="detail-box">
            <div class="heading_container">
              <h2>
                We Are Feane
              </h2>
            </div>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour, or randomised words which don't look even slightly believable. If you
              are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
              the middle of text. All
            </p>
            <a href="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default AboutUs