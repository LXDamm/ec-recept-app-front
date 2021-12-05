import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright, faUserCircle } from "@fortawesome/free-regular-svg-icons";
import {Link} from 'react-router-dom';


export const SideBar = () =>{
    return (
        
        <div className="col-lg-2 bg-dark ">

            <div className="d-flex flex-column h-100 flex-shrink-0 p-3 text-white sticky-top">
            <Link to='/' className="my-3 text-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <img src="logo.png" className="text-center w-100" alt=""/>
            </Link>
            
            <div className="my-5">
            <input className="search-input" type="text" placeholder="search" />
            </div>
            <ul className="nav nav-pills flex-column mb-auto text-uppercase">
                <li><Link to='/' className="link-light active"><h5>Home</h5></Link></li>
                <li><Link to='/recept' className="link-light"><h5>Recept</h5></Link></li>
                <li><Link to='/contact' className="link-light"><h5>Contact us</h5></Link></li> 
            </ul>
            <hr />
            <div className="text-center">
                
                <Link to='/Member' className="link-light"><h5 className="text-wrap"><FontAwesomeIcon icon={faUserCircle} className="userIcon" size="lg"/>Login/Register</h5></Link>
                <p className="copyright"><FontAwesomeIcon icon={faCopyright} /> Powered by Group 2</p>
            
            </div>
        </div>
        </div>



    
    );
}