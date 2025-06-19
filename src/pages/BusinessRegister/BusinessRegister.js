import React from 'react'

export const BusinessRegister = () => {

    const mystyle = {
        fontSize: 'initial',
         color: '#000',
         fontWeight: '600'
    };

  return (
    <div>
      {/* <!--banner start--> */}

<div className="about-us-banner">
  <section className="ban_sec">
	<div className="ban_img">
        <img src="./images/1686738283_business-registration-banner.webp" alt="Business banner" border="0" />
        
        <div className="ban_text" style={{ width: '100%', left: 'initial'}}>
            <div className="col-lg-12 text-center">
                <strong style={{ textTransform: "none" }}>
					<span style={{color: '#fff'}}>Passionate Futurist presents excellent offers</span>
				</strong>
				
		        <p>Passionate Futurist presents excellent offers! We can share our remarkable offers in the following way:</p>

			    <a href="/contact-us">Contact Us</a>
			</div>
		</div>
	</div> 
  </section>
</div>

{/* <!--banner end--> */}




{/* <!--middle start--> */}

<main>

    {/* <!--business register section 1 start--> */}

    <div className="business-register-section-1">
        <div className="container">
          <div className="b-r-s-1-heading">
            <h2 style={{color: 'var(--main-blue-color)'}}>We can share our remarkable offers in the following way:</h2>

            <p>Passionate Futurist presents excellent offers! We can share our remarkable offers in the following way:</p>
          </div>

            <div className="b-r-s-1-wrap pt-5">
              <div className="row">
                <div className="col-lg-6 mb-4">
                    <div data-aos="fade-right" data-aos-duration="1500">
                        <div className="b-r-s-1-left">
                      <section className="b-r-sec">
                        <h4 className="b-r-sec-heading">Passionate Futurist presents excellent offers! We can share our remarkable offers in the following way:</h4>

                        <div className="order-track">
                          <div className="order-track-step">
                            <div className="order-track-status">
                              <span className="order-track-status-dot"><i className="fa-solid fa-forward-step"></i></span>
                              <span className="order-track-status-line"></span>
                            </div>
                            <div className="order-track-text">
                              <p className="order-track-text-stat">Just simply get yourself registered</p>
                              <span className="order-track-text-sub" style={mystyle}>You are cordially invited to grab the exciting offers! We are highly cooperative with our clients. We will fulfill all your business promotion, web design and web development work.</span>
                            </div>
                          </div>
                          <div className="order-track-step">
                            <div className="order-track-status">
                              <span className="order-track-status-dot"><i className="fa-solid fa-forward-step"></i></span>
                              <span className="order-track-status-line"></span>
                            </div>
                            <div className="order-track-text">
                              <p className="order-track-text-stat">On registration we will be providing you with a number of exciting offers</p>
                              <span className="order-track-text-sub"  style={mystyle}>The regular updates too would be made available to you</span>
                            </div>
                          </div>
                          <div className="order-track-step">
                            <div className="order-track-status">
                              <span className="order-track-status-dot"><i className="fa-solid fa-forward-step"></i></span>
                              <span className="order-track-status-line"></span>
                            </div>
                            <div className="order-track-text">
                              <p className="order-track-text-stat">We are proud to have a team of web designers, web developers,</p>
                              <span className="order-track-text-sub"  style={mystyle}>Passionate Futurist presents excellent offers Passionate Futurist presents excellent offers</span>
                            </div>
                          </div>
                          <div className="order-track-step">
                            <div className="order-track-status">
                              <span className="order-track-status-dot"><i className="fa-solid fa-forward-step"></i></span>
                              <span className="order-track-status-line"></span>
                            </div>
                            <div className="order-track-text">
                              <p className="order-track-text-stat">Passionate Futurist presents excellent offers</p>
                              <span className="order-track-text-sub"  style={mystyle}>Passionate Futurist presents excellent offers Passionate Futurist presents excellent offers</span>
                            </div>
                          </div>
                          <div className="order-track-step">
                            <div className="order-track-status">
                              <span className="order-track-status-dot"><i className="fa-solid fa-forward-step"></i></span>
                              <span className="order-track-status-line"></span>
                            </div>
                            <div className="order-track-text">
                              <p className="order-track-text-stat">On registration we will be providing you with a number of exciting offers</p>
                              <span className="order-track-text-sub"  style={mystyle}>We have exciting offers for festive season. Our company provides special discount for old clients.</span>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                    </div>
                </div>

                <div className="col-lg-6 mb-4">
                  <div className="b-r-s-1-right">
                    <div className="form_wrapper">
                      <div className="form_container">
                        <div className="title_container">
                          <h2>Register Your Business</h2>
                        </div>
                        <div className="row clearfix">
                            <form method="post" action="/store-bussiness-offers">
                              <div className="row clearfix">   
                                <div className="col_half">
                                  <label for="exampleInputEmail1" className="form-label">Your Name</label>
                                  <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                    <input type="text" name="name" placeholder="Name" required />
                                  </div>
                                </div>
                              </div>
                              
                              <label for="exampleInputEmail1" className="form-label">Enterpreneur's email id</label>
                              <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                                <input type="email" name="email" placeholder="Enterpreneur's email id" required />
                              </div>

                              <div className="input_field select_option">
                                <label for="exampleInputEmail1"  className="form-label">Business Type</label>
                                <select name="businesstype" >
                                  <option>-----Please Choose Business Type-----</option>
                                  <option value="services" >Services</option>

                                  <option value="products" >Products</option>

                                  <option value="others" >Others</option>
                                </select>
                                <div className="select_arrow"></div>
                              </div>

                              <label for="exampleInputEmail1" className="form-label">Business Name</label>
                              <div className="input_field"> <span><i className="fa fa-users fa" aria-hidden="true"></i></span>
                                <input type="text" name="businessname" placeholder="Business Name" required />
                              </div>

                              <label for="exampleInputEmail1" className="form-label">Company Website</label>
                              <div className="input_field"> <span><i className="fa fa-desktop"></i></span>
                                <input type="text" name="companywebsite" placeholder="Company Website" required />
                              </div>

                              <label for="exampleInputEmail1" className="form-label">Referred by</label>
                              <div className="input_field"> <span><i className="fa fa-male"></i></span>
                                <input type="text" name="referredby" placeholder="Referred by..." required />
                              </div>
                                  
                              <div className="input_field checkbox_option">
                                  <input type="checkbox" id="cb1" />
                                  <label for="cb1" className="cb-1-wrap">I agree with terms and conditions</label>
                              </div>

                              <div className="input_field checkbox_option">
                                  <input type="checkbox" id="cb2" />
                                  <label for="cb2" className="cb-1-wrap">I want to receive the newsletter</label>
                              </div>
                              <input className="button" type="submit" value="Save" />
                            </form>
                        </div>
                      </div>
                    </div>                    
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>

    {/* <!--business register section 1 end--> */}

</main>

{/* <!--middle end--> */}
    </div>
  )
}
