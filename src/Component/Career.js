import React from "react";
import {Link,NavLink} from "react-router-dom";
import Banner from "./images/img/banner/page-title.webp"
import {Helmet} from "react-helmet";

let Career=()=>{





return(


    <div>


<Helmet>
 
 <title>Career</title>

</Helmet>
        

{/* <!-- PAGE TITLE
        ================================================== --> */}
        <section className="page-title-section bg-img cover-background mx-lg-1-6 mx-xl-2-5 mx-xxl-2-9 left-overlay-dark" data-overlay-dark="8" data-background="img/banner/page-title.webp" style={{backgroundImage:"url("+Banner+")"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="position-relative">
                            <h1>Career</h1>
                        </div>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>Career</li>
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

        <section>
            <div className="container">
                <div className="section-title mb-1-9 mb-md-6 text-center">
                    <span className="sm-title">Career</span>
                    <h2 className="mb-0 h1">Positions We Offer</h2>
                </div>
                <div className="row g-xl-5 mt-n2-2">
                    <div className="col-md-6 col-lg-4 mt-2-2">
                        <article className="card card-style-04 h-100 rounded-0">
                            <div className="blog-img position-relative overflow-hidden">
                                <div className="card-list p-relative">
                                  <p>Operations Executive</p>
                                </div>
                            </div>
                            <div className="card-body p-1-9">
                                <span className="text-primary d-block mb-2 font-weight-600">Opening Date : March 31, 2024</span>
                                <h3 className="h4 mb-10p"><a href="operations-executive.php">Hiring Dedicated Operations Executive</a></h3>
                                <p className="mb-0">Female Recent Graduates only, Work from Home - Full Time</p>
                            </div>
                            <div className="d-flex fw-bold border-top px-1-9 py-3 border-color-light-black justify-content-between">
                                <a href="https://bamstechnologies.org/operations-executive.php">Apply Now</a>
                                <a href="https://bamstechnologies.org/operations-executive.php"><i className="fas fa-arrow-right"></i></a>
                            </div>
                        </article>
                    </div>
                    
                    
                    <div className="col-md-6 col-lg-4 mt-2-2">
                        <article className="card card-style-04 h-100 rounded-0">
                            <div className="blog-img position-relative overflow-hidden">
                                <div className="card-list p-relative">
                                  <p>SEO Analyst</p>
                                </div>
                            </div>
                            <div className="card-body p-1-9">
                                <span className="text-primary d-block mb-2 font-weight-600">Opening Date : March 31, 2024</span>
                                <h3 className="h4 mb-10p"><a href="hiring-seo-specialist.php">Hiring SEO Analyst</a></h3>
                                <p className="mb-0">Work from Home - Full Time</p>
                            </div>
                            <div className="d-flex fw-bold border-top px-1-9 py-3 border-color-light-black justify-content-between">
                                <a href="https://bamstechnologies.org/hiring-seo-specialist.php">Apply Now</a>
                                <a href="https://bamstechnologies.org/hiring-seo-specialist.php"><i className="fas fa-arrow-right"></i></a>
                            </div>
                        </article>
                    </div>
                    
                    
                    <div className="col-md-6 col-lg-4 mt-2-2">
                        <article className="card card-style-04 h-100 rounded-0">
                            <div className="blog-img position-relative overflow-hidden">
                                <div className="card-list p-relative">
                                  <p>SEO Content Writer</p>
                                </div>
                            </div>
                            <div className="card-body p-1-9">
                                <span className="text-primary d-block mb-2 font-weight-600">Opening Date : March 31, 2024</span>
                                <h3 className="h4 mb-10p"><a href="hiring-content-writer.php">Hiring SEO Content Writer</a></h3>
                                <p className="mb-0">Work from Home - Full Time</p>
                            </div>
                            <div className="d-flex fw-bold border-top px-1-9 py-3 border-color-light-black justify-content-between">
                                <a href="https://bamstechnologies.org/hiring-content-writer.php">Apply Now</a>
                                <a href="https://bamstechnologies.org/hiring-content-writer.php"><i className="fas fa-arrow-right"></i></a>
                            </div>
                        </article>
                    </div>
                    
                    
                </div>
            </div>
        </section>





    </div>



)





}

export default Career;