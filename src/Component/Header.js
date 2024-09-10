import React from "react";
import  Logo from "./images/logo/logo.png"
import {Link,NavLink} from "react-router-dom"
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

let Header=()=>{



    let button=()=>{

    

        document.getElementById('burger').classList.toggle('menu-opened');
        document.getElementById('nav').classList.toggle('open');


}


    let button1=()=>{
        document.getElementById('top').classList.toggle('open');
    }

    




return(


    <div>

{/* <!-- HEADER ================================================== --> */}

<header className="header-style2">

            <div className="navbar-default border-bottom border-color-light-white">

                {/* <!-- start top search --> */}
                <div className="top-search bg-primary" id="top">
                    <div className="container-fluid px-lg-1-6 px-xl-2-5 px-xxl-2-9">
                        <form className="search-form"  method="GET" acceptCharset="utf-8">
                            <div className="input-group">
                                <span className="input-group-addon cursor-pointer">
                                    <button className="search-form_submit fas fa-search text-white"></button>
                                </span>
                                <input type="text" className="search-form_input form-control" name="s" autoComplete="off" placeholder="Type & hit enter..."/>
                                <span className="input-group-addon close-search mt-1"onClick={button1}><i className="fas fa-times"></i></span>
                            </div>
                        </form>
                    </div>
                </div>
                {/* <!-- end top search --> */}

                <div className="container-fluid px-lg-1-6 px-xl-2-5 px-xxl-2-9">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-12">
                            <div className="menu_area alt-font">
                                <nav className="navbar navbar-expand-lg navbar-light p-0">
                                    <div className="navbar-header navbar-header-custom">
                                        {/* <!-- start logo --> */}
                                        <Link to="/" className="navbar-brand logodefault"><img id="google seo companty" src={Logo} alt="google seo agency" /></Link>
                                        {/* <!-- end logo --> */}
                                    </div>

                                    <div className="navbar-toggler bg-primary" id="burger" onClick={button}></div>

                                    {/* <!-- start menu area --> */}
                                    <ul className="navbar-nav ms-auto" id="nav" >
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/About">About Us</Link></li>
                                        <li>
                                            <Link href="#" style={{pointerEvents: "none"}}>SEO Services</Link>
                                            <ul>
                                                <li><Link to="">Google SEO Services</Link></li>
                                                <li><Link to="">GMB SEO Services</Link></li>
                                            </ul>
                                        </li>
                                        
                                        <li><Link to="/Career">Career</Link></li>
                                        
                                        <li><Link to="/Blogs" >Blogs</Link></li>
                                        
                                        <li><Link to="/Contact">Contact Us</Link></li>
                                    </ul>
                                    {/* <!-- end menu area --> */}

                                    {/* <!-- start attribute navigation --> */}
                                    <div className="attr-nav align-items-xl-center ms-xl-auto main-font">
                                        <ul>
                                            <li className="search"><Link to="#" onClick={button1}><i className="fas fa-search"></i></Link></li>
                                            <li className="d-none d-xl-inline-block"><Link to="/Contact" className="btn-style1 medium"><span>Free Quote</span></Link></li>
                                        </ul>
                                    </div>
                                    {/* <!-- end attribute navigation --> */}
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>


    </div>
)
}

export default Header;