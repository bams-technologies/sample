import React from "react";
import {Link,NavLink} from "react-router-dom"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "./images/img/banner/page-title.webp"
import founder from "./images/img/about/Founder-Peer-Mohamed.webp";
import mission from "./images/img/about/mission-vision-value-bams-technologies.webp";
import history1 from "./images/img/content/history-01.jpg";
import history2 from "./images/img/content/history-02.jpg";
import history3 from "./images/img/content/history-03.jpg";
import history4 from "./images/img/content/history-04.jpg";
import achive from "./images/img/about/bams-technologies-achievement.webp";
import ceo from "./images/img/google-seo-services/google-seo-analyst-with-report.webp";
import process from "./images/img/content/process-line.png";
import process1 from "./images/img/content/process-01.jpg";
import process2 from "./images/img/content/process-02.jpg";
import process3 from "./images/img/content/process-03.jpg";
import choose from "./images/img/content/why-choose-01.jpg";
import icon from "./images/img/icons/icon-web-development.png"
import icon1 from "./images/img/icons/icon-branding.png";
import icon2 from "./images/img/icons/icon-digital-marketing.png";
import bg from "./images/img/bg/bg-07.png";
import suresh from "./images/img/team/suresh-reddy.webp";
import zammy from "./images/img/team/Founder-Zammy-Zaif.png";
import test1 from "./images/img/avatars/avatar-01.webp";
import test2 from "./images/img/avatars/avatar-02.webp";
import test3 from "./images/img/avatars/avatar-03.webp";
import cimg1 from "./images/img/content/04.webp";
import cimg2 from "./images/img/content/06.webp";
import ceo1 from "./images/img/google-seo-services/google-ranking-expert-team.webp";
import ceo2 from "./images/img/google-seo-services/bharathi-google-ranking-expert.webp";
import ceo3 from "./images/img/google-seo-services/icon-14.webp";
import {Helmet} from "react-helmet";

let About=()=>{

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


return(


    <div>
        <Helmet>
 
 <title>About </title>

</Helmet>



{/* <!-- PAGE TITLE
        ================================================== --> */}
        <section className="page-title-section bg-img cover-background mx-lg-1-6 mx-xl-2-5 mx-xxl-2-9 left-overlay-dark" data-overlay-dark="8" data-background="img/banner/page-title.webp"  style={{backgroundImage:"url("+Banner+")"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="position-relative">
                            <h1>About us</h1>
                        </div>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>About Us</li>
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


        <section className="about-section fix section-padding">
            <div className="shape-image">
                <img src="https://modinatheme.com/html/azent-html/assets/img/about/shape.png" alt="shape-img"/>
            </div>
            <div className="shape-image-2">
                <img src="https://modinatheme.com/html/azent-html/assets/img/about/shape-2.png" alt="shape-img"/>
            </div>
            <div className="line-area">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="about-wrapper-3"> 
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-lg-5 mb-1-9 mb-lg-0 md-mb-30">
                        <div className="">
                            <img src={founder} className="position-relative z-index-2" alt="Bams Technologies Pvt Ltd" title=""/>
                        </div>
                    </div>
                    <div className="col-lg-7 text-m-center">
                        <div className="ps-lg-2-9">
                            <div className="section-title">
                                <span className="sm-title">About us</span>
                            </div>
                            <h2 className="h1 mb-0">Bams Technologies Pvt Ltd</h2>
                            <p className="text-l-justify" style={{marginBottom:"10px"}}>Initially established as a Sole Proprietorship firm in 2008 by Founder Mr. Peer Mohamed @ Zammy Zaif, Bams Technologies aimed to provide hardware and networking services. Our journey evolved in 2015, pivoting towards web development and SEO, with a myriad of new ventures on the horizon. Our success has been fueled by a dedicated team of talented individuals. On May 1st, 2019,  in honor of World Labor Day, Bams Technologies transitioned into a Private Limited company with Co-Founder Mr. Suresh Kumar joining Zammy Zaif. While initially focused solely on web development and SEO, we later expanded into app development. Through the highs and lows of business, our commitment has been unwavering in achieving first positions on Google for each of our clients since 2015. Recognized by Google Search for our excellence in elevating businesses to the first position on Google, we take pride in promoting businesses and substantially enhancing sales through the implementation of ethical SEO services.</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>


<section style={{background: "#f7f7f7"}}>
<div className="container position-relative z-index-3">
    <div className="row align-items-center about-style-03">
        <div className="col-lg-6 wow fadeIn" data-wow-delay="200ms">
            <div>
                <div className="section-title mb-1-6">
                    <span className="sm-title">About Us</span>
                    <h3 className="mb-0 h3">Purpose and Principles</h3>
                </div>
                <div className="">
                    <div className="d-flex about-text" style={{marginBottom:"15px"}}>
                        <div className="flex-shrink-0">
                            <i className="fa-brands fa-gitter"></i>
                        </div>
                        <div className="flex-grow-1 ms-3">
                            <h5 className="h5">Our Mission</h5>
                            <p className="mb-0">Our Mission is to help all our clients achieve the First Rank on Google Search Engine Result Page.</p>
                        </div>
                    </div>
                    <div className="d-flex about-text" style={{marginBottom:"15px"}}>
                        <div className="flex-shrink-0">
                            <i className="fa-brands fa-gitter"></i>
                        </div>
                        <div className="flex-grow-1 ms-3">
                            <h5 className="h5">Our Vision</h5>
                            <p className="mb-0">Our aim is to assist businesses in generating leads organically, without relying on sponsored ads.</p>
                        </div>
                    </div>
                    <div className="d-flex about-text" style={{marginBottom:"0"}}>
                        <div className="flex-shrink-0">
                            <i className="fa-brands fa-unity"></i>
                        </div>
                        <div className="flex-grow-1 ms-3">
                            <h5 className="h5">Our Values</h5>
                            <p className="mb-0">Our core value is to assisting in business growth, increasing sales and pushing to greater heights.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-6 wow fadeIn" data-wow-delay="400ms">
            <div className="border-img-ab position-relative text-center text-sm-start">
                <img src={mission} alt=""/>
            </div>
        </div>
    </div>
</div>
</section>


<section>
            <div className="container">
                <div className="section-title mb-1-9 mb-md-6 text-center wow fadeIn" data-wow-delay="200ms">
                    <span className="sm-title">Our History</span>
                    <h3 className="mb-0 h3">How We Started</h3>
                </div>
                <div className="carousel-container" style={{overflow:"hidden"}}>
                <Slider {...settings}>
                    <div className="history-timeline">
                        <div className="timeline-flag"></div>
                        <div className="me-md-4 me-xl-5">
                            <span className="history-year">2008</span>
                            <img src={history1} className="mb-4" alt="..."/>
                            <h5 className="h5">Tech Start</h5>
                            <p className="mb-0">BAMS Technologies began in 2008, focusing on hardware and networking services.</p>
                        </div>
                    </div>
                    <div className="history-timeline">
                        <div className="timeline-flag"></div>
                        <div className="me-md-4 me-xl-5">
                            <span className="history-year">2015</span>
                            <img src={history2} className="mb-4" alt="..."/>
                            <h5 className="h5">Service Growth</h5>
                            <p className="mb-0">In 2015, BAMS Technologies became a proprietorship firm and started offering web development and SEO services.</p>
                        </div>
                    </div>
                    <div className="history-timeline">
                        <div className="timeline-flag"></div>
                        <div className="me-md-4 me-xl-5">
                            <span className="history-year">2019</span>
                            <img src={history3} className="mb-4" alt="..."/>
                            <h5 className="h5">Company Evolution</h5>
                            <p className="mb-0">On Labor Day, May 1st, 2019, we transformed BAMS Technologies into BAMS Technologies Pvt Ltd. </p>
                        </div>
                    </div>
                    <div className="history-timeline">
                        <div className="timeline-flag"></div>
                        <div className="me-md-4 me-xl-5">
                            <span className="history-year">2020</span>
                            <img src={history4} className="mb-4" alt="..."/>
                            <h5 className="h5">SEO Exclusive Services</h5>
                            <p className="mb-0">In 2020, we exclusively provided SEO services, aiming to secure first rank for our clients's businesses through ethical practices.</p>
                        </div>
                    </div>

                    <div className="history-timeline">
                        <div className="timeline-flag"></div>
                        <div className="me-md-4 me-xl-5">
                            <span className="history-year">2024/ Present</span>
                            <img src={achive} className="mb-4" alt="" title=""/>
                            <h5 className="h5">Google Ranking Achievement</h5>
                            <p className="mb-0">Since 2020, we have followed Google's algorithm and achieved consistent success, helping numerous global and local companies.</p>
                        </div>
                    </div>

                    </Slider>
    </div>

                    

                    

            </div>
        </section>
 

        <section className="py-0">
            <div className="container-fluid px-lg-0">
                <div className="row g-0 overlap-column">
                    <div className="col-lg-6 wow fadeIn text-m-center" data-wow-delay="200ms">
                        <div className="bg-dark zi-1 py-6 py-lg-8 py-xl-5 py-xxl-13 px-1-9 px-xxl-9 border-radius-10 position-relative">
                            <div className="w-lg-90 mx-auto">
                                <h2 className="h1 font-weight-700 text-white mb-4">Seo Ranking Services</h2>
                                <p className="mb-4 text-white opacity8 text-l-justify">Bams Technologies Private Limited stands out as a premier company in Google SEO services, employing effective ranking strategies for both local and international businesses. We prioritize aligning your website with Google's dynamic search guidelines through our comprehensive SEO Ranking services, ensuring enduring success in search engine rankings. Our well-experienced SEO Ranking team possesses the expertise necessary to implement impactful SEO strategies tailored to businesses of every scale. We provide regular updates on project advancement, keeping you informed about keyword rankings and involved via email and WhatsApp groups with both our Technical and Coordination Teams, ensuring timely assistance whenever needed.</p>
                                <Link to="/Contact" className="btn-style1 medium"><span>Book A Call</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 bg-img cover-background border-radius-10 wow fadeIn" data-wow-delay="400ms" data-overlay-dark="0" data-background="img/google-seo-services/google-seo-analyst-with-report.webp" style={{backgroundImage:"url("+ceo+")"}}>
                        <span className="offer-shape1"></span>
                        <span className="offer-shape2"></span>
                    </div>
                </div>
            </div>
        </section>


        <section>
            <div className="container">
                <div className="section-title mb-1-9 mb-md-6 text-center wow fadeIn" data-wow-delay="200ms">
                    <span className="sm-title">Work Process</span>
                    <h3 className="mb-0 h3">SEO Service Work Process</h3>
                </div>
                <div className="main-process text-center">
                    <div className="line-shape wow fadeIn" data-wow-delay="400ms">
                        <img src={process} alt="..."/>
                    </div>
                    <div className="row mt-n6">
                        <div className="process-style-01 col-lg-4 col-md-6 mt-6 wow fadeInUp" data-wow-delay="600ms">
                            <div className="item">
                                <div className="thumb">
                                    <img src={process1} alt="..."/>
                                    <span>01</span>
                                </div>
                                <h5>Research and Analysis</h5>
                                <p className="w-lg-80 mx-auto mb-0">Identifying keywords and analyzing competitors to plan the process.</p>
                            </div>
                        </div>

                        <div className="process-style-01 col-lg-4 col-md-6 mt-6 wow fadeInUp" data-wow-delay="800ms">
                            <div className="item">
                                <div className="thumb">
                                    <img src={process2} alt="..."/>
                                    <span>02</span>
                                </div>
                                <h5>Technical Optimization</h5>
                                <p className="w-lg-80 mx-auto mb-0">We improve website with relevant information for better search engine visibility.</p>
                            </div>
                        </div>

                        <div className="process-style-01 col-lg-4 col-md-6 mt-6 wow fadeInUp" data-wow-delay="1000ms">
                            <div className="item">
                                <div className="thumb">
                                    <img src={process3} alt="..."/>
                                    <span>03</span>
                                </div>
                                <h5>Ranking Business</h5>
                                <p className="w-lg-80 mx-auto mb-0">Our team will implement strategies to improve ranking in SERP to increase your sales.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="pt-1-6 pt-md-9">
            <div className="position-relative">
                <div className="background-no-repeat position-absolute h-100 w-100 bg-img d-none d-lg-block wow fadeIn" data-wow-delay="200ms" data-background="img/content/why-choose-01.jpg" style={{backgroundImage:"url("+choose+")"}}>
                </div>
                <div className="row g-0 justify-content-end">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="400ms">
                        <div className="bg-secondary pt-8 pt-lg-14 pt-xxl-18 pb-8 pb-xxl-13 px-2-2 px-xxl-11 position-relative z-index-9 why-chooseus">
                            <div className="me-xxl-15">
                                <div className="section-title left mb-4 white">
                                    <span className="sm-title">We are building a sustainable future</span>
                                    <h2 className="h1 mb-0 text-white">Why Choose Bams?</h2>
                                </div>
                                <p className="text-white mb-2-3 opacity9">We are building a sustainable future through our expertise in Web Designing, SEO Ranking and Lead Generation. Choose us for our dedication to creating impactful solutions that drive growth and success for your business. With our proven track record and client focused approach, we rank your business website and Google Business Profile that ensure long-term sustainability and prosperity.</p>
                                <div className="row position-relative mt-n4 z-index-3">
                                    <div className="col-xl-4 col-6 mt-4">
                                        <div className="why-choose-icon">
                                            <img src={icon} className="mb-3" alt="..."/>
                                            <h5 className="mb-0 display-28 text-white">Web Designing</h5>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-6 mt-4">
                                        <div className="why-choose-icon">
                                            <img src={icon1} className="mb-3" alt="..."/>
                                            <h5 className="mb-0 display-28 text-white">SEO Ranking</h5>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-6 mt-4">
                                        <div className="why-choose-icon">
                                            <img src={icon2} className="mb-3" alt="..."/>
                                            <h5 className="mb-0 display-28 text-white">Lead Generation</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="position-absolute bottom-0 right z-index-1">
                                    <img src={bg} alt="..."/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="pt-0">
            <div className="container position-relative z-index-3">
                <div>
                                <h3 className="mb-1-9 text-center">Meet Our Leaders</h3>
                                <div className="row justify-content-center mt-n1-9">
                                    <div className="col-sm-6 col-lg-4 mt-1-9">
                                        <div className="team-style01">
                                            <div className="image">
                                                <div>
                                                    <img src={suresh} alt="Suresh Reddy"/>
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
                                                <h5 className="h5 mb-0"><a href="#">Suresh Reddy</a></h5>
                                                <p className="mb-0 small">Co-Founder & Director</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4 mt-1-9">
                                        <div className="team-style01">
                                            <div className="image">
                                                <div>
                                                    <img src={zammy} alt="Founder Zammy Zaif"/>
                                                    <ul className="mb-0 social ps-0">
                                                        <li>
                                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="https://www.linkedin.com/in/googlerankingexpert/"><i className="fab fa-linkedin-in"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="pt-3">
                                                <h5 className="h5 mb-0"><a href="#">Zammy Zaif</a></h5>
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
                                    <!--            <h5 className="h5 mb-0"><a href="#">Mustafa Noorani</a></h5>-->
                                    <!--            <p className="mb-0 small">Business Development Manager</p>-->
                                    <!--        </div>-->
                                    <!--    </div>-->
                                    <!--</div>--> */}
                                </div>
                            </div>
            </div>
        </section>
 
        <section className="bg-dark pt-7 pt-lg-10 pb-lg-16">
        <div className="container">
            <div className="row justify-content-center text-center">
                <div className="col-lg-9">
                    <div className="section-title text-center mb-1-9 mb-md-2-3">
                        <span className="sm-title">Testimonials</span>
                        <h3 className="mb-0 h3 text-white">What Our Clients Say</h3>
                    </div>
                    <div className="position-relative">

                    <div className="slider-container slider-fade1"style={{overflow:"hidden"}}>
                    <Slider {...settings1}>
                 
                            <div className="position-relative mt-4">
                                <img src={test2} className="rounded-circle mb-3" alt="GMB #1 Result" style={{marginLeft:"10rem"}} title=""/>
                                <p className="mb-1-9 text-white">Overall, I am very pleased with the GMB services from the Zammy team. They have been very helpful in managing my business listings on the #1 position and keeping my information up to date.</p>
                                <h4 className="h5 mb-0 text-primary">Sindhuram</h4>
                                <p className="mb-0 text-white">Speed Reading Coach in Chennai</p>
                            </div>
                            <div className="position-relative mt-4">
                                <img src={test1} className="rounded-circle mb-3" style={{marginLeft:"10rem"}} alt="SEO Client" title=""/>
                                <p className="mb-1-9 text-white">We sell large format printers, lasers & CNC machines, cutting plotters, Dx5 Eco Solvent ink as well as spare parts. Zammy improved my website to #1 of Google in our country. BAHRAIN</p>
                                <h4 className="h5 mb-0 text-primary">Ahmed</h4>
                                <p className="mb-0 text-white">Nabtaker Sign</p>
                            </div>
                            <div className="position-relative mt-4">
                                <img src={test3} className="rounded-circle mb-3"  style={{marginLeft:"10rem"}}alt="SEO Client" title=""/>
                                <p className="mb-1-9 text-white">I recommend SEO services from Bams Technologies because they are affordable & deliver results. They Expert in Google SEO & they will improve your website so it generates more traffic from Google.</p>
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

    <section>
            <div className="container position-relative z-index-3 text-m-center">
                <div className="row flex-row-reverse align-items-center">
                    <div className="col-lg-6 mb-1-9 mb-lg-0  md-mb-30">
                        <div className="position-relative text-center">
                            <div className="pe-lg-4 pe-xl-5">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="text-center">
                                        <img src={ceo1} alt="Google SEO Report" className="border-radius-10"/>
                                    </div>
                                </div>
                                <div className="col-sm-6 d-none d-sm-block">
                                    <div className="mb-1-9">
                                        <img src={ceo2} alt="Google SEO Service" className="border-radius-10"/>
                                    </div>
                                    <div className="bg-primary p-1-6 border-bottom border-width-3 rounded border-secondary-color">
                                    <img src={ceo3} className="mb-3" alt="Google SEO"/>
                                    <p className="mb-0 text-white">99.9% Customer satisfy based on 750+ reviews.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 text-m-center">
                        <div className="">
                            <div className="section-title">
                                <span className="sm-title">Our Ranking Experts</span>
                            </div>
                            <h2 className="h1 mb-10p">Team of Ranking Experts</h2>
                            <p className="mb-0 text-l-justify">Since 2014, our team has expertly working on expanding the online presence of our clients' businesses on Google. Recognized by Google as ranking experts, we ensure first-rank results on Google SERP. Specializing in SEO services and Google Business Profile optimization, we assist both local and global companies. Together with our highly experienced professionals, including Web Designers, SEO Analysts, SEO Content Writers, SEO Engineers, Graphic Designers, Project Coordinators and Project Managers, we works every day to elevate your business to the top of SERP. With our expertise, we provide long-lasting success through ethical practices. Trust our processes, which support businesses in generating new leads and overcoming complex business profile obstacles to improve business growth.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    </div>



)





}

export default About;