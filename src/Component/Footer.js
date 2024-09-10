import React from "react";
import {Link,NavLink} from "react-router-dom"
import img1 from "./images/img/icons/07.png"
import img2 from "./images/img/logos/footer-light-logo.webp"
import img3 from "./images/img/icons/08.webp"

let Footer=()=>{





return(


    <div>



<footer className="position-relative pt-0">
            <div className="bg-primary py-1-9 mb-6 mb-xxl-10">
                <div className="container">
                    <div className="row mt-n1-9 align-items-center">
                        <div className="col-md-6 col-lg-4 mt-1-9">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img src={img1} alt="..."/>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <p className="mb-0 text-white">Contact Us</p>
                                    <h3 className="mb-0 h5 text-white">+91-6382808386</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mt-1-9 text-start text-lg-center">
                            <div className="footer-logo">
                                <Link to="/"><img src={img2} alt="google seo agency"/></Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mt-1-9">
                            <div className="d-flex align-items-center text-lg-end">
                                <div className="flex-grow-1 ms-3 ms-lg-0 me-lg-3 order-2 order-lg-1">
                                    <p className="mb-0 text-white">Mail Us</p>
                                    <h3 className="mb-0 h5 text-white">info@bamstechnologies.org</h3>
                                </div>
                                <div className="flex-shrink-0 order-1 order-lg-2">
                                    <img src={img3} alt="..."/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row mt-n5 pb-6 pb-xxl-10">
                    <div className="col-md-6 col-lg-5 mt-5">
                        <h3 className="text-white h5 mb-1-9">About Company</h3>
                        <h4 className="text-white mb-1-9 fw-light w-75 display-27 lh-base opacity8">We have 14+ years experience. Helping you overcome technology challenges.</h4>
                        <ul className="social-icon-style1">
                                <li><a href="https://twitter.com/bamstechnology" target="_blank"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="https://www.instagram.com/googleinfluencer" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="https://www.linkedin.com/company/bams-technologies/" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="https://bamstechnologies.tumblr.com/" target="_blank"><i className="fab fa-tumblr"></i></a></li>
                                <li className="me-0"><a href="https://goo.gl/maps/USiQy4Hm6RtH77bXA" target="_blank"><i className="fas fa-map-marker"></i></a></li>
                            </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 mt-5">
                        <div className="ps-0">
                            <h3 className="text-white h5 mb-1-9">Contacts</h3>
                            <ul className="footer-link mb-0 list-unstyled">
                                <li className="text-white mb-3">
                                    <strong>Adress:</strong> <span className="opacity8"><a href="https://goo.gl/maps/USiQy4Hm6RtH77bXA" target="_blank">TechnoPark, Trivandrum, India - 695582</a></span>
                                </li>
                                <li className="text-white mb-3">
                                    <strong>Email:</strong> <span className="opacity8">info@bamstechnologies.org</span>
                                </li>
                                <li className="text-white">
                                    <strong>Phone:</strong> <span className="opacity8">+91-6382808386</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mt-5 offset-lg-1">
                        <div className="ps-xl-4">
                            <h3 className="text-white h5 mb-1-9">Newsletter</h3>
                            <p className="text-white opacity8 mb-3">Subscribe to our newsletter to receive updates on the latest news!</p>
                            <form className="quform newsletter-form" action="https://solutichtml.websitelayout.net/quform/newsletter-two.php" method="post" encType="multipart/form-data" >

                                <div className="quform-elements">
                                    <div className="row">

                                        {/* <!-- Begin Text input element --> */}
                                        <div className="col-md-12">
                                            <div className="quform-element mb-0">
                                                <div className="quform-input">
                                                    <input className="form-control" id="email_address" type="text" name="email_address" placeholder="Subscribe with us"/>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Text input element --> */}

                                        {/* <!-- Begin Submit button --> */}
                                        <div className="col-md-12">
                                            <div className="quform-submit-inner">
                                                <button className="btn btn-white text-white m-0" type="submit"><i className="fas fa-paper-plane"></i></button>
                                            </div>
                                            <div className="quform-loading-wrap"><span className="quform-loading"></span></div>
                                        </div>
                                        {/* <!-- End Submit button --> */}
                                    </div>

                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-4 border-top border-color-light-white">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 text-center">
                            <p className="d-inline-block text-white mb-0">&copy; <span className="current-year"></span> Bams Inc Powered by <a href="https://it2.tv/google-ranking-expert.php" className="text-primary text-white-hover">Google Ranking Expert</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        
        
    <div className="buy-theme bg-wa alt-font d-lg-inline-block"><a href="https://api.whatsapp.com/send?phone=916382808386" target="_blank"><i className="fab fa-whatsapp"></i><span>Whatsapp Us</span></a></div>

    <div className="all-demo alt-font d-lg-inline-block bg-ph"><a href="tel:+916382808386" target="_blank"><i className="fa-solid fa-headphones-simple"></i><span>Call Us</span></a></div>
    
    <div className="buy-theme mail-sticky alt-font d-lg-inline-block bg-gm"><button type="button" className="" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="far fa-envelope"></i><span>Mail Us</span></button></div>

    {/* <!-- default Modal--> */}
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog why-choose-01">
            <div className="modal-content bg-secondary">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Book Your Call</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="position-relative">
                            <form className="contact home-form" action="mailer.php" method="post" encType="multipart/form-data" >
                                <div className="quform-elements bg-white-con">
                                    <div className="row">
{/* 
                                        <!-- Begin Text input element --> */}
                                        <div className="col-md-6 mb-10p">
                                            <div className="quform-element form-group">
                                                <div className="quform-input">
                                                    <label className="text-white" htmlFor="name">Your Name <span className="quform-required">*</span></label>
                                                    <input className="form-control" id="name" type="text" name="name" placeholder="Your name here" required/>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Text input element -->

                                        <!-- Begin Text input element --> */}
                                        <div className="col-md-6 mb-10p">
                                            <div className="quform-element form-group">
                                                <div className="quform-input">
                                                    <label className="text-white" htmlFor="email">Your Email <span className="quform-required">*</span></label>
                                                    <input className="form-control" id="email" type="email" name="email" placeholder="Your email here" required/>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Text input element -->
                                        <!-- Begin Text input element --> */}
                                        <div className="col-md-6 mb-10p">
                                            <div className="quform-element form-group">
                                                <div className="quform-input">
                                                    <label className="text-white" htmlFor="website">Your Website <span className="quform-required">*</span></label>
                                                    <input className="form-control" id="website" type="text" name="website" placeholder="Your website address here" required/>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Text input element -->


                                        <!-- Begin Text input element --> */}
                                        <div className="col-md-6 mb-10p">
                                            <div className="quform-element form-group">
                                                <div className="quform-input">
                                                    <label className="text-white" htmlFor="phone">Contact Number <span className="quform-required">*</span></label>
                                                    <input className="form-control" id="phone" type="number" name="phone" placeholder="Your phone here" required/>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Text input element -->

                                        
                                        <!-- Begin Text input element --> */}
                                        <div className="col-md-12 mb-1-6">
                                            <div className="quform-element form-group quform-select-replaced">
                                                <label className="text-white" htmlFor="phone">Select Service </label>
                                                <div className="select">
                                                    <div className="select-box form-control">
                                    <select name="service" className="border-none">
                                        <option value="rank-in-google">I want to rank in Google Search</option>
                                        <option value="gmb-service">I need GMB Services</option>
                                        <option value="branding">I need Branding Services</option>
                                        <option value="website-optimise">I want to Optimise my Website</option>
                                    </select>
                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Text input element --> */}
                                        
                                       <div className="col-lg-6 over-h" style={{marginBottom:"30px",marginRight: "auto",marginLeft: "auto"}}>
                                            <div data-sitekey="6LewcC4jAAAAAN7S_PL_vsNpWOTZJ9RLEjtgy28p" required className="g-recaptcha"></div>
                                        </div>
                                        
{/* 
                                        <!-- Begin Submit button --> */}
                                        <div className="col-md-12">
                                            <div className="quform-submit-inner text-center">
                                                <button className="btn-style1 border-0" type="submit"><span>Book A Call</span></button>
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
        </div>
    </div>
        





    </div>



)





}

export default Footer;