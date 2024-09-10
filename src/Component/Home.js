import React from "react";
import {Link,NavLink} from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from "./images/img/banner/slide-01.webp"
import Banner2 from "./images/img/banner/slide-02.webp";
import Banner3 from "./images/img/banner/slide-03.webp";
import img1 from "./images/img/home/seo-service.webp"
import icon1 from "./images/img/icons/09.webp";
import icon2 from "./images/img/icons/icon-web-development.webp";
import img2 from "./images/img/home/branding-service.webp";
import icon3 from "./images/img/icons/10.webp";
import icon4 from "./images/img/icons/icon-branding.webp";
import img3 from "./images/img/home/local-seo-gmb-expert-services.webp";
import icon5 from "./images/img/icons/11.webp";
import icon6 from "./images/img/icons/icon-web-development.webp";
import about1 from "./images/img/content/about3.webp";
import about2 from "./images/img/content/about4.webp";
import about3 from "./images/img/content/about5.webp";
import about4 from "./images/img/content/about1.webp";
import about5 from "./images/img/content/about2.webp";
import chart from "./images/img/content/chart.webp";
import bg from "./images/img/bg/bg-05.webp";
import bg1 from "./images/img/bg/bg-01.webp";
import sicon1 from "./images/img/icons/01.webp"
import sicon2 from "./images/img/icons/02.webp"
import sicon3 from "./images/img/icons/03.webp"
import sicon4 from "./images/img/icons/04.webp"
import sicon5 from "./images/img/icons/05.webp"
import sicon6 from "./images/img/icons/06.webp"
import carosuel1 from "./images/img/home/carousel-1.webp";
import carosuel2 from "./images/img/home/carousel-2.webp";
import carosuel3 from "./images/img/home/carousel-3.webp";
import cimg1 from "./images/img/content/04.png";
import cimg2 from "./images/img/content/06.png";
import content from "./images/img/content/05.webp";
import icon7 from "./images/img/icons/07.webp";
import ceo1 from "./images/img/home/local-seo.webp";
import ceo2 from "./images/img/home/state-seo.webp";
import ceo3 from "./images/img/home/national-seo.webp";
import ceo4 from "./images/img/home/international-seo.webp";
import test1 from "./images/img/avatars/avatar-01.webp";
import test2 from "./images/img/avatars/avatar-02.webp";
import test3 from "./images/img/avatars/avatar-03.webp";
import tab1 from "./images/img/content/tab-01.webp";
import tab2 from "./images/img/content/tab-03.webp";
import tab3 from "./images/img/content/tab-04.webp";
import tab5 from "./images/img/content/tab-05.webp";
import logo1 from "./images/img/logos/google-partner.webp"
import logo2 from "./images/img/logos/google-trends.webp";
import logo3 from "./images/img/logos/google-analytics.webp";
import logo4 from "./images/img/logos/google-keyword-planner.webp";
import team1 from "./images/img/team/suresh-reddy.webp";
import team2 from "./images/img/team/team-02.webp"
import blog1 from "./images/img/blog/blog-01.webp";
import blog2 from "./images/img/blog/blog-02.webp";
import blog3 from "./images/img/blog/blog-03.webp";
import  { useState, useEffect } from 'react';
import  { useRef } from 'react';
import {Helmet} from "react-helmet";

let Home=()=>{


    var settings1 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    }


    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ],

      
      };


      let button=()=>{
        document.getElementById('collapseOne').classList.toggle('show');
        document.getElementById('collapseOne').style.visibility="visible";
        document.getElementById('button').classList.toggle('collapsed');

    }


    let button1=()=>{
        document.getElementById('collapseTwo').classList.toggle('show');
        document.getElementById('collapseTwo').style.visibility="visible";
        document.getElementById('button1').classList.toggle('collapsed');

    }




    let button2=()=>{
        document.getElementById('collapseThree').classList.toggle('show');
        document.getElementById('collapseThree').style.visibility="visible";
        document.getElementById('button2').classList.toggle('collapsed');

    }


let item1=()=>{
    document.getElementById('item1').classList.toggle('resp-tab-active');
    document.getElementById('box1').classList.toggle('resp-tab-content-active');
    document.getElementById('box1').style.display="block";    
    document.getElementById('box2').style.display="none";
    document.getElementById('box3').style.display="none";
    document.getElementById('box4').style.display="none";
    document.getElementById('box5').style.display="none";
}
let item2=()=>{

    document.getElementById('item2').classList.toggle('resp-tab-active');
    document.getElementById('box2').classList.toggle('resp-tab-content-active');
    document.getElementById('box2').style.display="block";
    document.getElementById('box1').style.display="none";
    document.getElementById('box3').style.display="none";
    document.getElementById('box4').style.display="none";
    document.getElementById('box5').style.display="none";

    
}
let item3=()=>{

    document.getElementById('item3').classList.toggle('resp-tab-active');
    document.getElementById('box3').classList.toggle('resp-tab-content-active');
    document.getElementById('box2').style.display="none";
    document.getElementById('box1').style.display="none";
    document.getElementById('box3').style.display="block";
    document.getElementById('box4').style.display="none";
    document.getElementById('box5').style.display="none";
    

    
}
let item4=()=>{
    document.getElementById('item4').classList.toggle('resp-tab-active');
    document.getElementById('box4').classList.toggle('resp-tab-content-active');
    document.getElementById('box2').style.display="none";
    document.getElementById('box1').style.display="none";
    document.getElementById('box3').style.display="none";
    document.getElementById('box4').style.display="block";
    document.getElementById('box5').style.display="none";

    
}
let item5=()=>{
    document.getElementById('item5').classList.toggle('resp-tab-active');
    document.getElementById('box5').classList.toggle('resp-tab-content-active');
    document.getElementById('box2').style.display="none";
    document.getElementById('box1').style.display="none";
    document.getElementById('box3').style.display="none";
    document.getElementById('box4').style.display="none";
    document.getElementById('box5').style.display="block";

}




return(


<div>
        <Helmet>
 
 <title>Home</title>

</Helmet>
        


{/* <!-- BANNER
    ================================================== --> */}



     <section className="py-0 mx-lg-1-6 mx-xl-2-5 mx-xxl-2-9">
        <div className="slider-fade1  w-100">

        <div className="slider-container slider-fade1"style={{overflow:"hidden"}}>
      <Slider {...settings1}>

      <div className=" slider-fade1 background cover-background pt-14 pb-22 py-sm-18 py-lg-20 py-xl-24" data-background="/img/banner/slide-01.webp"  style={{backgroundImage:"url(/slide-01.webp)!important"}} >
                <div className="container position-relative z-index-9">
                    <div className="row align-items-center justify-content-xl-end">
                        <div className="col-lg-9 col-xl-7 col-xxl-6">
                            <h1 className="display-16 display-sm-7 display-lg-4 display-xl-3 mb-2-9">Google Ranking SEO Services</h1>
                            <p className="mb-2-3 font-weight-500 lead d-none d-sm-block">We Provide Google Ranking SEO Services that helps businesses improve their website's search engine ranking.</p>
                            <Link to="/Contact" className="btn-style1"><span>Get Started</span></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item background1  slider-fade1 cover-background pt-14 pb-22 py-sm-18 py-lg-20 py-xl-24" data-background="./images/img/banner/slide-02.webp" style={{backgroundImage:"url("+Banner2+")"}}>
                <div className="container position-relative z-index-9">
                    <div className="row align-items-center justify-content-xl-end">
                        <div className="col-lg-9 col-xl-7 col-xxl-6">
                            <h1 className="display-16 display-sm-7 display-lg-4 display-xl-3 mb-2-9">Expert in Google #1 SEO Rank</h1>
                            <p className="mb-2-3 font-weight-500 lead d-none d-sm-block">This will ensure that your website is seen by more people, which can lead to more customers and more sales.</p>
                            <Link to="/" className="btn-style1"><span>Get Started</span></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item background3  slider-fade1 cover-background pt-14 pb-22 py-sm-18 py-lg-20 py-xl-24" data-background="./images/img/banner/slide-03.webp" style={{backgroundImage:"url("+Banner3+")"}}>
                <div className="container position-relative z-index-9">
                    <div className="row align-items-center justify-content-xl-end">
                        <div className="col-lg-9 col-xl-7 col-xxl-6">
                            <h1 className="display-16 display-sm-7 display-lg-4 display-xl-3 mb-2-9">Grow with Google Ranking Expert</h1>
                            <p className="mb-2-3 font-weight-500 lead d-none d-sm-block">Our Service is help your businesses to grow and improve your search ranking, visibility, Brand awareness & Leads to Sales.</p>
                            <Link to="/" className="btn-style1"><span>Get Started</span></Link>
                        </div>
                    </div>
                </div>
            </div>



      </Slider>
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


{/* <!-- SERVICES
    ================================================== --> */}
    <section>
        <div className="container">
            <div className="section-title mb-1-9 mb-md-6 text-center">
                <span className="sm-title">Where we are Specialized in</span>
                <h2 className="mb-0 h1">Services That Help Grow Your Business</h2>
            </div>
            <div className="row mt-n1-9">
                <div className="col-md-6 col-xl-4 mt-1-9">
                    <div className="card card-style01 border-0 rounded-0">
                        <img src={img1} alt="google seo services" title="Bams Technologies specialised in Google SEO Services and Google Business Profile Expert"/>
                        <div className="title">
                            <div className="d-flex align-items-center">
                                <img src={icon1} alt="SEO Services" title=""/>
                                <h4 className="h5 mb-0 ms-3"><a href="#"> SEO Services</a></h4>
                            </div>
                            <a href="#"><i className="fas fa-arrow-right"></i></a>
                        </div>
                        <div className="overlay text-center">
                            <div>
                                <img src={icon2} className="mb-3" alt="SEO Services" title=""/>
                                <h3 className="text-white h4 mb-3"><a href="#" className="text-white text-primary-hover">Google SEO Services</a></h3>
                                <p className="mb-0 text-white">We focus on the best practices htmlFor google based SEO Services.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-4 mt-1-9">
                    <div className="card card-style01 border-0 rounded-0">
                        <img src={img2} alt="Google Branding Services" title="We are Expertise in Google Search engine optimization. So Branding you in Google is very easy job htmlFor us."/>
                        <div className="title">
                            <div className="d-flex align-items-center">
                                <img src={icon3} alt="Branding Services" title=""/>
                                <h4 className="h5 mb-0 ms-3"><a href="#">Branding Services</a></h4>
                            </div>
                            <a href="#"><i className="fas fa-arrow-right"></i></a>
                        </div>
                        <div className="overlay text-center">
                            <div>
                                <img src={icon4} className="mb-3" alt="Google Branding Services" title=""/>
                                <h3 className="text-white h4 mb-3"><a href="#" className="text-white text-primary-hover">Branding Services</a></h3>
                                <p className="mb-0 text-white">We focus on the your brand visibility & credibility.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-4 mt-1-9">
                    <div className="card card-style01 border-0 rounded-0">
                        <img src={img3} alt="Google Business Profile Expert" title="Google My Business Experts are an internet marketing service and local SEO specialists"/>
                        <div className="title">
                            <div className="d-flex align-items-center">
                                <img src={icon5} alt="Digital Marketing" title=""/>
                                <h4 className="h5 mb-0 ms-3"><a href="#">Local SEO Services</a></h4>
                            </div>
                            <a href="#"><i className="fas fa-arrow-right"></i></a>
                        </div>
                        <div className="overlay text-center">
                            <div>
                                <img src={icon6} className="mb-3" alt="gmb expert" title="google my business expert"/>
                                <h3 className="text-white h4 mb-3"><a href="#" className="text-white text-primary-hover">GMB Optimization</a></h3>
                                <p className="mb-0 text-white">We focus on showcasing your Google Business Profile.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
{/* 
    <!-- ABOUT
    ================================================== --> */}
    <section className="pt-0">
        <div className="container position-relative z-index-3">
            <div className="row align-items-center">
                <div className="col-lg-6 mb-1-9 mb-lg-0">
                    <div className="position-relative text-center pb-sm-22 me-xl-1-9">
                        <img src={about1} className="position-relative z-index-2" alt="Google SEO Expert" title=""/>
                        <img src={about2} className="position-absolute bottom bottom-sm-10 left z-index-3 d-none d-sm-block" alt="Google SEO Expert" title=""/>
                        <img src={about3} className="position-absolute bottom-0 right z-index-1 d-none d-sm-block" alt="Google SEO Expert" title=""/>
                        <div className="p-4 bg-white shadow right right-sm-5 top-10 position-absolute z-index-3">
                            <img src={chart} alt="Google SEO Expert" title=""/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="ps-lg-2-9">
                        <div className="section-title">
                            <span className="sm-title">About Bams Technologies Pvt Ltd</span>
                        </div>
                        <h2 className="h1 mb-1-9">Expert in Google SEO</h2>
                        <p className="mb-1-9">Zammy Zaif, the CEO and founder of Bams Technologies Private Limited, is an expert in Google ranking who specializes in Google SEO Services and has 14 years of experience in search engine optimization & Google Branding.</p>
                        <div className="d-sm-flex mb-2-9">
                            <div className="pe-sm-1-9 border-sm-end text-sm-center mb-3 mb-sm-0">
                                <h3 className="display-16 display-sm-10 display-lg-7 text-primary">14</h3>
                                <p className="mb-0 text-secondary">Years Experience</p>
                            </div>
                            <div className="ps-sm-1-9">
                                <ul className="list-style2 mb-0">
                                  <li ><i className="fa-solid fa-check"></i>Branding in Google</li>
                                    <li><i className="fa-solid fa-check"></i>Optimize Google Business Profile</li>
                                    <li><i className="fa-solid fa-check"></i>Google Search Engine Optimization</li>
                                </ul>
                            </div>
                        </div>
                        <Link to="/" className="btn-style1"><span>Contact Us</span></Link>
                    </div>
                </div>
            </div>
        </div>
        <img src={bg} className="position-absolute bottom-0 right" alt="..."/>
    </section>



    {/* <!-- SERVICES
    ================================================== --> */}
    <section className="bg-dark">
        <div className="container position-relative z-index-3">
            <div className="section-title mb-1-9 mb-md-6 text-center">
                <span className="sm-title">Our SEO Services</span>
                <h2 className="mb-0 h1 text-white">We Provide Google's 1st Rank SEO Services</h2>
            </div>
            <div className="row mt-n2-9">
                <div className="col-md-6 col-xl-4 mt-2-9">
                    <div className="card-style-02 h-100">
                        <div className="d-flex">
                            <div className="flex-shrink-0">
                                <div className="card-icon">
                                    <img src={sicon1} alt="Local SEO Services" title=""/>
                                </div>
                            </div>
                            <div className="flex-grow-1 ms-3 ms-lg-4">
                                <h3 className="h5 mb-3"><a href="#" className="text-white">Local SEO Services</a></h3>
                                <p className="mb-3 text-white opacity7">We assists local businesses to optimise their Google Business profile to Rank 1 on Maps.</p>
                                <a href="#" className="text-white">Read more <i className="fas fa-arrow-right align-middle ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-4 mt-2-9">
                    <div className="card-style-02 h-100">
                        <div className="d-flex">
                            <div className="flex-shrink-0">
                                <div className="card-icon">
                                    <img src={sicon2} alt="Location Based SEO" title=""/>
                                </div>
                            </div>
                            <div className="flex-grow-1 ms-3 ms-lg-4">
                                <h3 className="h5 mb-3"><a href="gmb-seo-services.php" className="text-white">Location Based SEO</a></h3>
                                <p className="mb-3 text-white opacity7">Geo-targeting SEO is the strategy of optimising your website to appear in target location.</p>
                                <a href="#" className="text-white">Read more <i className="fas fa-arrow-right align-middle ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-4 mt-2-9">
                    <div className="card-style-02 h-100">
                        <div className="d-flex">
                            <div className="flex-shrink-0">
                                <div className="card-icon">
                                    <img src={sicon3} alt="State Wise SEO" title=""/>
                                </div>
                            </div>
                            <div className="flex-grow-1 ms-3 ms-lg-4">
                                <h3 className="h5 mb-3"><a href="#" className="text-white">State Wise SEO</a></h3>
                                <p className="mb-3 text-white opacity7">The most effective method to increasing website traffic, online visibility & lead generation.</p>
                                <a href="#" className="text-white">Read more <i className="fas fa-arrow-right align-middle ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-4 mt-2-9">
                    <div className="card-style-02 h-100">
                        <div className="d-flex">
                            <div className="flex-shrink-0">
                                <div className="card-icon">
                                    <img src={sicon4} alt="National SEO" title=""/>
                                </div>
                            </div>
                            <div className="flex-grow-1 ms-3 ms-lg-4">
                                <h3 className="h5 mb-3"><a href="#" className="text-white">National SEO</a></h3>
                                <p className="mb-3 text-white opacity7">We focuses the website on ranking htmlFor highly searched keyword queries on a national level.</p>
                                <a href="#" className="text-white">Read more <i className="fas fa-arrow-right align-middle ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-4 mt-2-9">
                    <div className="card-style-02 h-100">
                        <div className="d-flex">
                            <div className="flex-shrink-0">
                                <div className="card-icon">
                                    <img src={sicon5} alt="International SEO" title=""/>
                                </div>
                            </div>
                            <div className="flex-grow-1 ms-3 ms-lg-4">
                                <h3 className="h5 mb-3"><a href="#" className="text-white">International SEO</a></h3>
                                <p className="mb-3 text-white opacity7">Process of promoting a website among crawlers and searchers to recognize the brand globally.</p>
                                <a href="#" className="text-white">Read more <i className="fas fa-arrow-right align-middle ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-4 mt-2-9">
                    <div className="card-style-02 h-100">
                        <div className="d-flex">
                            <div className="flex-shrink-0">
                                <div className="card-icon">
                                    <img src={sicon6} alt="SEO Content Writing" title=""/>
                                </div>
                            </div>
                            <div className="flex-grow-1 ms-3 ms-lg-4">
                                <h3 className="h5 mb-3"><a href="#" className="text-white">SEO Content Writing</a></h3>
                                <p className="mb-3 text-white opacity7">We focus on writing content with the goal of ranking on the first page of Google search engine.</p>
                                <a href="#" className="text-white">Read more <i className="fas fa-arrow-right align-middle ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img src={bg1} className="position-absolute bottom-0 left" alt="Best SEO Service Company"/>
    </section>


    <section className="text-m-center">

        <div id="myCarousel" className="carousel slide" data-interval="true">
            {/* <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
                <li data-target="#myCarousel" data-slide-to="4"></li>
                <li data-target="#myCarousel" data-slide-to="5"></li>
            </ol> */}
            <div className="container">
                <div className="carousel-inner">
                    {/* <div className="item active">
                        <div className="row align-item-center">
                            <div className="col-lg-5 mb-5 mb-lg-0">
                                <img src={carosuel1} alt="SEO Services" title="" />
                            </div>
                            <div className="col-lg-7">
                                <div className="ps-lg-2-9">
                                    <div className="section-title">
                                        <span className="sm-title">Can’t you keep update with Google</span>
                                    </div>
                                    <h2 className="h1 mb-1-9">Ever changing Algorithms</h2>
                                    <p className="mb-1-5 text-l-justify text-m-center">Google's algorithm is subject to change at any time, with changes ranging from small to large scale. In order to keep up-to-date, your SEO strategy should also be updated and improved on a regular basis. This will also put you ahead of competitors who may be slow to adopt new changes to Google's algorithm.</p>
                                    <p className="mb-0">A successful strategy from a few years ago may not work at all today. We love staying current with trends, which we do on a regular basis. Our work htmlFor a variety of industries in different global locations has given us unique insight into both the nebulous and profound aspects of SEO. Bams Technologies and our team of SEO experts strive htmlFor perfection in every task to meet client expectations and set a new benchmark every time we finish a project. This allows us to provide our clients with tangible results.</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                            <div className="slider-container slider-fade1"style={{overflow:"hidden"}}>
                            <Slider {...settings1}>

                    <div className="item">
                        <div className="row align-item-center">
                            <div className="col-lg-5 mb-5 mb-lg-0">
                                <img src={carosuel2} alt="SEO Services" title="" />
                            </div>
                            <div className="col-lg-7">
                                <div className="ps-lg-2-9">
                                    <div className="section-title">
                                        <span className="sm-title">Why Google doesn't</span>
                                    </div>
                                    <h2 className="h1 mb-1-9">Make your website Rank #1</h2>
                                    <p className="mb-1-5 text-l-justify text-m-center">There are a variety of factors that can influence why a website does or does not rank highly on Google. However, some common reasons why a website might not rank as highly as desired on Google include not having enough high-quality content, not having enough backlinks from other websites, or having a low PageRank. </p>
                                    <p className="mb-0">The contest htmlFor ranking on Google is tough, and claiming a place on page one and rank one is difficult, but it is achievable with the right strategy. When evaluating how to rank your website in Google search engine results pages, Google examines multiple factors such as title, headers, useful and relevant content, creating high quality content, establishing high quality backlinks, and so on. To develop a great strategy, we know how to balance all of the factors mentioned. Let us make it happen htmlFor your company grow with google ranking expert.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="row align-item-center">
                            <div className="col-lg-5 mb-5 mb-lg-0">
                                <img src={carosuel3} alt="SEO Services" title="" />
                            </div>
                            <div className="col-lg-7">
                                <div className="ps-lg-2-9">
                                    <div className="section-title">
                                        <span className="sm-title">SEO EXPERTS VS GOOGLE SEO EXPERTS</span>
                                    </div>
                                    <h2 className="h1 mb-1-9">Why Google SEO Expert</h2>
                                    <p className="mb-1-5 text-l-justify text-m-center">It is essential to have at a minimum a fundamental website. People rely on Google to find what they need and it is the most reliable and popular search engine globally. </p>
                                    <p className="mb-0">Google SEO experts stay current with Google algorithms, ranking factors and guidelines to better your business ranking. Therefore, it is wiser to trust a Google SEO expert rather than seo experts. We are expert in Google SEO and Google Business Profile Optimization. Our CEO Zammy Zaif has been acknowledged by Google Search Engine's automated artificial intelligence bots as the world's best Google SEO ranking expert since 2019. He has over 14 years of experience in the SEO industry and has an excellent track record of achieving high rankings htmlFor websites on the Google SERP by executing white hat SEO strategies that are based on Google guidelines and algorithms.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="row align-item-center">
                            <div className="col-lg-5 mb-5 mb-lg-0">
                                <img src={carosuel2} alt="SEO Services" title="" />
                            </div>
                            <div className="col-lg-7">
                                <div className="ps-lg-2-9">
                                    <div className="section-title">
                                        <span className="sm-title">WE ARE SPECIALIZED IN GMB</span>
                                    </div>
                                    <h2 className="h1 mb-1-9">Google Business Profile Expert</h2>
                                    <p className="mb-1-5 text-l-justify text-m-center">Google Maps Optimization is also addressed as Google Business Profile or GMB. It is a fundamental revolution in search engine optimization and internet marketing. Its purpose is to help small and medium-sized local businesses reach their geo-target audience and customers.</p>
                                    <p className="mb-0">Typically, Google’s Search Engine will showcase 1 business profile and 3 Local Businesses on Google’s First Page. Google is constantly improving its algorithm to provide better answers. Getting your business to rank and maintain its position of Google's local map demands constant management to keep up with the changes Google makes on a frequent basis. Our mission is to do that. We are experts at showcasing your Google Business Profile on the first page of Google searches. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="row align-item-center">
                            <div className="col-lg-5 mb-5 mb-lg-0">
                                <img src={carosuel1} alt="SEO Services" title="" />
                            </div>
                            <div className="col-lg-7">
                                <div className="ps-lg-2-9">
                                    <div className="section-title">
                                        <span className="sm-title">Bams Technologies PVT LTD</span>
                                    </div>
                                    <h2 className="h1 mb-1-9">Grow with Google SEO Expert</h2>
                                    <p className="mb-1-5 text-l-justify text-m-center">Do you want your business to appear at the top of Google search results and continue to grow? It's simple, the higher you rank in Google search results, the greater your chances of gaining customer and income. Specifically high exposure correlates directly with increased brand recognition and company growth. The key challenge is overcoming heavy competition and rising to high SERP rankings, raising brand awareness, increasing site traffic, and increasing credibility. </p>
                                    <p className="mb-0">SEO is not only about getting top rank in search engines but also about providing a professional experience to generate revenue through SEO services. We are experts in that field since we specialise in Branding Consulting and understand what your clients and customers needs. Bams technologies private limited's ultimate goal is to support you grow your business.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="row align-item-center">
                            <div className="col-lg-5 mb-5 mb-lg-0">
                                <img src={carosuel3} alt="SEO Services" title="" />
                            </div>
                            <div className="col-lg-7">
                                <div className="ps-lg-2-9">
                                    <div className="section-title">
                                        <span className="sm-title">We are Expertise in</span>
                                    </div>
                                    <h2 className="h1 mb-1-9">Google SEO Content Writing</h2>
                                    <p className="mb-1-5 text-l-justify text-m-center">The ability to inspire the audience wanting more is a common feature of all outstanding pieces of data. Valuable content can only be obtained through high-quality writing and an unlimited flow of innovation. By utilising high-quality writing services, your business may enhance its content strategy, reduce the scope of mistake, and get a quick ROI.</p>
                                    <p className="mb-0">Amazing content results in great outcomes, as well as the obligation to assure the intake and output of even greater content. You may get consistent and excellent content htmlFor your business by choosing our expert content writing services. Good content may help your business stand out in a variety of ways, from developing meaningful relationships with your target audience to garnering credibility with investors. </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    </Slider>
    </div>




                </div>


                <a className="left carousel-control"   data-slide="prev">
                    <span className="fas fa-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control"   data-slide="next">
                    <span className="fas fa-chevron-right"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div></section>    


        <section className="bg-dark pb-19">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-5 mb-1-6 mb-xl-0">
                        <div className="pe-xl-1-9">
                            <div className="section-title left mb-1-9">
                                <span className="sm-title">Book a Call</span>
                                <h3 className="mb-0 h3 mt-2 text-white">Google Branding Expert</h3>
                            </div>
                            <p className="mb-1-9 text-white">If you want to know more about how to improve your brand on Google, you can book a call with our Google branding expert. We offer customized Google SEO services to help optimize your website and Google Business Profile listing, create engaging content, and build a strong presence on Google. Bams Technologies is a globally recognised Google SEO Service Provider with a proven track record of results that have earned in reputation and fame htmlFor many organisations, as well as ROI.
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <form className="contact home-form" action="mailer.php" method="post" encType="multipart/form-data">
                            <div className="quform-elements">
                                <div className="row">

                                        {/* <!-- Begin Text input element --> */}
                                        <div className="col-md-6 mb-10p">
                                            <div className="quform-element form-group">
                                                <div className="quform-input">
                                                    <label className="text-white" htmlFor="name">Your Name <span className="quform-required">*</span></label>
                                                    <input className="form-control" id="name" type="text" name="name" placeholder="Your name here" required/>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Text input element --> */}

                                        {/* <!-- Begin Text input element --> */}
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
                                        
                                        <div className="col-lg-6" style={{marginBottom:"30px",marginRight: "auto",marginLeft: "auto"}}>
                                            <div data-sitekey="6LewcC4jAAAAAN7S_PL_vsNpWOTZJ9RLEjtgy28p" required className="g-recaptcha"></div>
                                        </div>


                                        {/* <!-- Begin Submit button --> */}
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
            <img src={cimg1} className="position-absolute top-n10 right" alt="..."/>
            <img src={cimg2} className="position-absolute bottom-0 left" alt="..."/>
        </section>


        {/* <!-- FAQ
    ================================================== --> */}
    <section>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 mb-1-9 mb-lg-0">
                    <div className="pe-lg-6">
                        <h2 className="h1 mb-2-3">We Provide the Best Google SEO Services</h2>
                        <div className="row mb-2-3">
                            <div className="col-sm-5 mb-3 mb-sm-0">
                                <img src={content} alt="Best Google SEO Services"/>
                            </div>
                            <div className="col-sm-7">
                                <p className="mb-0">One of the world's best Google SEO agency, with a team of Certified SEO experts specialising in number one serp rankings in google.</p>
                            </div>
                        </div>
                        <div className="progress-style1">
                            <div className="progress-text">
                                <div className="row">
                                    <div className="col-7 fw-bold">Expert in Google SEO Services</div>
                                    <div className="col-5 text-end">98%</div>
                                </div>
                            </div>
                            <div className="custom-progress progress rounded-3">
                                <div className="animated custom-bar progress-bar slideInLeft" style={{width:"98%"}} aria-valuemax="100" aria-valuemin="0" aria-valuenow="10" role="progressbar"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div>
                        <div id="accordion" className="accordion-style">
                            <div className="card mb-3">
                                <div className="card-header" id="headingOne">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" id="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" onClick={button}>1. Why we are best in google's #1 Rank?</button>
                                    </h5>
                                </div>
                                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-bs-parent="#accordion">
                                    <div className="card-body" >
                                       Our team of experts are highly skilled and experienced in optimizing Google's #1 rank. We implement the latest google algorithms and follow guildelines to get your website to the top of the search engine results pages (SERPs). We also provide ongoing support and maintenance to ensure that your website stays at the top of the SERPs.
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-3">
                                <div className="card-header" id="headingTwo">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" onClick={button1} id="button1" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">2. We are focusing in Google #1 Ranking</button>
                                    </h5>
                                </div>
                                <div id="collapseTwo" className="collapse"  aria-labelledby="headingTwo" data-bs-parent="#accordion">
                                    <div className="card-body" >
                                        Google's #1 rank is the most coveted spot in search engine results pages (SERPs). This is because users are more likely to click on the first result than any other result on the page. A #1 ranking means more traffic to your website, which can lead to more sales and conversions.
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingThree">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" onClick={button2} id="button2" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">3. Who is google ranking seo expert?</button>
                                    </h5>
                                </div>
                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-bs-parent="#accordion">
                                    <div className="card-body">
                                        A Google SEO expert is someone who specializes in improving a website's ranking on Google's search engine results pages (SERP).
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-primary px-1-9 py-2-9 mt-2-9 primary-shadow">
                <div className="row align-items-center text-center text-lg-start">
                    <div className="col-lg-4">
                        <h2 className="mb-0 text-white">Get your Premium Google SEO Report</h2>
                    </div>
                    <div className="col-lg-4 my-2-2 my-lg-0">
                        <div className="contact-icon">
                            <img src={icon7} className="w-30px" alt="..."/>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <h4 className="font-weight-700 text-white">(+91) 63 82 80 83 86</h4>
                        <h4 className="mb-0 font-weight-700 text-white">info@bamstechnologies.org</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- PORTFOLIO
    ================================================== --> */}



    <section className="pt-0 pb-0 bg-dark">
        <div className="container-fluid px-0">
            <div className="carousel-container" style={{overflow:"hidden"}}>
      <Slider {...settings}>



                <div className="portfolio-style01 mb-2-3">
                    <div className="portfolio-img">
                        <img src={ceo1} alt="Local SEO" title=""/>
                    </div>
                    <div className="portfolio-content">
                        <span className="text-primary d-block mb-1 text-uppercase font-weight-600 small">SEO SERVICES</span>
                        <h3 className="mb-3 h4"><a href="#">Local SEO</a></h3>
                        <a href="#">Read more <i className="fas fa-arrow-right align-middle"></i></a>
                    </div>
                </div>
                <div className="portfolio-style01 mb-2-3">
                    <div className="portfolio-img">
                        <img src={ceo2} alt="State Wise SEO" title=""/>
                    </div>
                    <div className="portfolio-content">
                        <span className="text-primary d-block mb-1 text-uppercase font-weight-600 small">SEO SERVICES</span>
                        <h3 className="mb-3 h4"><a href="#">State Wise SEO</a></h3>
                        <a href="#">Read more <i className="fas fa-arrow-right align-middle"></i></a>
                    </div>
                </div>
                <div className="portfolio-style01 mb-2-3">
                    <div className="portfolio-img">
                        <img src={ceo3} alt="National SEO" title=""/>
                    </div>
                    <div className="portfolio-content">
                        <span className="text-primary d-block mb-1 text-uppercase font-weight-600 small">SEO SERVICES</span>
                        <h3 className="mb-3 h4"><a href="#">National SEO</a></h3>
                        <a href="#">Read more<i className="fas fa-arrow-right align-middle"></i></a>
                    </div>
                </div>
                <div className="portfolio-style01 mb-2-3">
                    <div className="portfolio-img">
                        <img src={ceo4} alt="International SEO" title=""/>
                    </div>
                    <div className="portfolio-content">
                        <span className="text-primary d-block mb-1 text-uppercase font-weight-600 small">SEO SERVICES</span>
                        <h3 className="mb-3 h4"><a href="#">International SEO</a></h3>
                        <a href="#">Read more <i className="fas fa-arrow-right align-middle"></i></a>
                    </div>
                </div>


      </Slider>
    </div>

          
        </div>
    </section>


    {/* <!-- TESTIMONIAL
    ================================================== --> */}
    <section className="bg-dark pt-7 pt-lg-10 pb-lg-16">
        <div className="container">
            <div className="row justify-content-center text-center">
                <div className="col-lg-9">
                    <div className="section-title text-center mb-1-9 mb-md-2-3">
                        <span className="sm-title">Testimonials</span>
                        <h2 className="mb-0 h1 text-white">What Our Clients Say</h2>
                    </div>
                    <div className="position-relative">
                     
                        <div className="slider-container " style={{overflow:"hidden"}}>
      <Slider {...settings1}>

      <div className="position-relative mt-4">
                                <img src={test2} className="rounded-circle mb-3  " alt="GMB #1 Result" style={{marginLeft:"15rem"}} title=""/>
                                <p className="mb-1-9 display-25 display-lg-23 text-white">Overall, I am very pleased with the GMB services from the Zammy team. They have been very helpful in managing my business listings on the #1 position and keeping my information up to date.</p>
                                <h4 className="h5 mb-0 text-primary">Sindhuram</h4>
                                <p className="mb-0 text-white">Speed Reading Coach in Chennai</p>
                            </div>
                            <div className="position-relative mt-4">
                                <img src={test1} className="rounded-circle mb-3  " alt="SEO Client"style={{marginLeft:"15rem"}} title=""/>
                                <p className="mb-1-9 display-25 display-lg-23 text-white">We sell large format printers, lasers & CNC machines, cutting plotters, Dx5 Eco Solvent ink as well as spare parts. Zammy improved my website to #1 of Google in our country. BAHRAIN</p>
                                <h4 className="h5 mb-0 text-primary">Ahmed</h4>
                                <p className="mb-0 text-white">Nabtaker Sign</p>
                            </div>
                            <div className="position-relative mt-4">
                                <img src={test3} className="rounded-circle mb-3" alt="SEO Client"style={{marginLeft:"15rem"}} title=""/>
                                <p className="mb-1-9 display-25 display-lg-23 text-white">I recommend SEO services from Bams Technologies because they are affordable & deliver results. They Expert in Google SEO & they will improve your website so it generates more traffic from Google.</p>
                                <h4 className="h5 mb-0 text-primary">Jesu Raja</h4>
                                <p className="mb-0 text-white">Scuba Import Exports</p>
                            </div>       
      </Slider>
    </div>



                       
                        <h6 className="testimonial-quote">“</h6>
                    </div>
                </div>
            </div>
        </div>
        <img src={cimg1} className="position-absolute top-n10 right" alt="Google SEO Services" title=""/>
        <img src={cimg2} className="position-absolute bottom-0 left" alt="Google SEO Services" title=""/>
    </section>



    {/* <!-- TABS
    ================================================== --> */}
    <section className="pt-lg-0 overflow-visible">
        <div className="container position-relative z-index-1">
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="horizontaltab tab-style1 top-margin">
                        <ul className="resp-tabs-list hor_1 text-center">
                            <li className="resp-tab-item hor_1 " id="item1" onClick={item1}>Mission and vision</li>
                            <li className="resp-tab-item hor_1" id="item2" onClick={item2}>Our challenges</li>
                            <li className="resp-tab-item hor_1" id="item3" onClick={item3}>Partners</li>
                            <li className="resp-tab-item hor_1" id="item4" onClick={item4}>Our team</li>
                            <li className="resp-tab-item hor_1" id="item5" onClick={item5}>Careers with us</li>
                        </ul>
                        <div id="box1"className="resp-tabs-container hor_1 p-0 resp-tab-content hor_1 ">
                            <div>
                                <div className="row align-items-center mt-4" >
                                    <div className="col-lg-6 mb-1-9 mb-lg-0">
                                        <img src={tab1} alt="..."/>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="ps-lg-4">
                                            <h3 className="mb-10p">Our Mission</h3>
                                            <p className="mb-3">Our mission is to achieve 1 lakh clients <b>websites rank #1 in Google</b> SERPs, ahead of their competition.</p>
                                            <h3 className="mb-10p">Our Vision</h3>
                                            <div className="pe-lg-4">
                                                <p className="mb-0">Our vision is to transform the trend away from traditional SEO toward modernised Google SEO. Because Google's ever-changing algorithm requires that content be genuine as well as the business to be trustworthy.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="box2" className="resp-tabs-container hor_1 p-0 resp-tab-content hor_1 ">
                            <div>
                                <div className="row align-items-center">
                                    <div className="col-lg-6 mb-1-9 mb-lg-0">
                                        <h4 className="mb-4">“We are one of the 3.8 million digital marketers globally. However, we specialise in Google SEO and exclusively work for #1 Google SERP rankings.”</h4>
                                        <p className="d-flex align-items-center mb-4"><span className="fw-bold text-dark me-2">Zammy Zaif</span> -<label className="ms-2 mb-0">World's Best Google Ranking Expert</label></p>
                                        <p>We are committed to providing our customers with exceptional service while offering our employees the best training.</p>
                                        <Link to="/Contact" className="btn-style1 secondary"><span>Contact Us</span></Link>
                                    </div>
                                    <div className="col-lg-6">
                                        <img src={tab2} alt="..."/>
                                    </div>
                                </div>
                            </div>

                        </div>

                         <div id="box3" className="resp-tabs-container hor_1 p-0 resp-tab-content hor_1 ">

                         <div>
                                <div className="row">
                                    <div className="col-lg-6 mb-1-9 mb-lg-0">
                                        <div className="pe-xl-1-9">
                                            <img src={tab3} alt="..."/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <h3>Our Technology Partners</h3>
                                        <p className="w-lg-80 mb-md-2-9 mb-1-9">We cooperated with Technology Managers to expand its abilities at each progression of the product advancement process.</p>
                                        <div className="row mb-2-9 mt-n1-9">
                                            <div className="col-6 col-sm-3 mt-1-9">
                                                <img src={logo1} alt="google partner" title=""/>
                                            </div>
                                            <div className="col-6 col-sm-3 mt-1-9">
                                                <img src={logo2} alt="google trends" title=""/>
                                            </div>
                                            <div className="col-6 col-sm-3 mt-1-9">
                                                <img src={logo3} alt="google analytics" title=""/>
                                            </div>
                                            <div className="col-6 col-sm-3 mt-1-9">
                                                <img src={logo4} alt="google keyword planner" title=""/>
                                            </div>
                                        </div>
                                        <Link to="/Contact" className="btn-style1 secondary"><span>Contact Us</span></Link>
                                    </div>
                                </div>
                            </div>
                          </div>

                          <div id="box4"className="resp-tabs-container hor_1 p-0 resp-tab-content hor_1 ">
                          <div>
                                <h3 className="mb-1-9 text-center">Meet Our Leaders</h3>
                                <div className="row justify-content-center mt-n1-9">
                                    <div className="col-sm-6 col-lg-4 mt-1-9">
                                        <div className="team-style01">
                                            <div className="image">
                                                <div>
                                                    <img src={team1} alt="Suresh Reddy"/>
                                                    <ul className="mb-0 social ps-0">
                                                        <li>
                                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="pt-3">
                                                <h3 className="h5 mb-0"><a href="#">Suresh Reddy</a></h3>
                                                <p className="mb-0 small">Co-Founder & Director</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4 mt-1-9">
                                        <div className="team-style01">
                                            <div className="image">
                                                <div>
                                                    <img src={team2} alt="..."/>
                                                    <ul className="mb-0 social ps-0">
                                                        <li>
                                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="pt-3">
                                                <h3 className="h5 mb-0"><a href="#">Zammy Zaif</a></h3>
                                                <p className="mb-0 small">Founder & CEO</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--<div className="col-sm-6 col-lg-3 mt-1-9">-->
                                    <!--    <div className="team-style01">-->
                                    <!--        <div className="image">-->
                                    <!--            <div>-->
                                    <!--                <img src="img/team/team-03.webp" alt="...">-->
                                    <!--                <ul className="mb-0 social ps-0">-->
                                    <!--                    <li>-->
                                    <!--                        <a href="#"><i className="fab fa-facebook-f"></i></a>-->
                                    <!--                    </li>-->
                                    <!--                    <li>-->
                                    <!--                        <a href="#"><i className="fab fa-twitter"></i></a>-->
                                    <!--                    </li>-->
                                    <!--                    <li>-->
                                    <!--                        <a href="#"><i className="fab fa-linkedin-in"></i></a>-->
                                    <!--                    </li>-->
                                    <!--                </ul>-->
                                    <!--            </div>-->
                                    <!--        </div>-->
                                    <!--        <div className="pt-3">-->
                                    <!--            <h3 className="h5 mb-0"><a href="#">Mustafa Noorani</a></h3>-->
                                    <!--            <p className="mb-0 small">Business Development Manager</p>-->
                                    <!--        </div>-->
                                    <!--    </div>-->
                                    <!--</div>--> */}
                                 </div>
                            </div>
                          </div>

                          <div id="box5" className="resp-tabs-container hor_1 p-0 resp-tab-content hor_1 ">
                          <div>
                                <div className="row align-items-center">
                                    <div className="col-lg-6 mb-1-9 mb-lg-0">
                                        <h4 className="mb-4">Why work with us?</h4>
                                        <div className="row mb-1-9">
                                            <div className="col-md-6 mb-2 mb-md-0">
                                                <ul className="list-style2 mb-0">
                                                    <li>Work with Google Expert</li>
                                                    <li>Passionate Environment</li>
                                                    <li>Regular Growth</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6">
                                                <ul className="list-style2 mb-0">
                                                    <li>Personal Development</li>
                                                    <li>Skills Development</li>
                                                    <li>Flexible hours</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <Link to="/Contact" className="btn-style1 secondary"><span>Contact Us</span></Link>
                                    </div>
                                    <div className="col-lg-6">
                                        <img src={tab5} alt="SEO Services"/>
                                    </div>
                                </div>
                            </div> 
                          </div>

                    </div>

                </div>
            </div>
        </div>
    </section>
{/* 
    <!-- COUNTER
    ================================================== --> */}
    <section className="pt-0">
        <div className="container">
            <div className="row text-center mt-n1-9 position-relative z-index-1">
                <div className="col-6 col-lg-3 mt-1-9">
                    <div className="counter-style2">
                        <h3 className="display-14 display-sm-12 display-lg-10 text-primary"><span className="countup">170</span>+</h3>
                        <span className="fw-bold text-uppercase">Customers</span>
                    </div>
                </div>
                <div className="col-6 col-lg-3 mt-1-9">
                    <div className="counter-style2">
                        <h3 className="display-14 display-sm-12 display-lg-10 text-primary"><span className="countup">1</span></h3>
                        <span className="fw-bold text-uppercase">Branch</span>
                    </div>
                </div>
                <div className="col-6 col-lg-3 mt-1-9">
                    <div className="counter-style2">
                        <h3 className="display-14 display-sm-12 display-lg-10 text-primary"><span className="countup">30</span>+</h3>
                        <span className="fw-bold text-uppercase">Employees</span>
                    </div>
                </div>
                <div className="col-6 col-lg-3 mt-1-9">
                    <div>
                        <h3 className="display-14 display-sm-12 display-lg-10 text-primary"><span className="countup">18</span>+</h3>
                        <span className="fw-bold text-uppercase">Countries</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
{/* 
    <!-- CALL TO ACTION
    ================================================== --> */}
    <section className="jarallax dark-overlay bg-dark">
        <div className="container">
            <div className="row text-center justify-content-center">
                <div className="col-xl-11">
                    <h2 className="mb-1-9 display-13 display-sm-8 display-md-6 display-lg-3 text-white">Mission is to Growth Your Business & More</h2>
                    <Link to="/Contact" className="btn-style1 white-border"><span>Contact Us</span></Link>
                </div>
            </div>
        </div>
         <img src={cimg1} className="position-absolute top-n10 right" alt="Bams Technologies" title=""/>
            <img src={cimg2} className="position-absolute bottom-0 left" alt="Bams Technologies" title=""/>
    </section>

    <section className="pb-0">
        <div className="container">
            <div className="row align-items-xl-center flex-row-reverse about-style-03">
                <div className="col-lg-6 mb-5 mb-lg-0">
                    <div className="row pe-lg-2-9">
                        <div className="col-6">
                            <img src={about4} alt="Bams Technologies" title=""/>
                        </div>
                        <div className="col-6">
                            <img src={about5} alt="Bams Technologies" title=""/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 text-l-justify text-m-center">
                    <div className="ps-lg-2-9">
                        <div className="section-title">
                            <span className="sm-title">We work for Google's Best Results</span>
                        </div>
                        <h2 className="h1 mb-1-9">Bams Technologies</h2>
                        <p className="mb-1-5">Bams Technologies is a leading Google SEO service provider, providing full SEO solutions to all kinds of businesses locally, regionally and worldwide. We specialise in Google and offer high-quality customised SEO packages worldwide based on the needs of our clients.</p>
                        <p className="mb-1-5">We've spent the past 14 years optimising our valuable clients' websites and seen the peaks & valleys of ever-changing SEO trend, and our experience will undoubtedly help you stay on top of the competition. So choose Bams Technologies Private Limited, the Google based SEO company in Technopark, Trivandrum, Kerala - India expertise in various types of Google SEO services like Geo Targeted SEO, National SEO & Global SEO.</p>
                        <Link to="/Contact" className="btn-style1"><span>Contact US</span></Link>
                    </div>
                </div>
            </div>

        </div>
    </section>


    {/* <!-- BLOG
    ================================================== --> */}
    <section>
        <div className="container">
            <div className="section-title mb-1-9 mb-md-6 text-center">
                <span className="sm-title">Our Blog</span>
                <h2 className="mb-0 h1">Read Our Latest Insights</h2>
            </div>
            <div className="row g-xl-5 mt-n2-2">
                <div className="col-md-6 col-lg-4 mt-2-2">
                    <article className="card card-style-04 h-100 rounded-0">
                        <div className="blog-img position-relative overflow-hidden">
                            <img src={blog1} alt="..."/>
                            <div className="card-list">
                                <a href="https://it2.tv/seo-expert-vs-google-ranking-expert.php" target="_blank">SEO</a>
                            </div>
                        </div>
                        <div className="card-body p-1-9">
                            <span className="text-primary d-block mb-2 font-weight-600">17 October, 2022</span>
                            <h3 className="h4 mb-0"><a href="https://it2.tv/seo-expert-vs-google-ranking-expert.php" target="_blank">Google Ranking Expert vs SEO Expert</a></h3>
                        </div>
                        <div className="d-flex fw-bold border-top px-1-9 py-3 border-color-light-black justify-content-between">
                            <a href="https://it2.tv/seo-expert-vs-google-ranking-expert.php" target="_blank">Read more</a>
                            <a href="https://it2.tv/seo-expert-vs-google-ranking-expert.php" target="_blank"><i className="fas fa-arrow-right"></i></a>
                        </div>
                    </article>
                </div>
                <div className="col-md-6 col-lg-4 mt-2-2">
                    <article className="card card-style-04 h-100 rounded-0">
                        <div className="blog-img position-relative overflow-hidden">
                            <img src={blog2} alt="..."/>
                            <div className="card-list">
                                <a href="https://it2.tv/seo-practices-2022.php"  target="_blank">SEO</a>
                            </div>
                        </div>
                        <div className="card-body p-1-9">
                            <span className="text-primary d-block mb-2 font-weight-600">17 October, 2021</span>
                            <h3 className="h4 mb-0"><a href="https://it2.tv/seo-practices-2022.php"  target="_blank">SEO Practices 2022</a></h3>
                        </div>
                        <div className="d-flex fw-bold border-top px-1-9 py-3 border-color-light-black justify-content-between">
                            <a href="https://it2.tv/seo-practices-2022.php"  target="_blank">Read more</a>
                            <a href="https://it2.tv/seo-practices-2022.php"  target="_blank"><i className="fas fa-arrow-right"></i></a>
                        </div>
                    </article>
                </div>
                <div className="col-md-6 col-lg-4 mt-2-2">
                    <article className="card card-style-04 h-100 rounded-0">
                        <div className="blog-img position-relative overflow-hidden">
                            <img src={blog3} alt="..."/>
                            <div className="card-list">
                                <a href="https://it2.tv/google-guidelines-2022.php"  target="_blank">SEO</a>
                            </div>
                        </div>
                        <div className="card-body p-1-9">
                            <span className="text-primary d-block mb-2 font-weight-600">17 December, 2021</span>
                            <h3 className="h4 mb-0"><a href="https://it2.tv/google-guidelines-2022.php"  target="_blank">Google Guidelines 2022</a></h3>
                        </div>
                        <div className="d-flex fw-bold border-top px-1-9 py-3 border-color-light-black justify-content-between">
                            <a href="https://it2.tv/google-guidelines-2022.php"  target="_blank">Read more</a>
                            <a href="https://it2.tv/google-guidelines-2022.php"  target="_blank"><i className="fas fa-arrow-right"></i></a>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>





    </div>



)





}

export default Home;