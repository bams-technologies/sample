import React from "react";
import {Link,NavLink} from "react-router-dom"
import Banner from "./images/img/banner/page-title.webp"
import {Helmet} from "react-helmet";

let Blogs=()=>{





return(


    <div>
        <Helmet>
 
 <title>blogs</title>

</Helmet>
        
        


{/* <!-- PAGE TITLE
        ================================================== --> */}
        <section className="page-title-section bg-img cover-background mx-lg-1-6 mx-xl-2-5 mx-xxl-2-9 left-overlay-dark" data-overlay-dark="8" data-background="img/banner/page-title.webp" style={{backgroundImage:"url("+Banner+")"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="position-relative">
                            <h1>Blogs</h1>
                        </div>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>Blogs</li>
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
                <div className="row g-xl-5 mt-n2-2">
                    
                    <div className="col-md-6 col-lg-4 mt-2-2">
                        <article className="card card-style-04 h-100 rounded-0">
                            <div className="blog-img position-relative overflow-hidden">
                                <div className="card-list p-relative">
                                  <p>SEO Services</p>
                                </div>
                            </div>
                            <div className="card-body p-1-9">
                                <span className="text-primary d-block mb-2 font-weight-600">April 22, 2024</span>
                                <h3 className="h4 mb-10p"><Link to="/">SEO Services in Los Angeles</Link></h3>
                                <p className="mb-0">Growing your business to new levels is the aspiration of many small and large business owners worldwide.</p>
                            </div>
                            <div className="d-flex fw-bold border-top px-1-9 py-3 border-color-light-black justify-content-between">
                                <Link to="/">Read More</Link>
                                <Link to="/"><i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </article>
                    </div>
                    
                    <div className="col-md-6 col-lg-4 mt-2-2">
                        <article className="card card-style-04 h-100 rounded-0">
                            <div className="blog-img position-relative overflow-hidden">
                                <div className="card-list p-relative">
                                  <p>SEO Services</p>
                                </div>
                            </div>
                            <div className="card-body p-1-9">
                                <span className="text-primary d-block mb-2 font-weight-600">April 22, 2024</span>
                                <h3 className="h4 mb-10p"><Link to="/">SEO Services in London</Link></h3>
                                <p className="mb-0">In London, many streams of businesses provide the best products and services.</p>
                            </div>
                            <div className="d-flex fw-bold border-top px-1-9 py-3 border-color-light-black justify-content-between">
                                <Link to="/">Read More</Link>
                                <Link to="/"><i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </article>
                    </div>
                    
                    
                    <div className="col-md-6 col-lg-4 mt-2-2">
                        <article className="card card-style-04 h-100 rounded-0">
                            <div className="blog-img position-relative overflow-hidden">
                                <div className="card-list p-relative">
                                  <p>SEO Services</p>
                                </div>
                            </div>
                            <div className="card-body p-1-9">
                                <span className="text-primary d-block mb-2 font-weight-600">April 22, 2024</span>
                                <h3 className="h4 mb-10p"><Link to="/">Quality SEO Services in North Hollywood</Link></h3>
                                <p className="mb-0">As a quality SEO service company, we provide customized Google Ranking services across various regions.</p>
                            </div>
                            <div className="d-flex fw-bold border-top px-1-9 py-3 border-color-light-black justify-content-between">
                                <Link to="/">Read More</Link>
                                <Link to="/"><i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </article>
                    </div>
                    
                    
                </div>
            </div>
        </section>



{/* 

    <!-- SCROLL TO TOP
    ================================================== --> */}
    <Link to="/" className="scroll-to-top"><i className="fas fa-angle-up" aria-hidden="true"></i></Link>











    </div>



)





}

export default Blogs;