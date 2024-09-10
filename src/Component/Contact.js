import React from "react";
import {Link,NavLink} from "react-router-dom"
import { MdPhoneIphone } from "react-icons/md";
import Banner from "./images/img/banner/page-title.webp"
import { IoIosArrowUp } from "react-icons/io";
import {Helmet} from "react-helmet";


let Contact=()=>{





return(


    <div>

<Helmet>
 
    <title>Contact</title>

</Helmet>



{/*         
    <!-- PAGE TITLE
        ================================================== --> */}
        <section className="page-title-section bg-img cover-background mx-lg-1-6 mx-xl-2-5 mx-xxl-2-9 left-overlay-dark" data-overlay-dark="8" data-background="./images/img/banner/page-title.webp" style={{backgroundImage:"url("+Banner+")"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="position-relative">
                            <h1>Contact Us</h1>
                        </div>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="line-animated">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>

        {/* <!-- CONTACT INFO
        ================================================== --> */}
        <section>
            <div className="container">
                <div className="row mt-n1-9">
                    <div className="col-md-6 col-xl-4 mt-1-9">
                        <div className="card-style-02 h-100">
                            <div className="d-flex">
                                <div className="flex-shrink-0">
                                    <div className="card-icon">
                                        <i className="fa-solid fa-mobile-screen text-primary display-20"></i>
                                    </div>
                                </div>
                                <div className="flex-grow-1 ms-3 ms-lg-4">
                                    <h3 className="h5">Phone Number</h3>
                                    <p className="mb-0">+91-6382808386</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4 mt-1-9">
                        <div className="card-style-02 h-100">
                            <div className="d-flex">
                                <div className="flex-shrink-0">
                                    <div className="card-icon">
                                        <i className="fa-solid fa-location-dot text-primary display-20"></i>
                                    </div>
                                </div>
                                <div className="flex-grow-1 ms-3 ms-lg-4">
                                    <h3 className="h5">Location</h3>
                                    <p className="mb-0 w-lg-80"><a href="https://goo.gl/maps/USiQy4Hm6RtH77bXA" target="_blank">TechnoPark, Trivandrum, India - 695582</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4 mt-1-9">
                        <div className="card-style-02 h-100">
                            <div className="d-flex">
                                <div className="flex-shrink-0">
                                    <div className="card-icon">
                                        <i className="fa-regular fa-envelope text-primary display-20"></i>
                                    </div>
                                </div>
                                <div className="flex-grow-1 ms-3 ms-lg-4">
                                    <h3 className="h5">Email Address</h3>
                                    <p className="mb-0">info@bamstechnologies.org</p>
                                    <p className="mb-0">ceo@bamstechnologies.org</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- CONTACT FORM
        ================================================== --> */}
        <section className="p-0">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 mb-1-6 mb-xl-0">
                        <div className="pe-xl-1-9">
                            <div className="section-title left mb-1-9">
                                <span className="sm-title">Contact Us</span>
                                <h2 className="mb-0 h1 mt-2">Write Us Any Message</h2>
                            </div>
                            <p className="mb-1-9">These are the phrases we stay via way of means of in the whole lot we do. Each brand we build, and we create.</p>
                            <ul className="social-icon-style3 ps-0">
                                {/* <!--<li className="me-1"><a href="https://www.facebook.com/bamstechnologiesprivatelimited" target="_blank"><i className="fab fa-facebook-f"></i></a></li>--> */}
                                <li className="me-1"><a href="https://twitter.com/bamstechnology" target="_blank"><i className="fab fa-twitter"></i></a></li>
                                <li className="me-1"><a href="https://www.instagram.com/googleinfluencer" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                <li className="me-1"><a href="https://in.linkedin.com/in/bamstechnologies" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                                <li className="me-1"><a href="https://bamstechnologies.tumblr.com/" target="_blank"><i className="fab fa-tumblr"></i></a></li>
                                <li className="me-1"><a href="https://goo.gl/maps/USiQy4Hm6RtH77bXA" target="_blank"><i className="fas fa-map-marker"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <form className="contact"  method="post" encType="multipart/form-data" >
                                <div className="quform-elements">
                                    <div className="row">

                                        {/* <!-- Begin Text input element --> */}
                                        <div className="col-md-6">
                                            <div className="quform-element form-group">
                                                <label htmlFor="name">Your Name <span className="quform-required">*</span></label>
                                                <div className="quform-input">
                                                    <input className="form-control" id="name" type="text" name="name" placeholder="Your name here" required />
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Text input element -->

                                        <!-- Begin Text input element --> */}
                                        <div className="col-md-6">
                                            <div className="quform-element form-group">
                                                <label htmlFor="email">Your Email <span className="quform-required">*</span></label>
                                                <div className="quform-input">
                                                    <input className="form-control" id="email" type="email" name="email" placeholder="Your email here" required />
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Text input element -->

                                        <!-- Begin Text input element --> */}
                                        <div className="col-md-6">
                                            <div className="quform-element form-group">
                                                <label htmlFor="phone">Contact Number<span className="quform-required">*</span></label>
                                                <div className="quform-input">
                                                    <input className="form-control" id="phone" type="number" name="phone" placeholder="Your phone here" required />
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Text input element -->
                                        
                                        <!-- Begin Text input element --> */}
                                        <div className="col-md-6">
                                            <div className="quform-element form-group">
                                                <label htmlFor="subject">Your Subject</label>
                                                <div className="quform-input">
                                                    <input className="form-control" id="subject" type="text" name="heading" placeholder="Your subject here" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Text input element -->

                                        <!-- Begin Textarea element --> */}
                                        <div className="col-md-12">
                                            <div className="quform-element form-group">
                                                <label htmlFor="message">Message</label>
                                                <div className="quform-input">
                                                    <textarea className="form-control" id="message" name="text" rows="3" placeholder="Tell us a few words"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Textarea element --> */}
                                        
                                        <div className="" style={{marginBottom:"30px"}}>
                                            <div data-sitekey="6LewcC4jAAAAAN7S_PL_vsNpWOTZJ9RLEjtgy28p" required className="g-recaptcha"></div>
                                        </div>

{/* 
                                        <!-- Begin Submit button --> */}
                                        <div className="col-md-12">
                                            <div className="quform-submit-inner">
                                                <button className="btn-style1 border-0" type="submit"><span>Send Message</span></button>
                                            </div>
                                            <div className="quform-loading-wrap text-start"><span className="quform-loading"></span></div>
                                        </div>
                                        {/* <!-- End Submit button --> */}

                                    </div>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- MAP
        ================================================== --> */}
        <section className="pb-0">
            <div className="container-fuild">
                <iframe className="contact-map" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.459589447884!2d76.87299221735857!3d8.551726881872836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04115e57dcfba7%3A0xa1bc1b687efbbaed!2sBams%20Technologies%20Pvt%20Ltd%20%7C%20Google%20SEO%20Experts%20in%20Trivandrum%2C%20Kerala%2C%20India!5e0!3m2!1sen!2sin!4v1667969277385!5m2!1sen!2sin" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>


    {/* </div> */}


    {/* <!-- SCROLL TO TOP
    ================================================== --> */}
    <Link  to="/Contact" className="scroll-to-top"><i className="fas fa-angle-up" aria-hidden="true"><IoIosArrowUp />
    </i></Link>





    </div>



)





}

export default Contact;