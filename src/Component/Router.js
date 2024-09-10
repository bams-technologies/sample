import { BrowserRouter ,HashRouter, Routes,Route,Link,NavLink} from "react-router-dom"

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Career from "./Career";
import Blogs from "./Blogs";






let Router=()=>{



const top=()=>{
    window.scrollTo(0,0);
}

return(

    <div>
<HashRouter>
{/* <!-- PAGE LOADING
    ================================================== --> */}
    {/* <div id="preloader"></div> */}
    {/* <!-- MAIN WRAPPER
    ================================================== --> */}
    <div className="main-wrapper">

<Header/>
<Routes>

 <Route path="/"  element={<Home/>}></Route>   
 <Route path="/About"  element={<About/>}></Route> 
 <Route path="/Career"  element={<Career/>}></Route> 
 <Route path="/Blogs"  element={<Blogs/>}></Route>
 <Route path="/Contact"  element={<Contact/>}></Route>  
</Routes>

<Footer/>
</div>
{/* <!-- SCROLL TO TOP
    ================================================== --> */}
    <Link  className="scroll-to-top" style={{display:"inline"}} onClick={top}><i className="fa-solid fa-angle-up" aria-hidden="false"></i></Link>

</HashRouter>

    </div>
)










}

export  default Router;