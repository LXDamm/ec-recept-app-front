import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright, faUserCircle } from "@fortawesome/free-regular-svg-icons";
import {Link} from 'react-router-dom';

export const SideBar = () =>{
    return (
    <div className="sideBarContainer">
        <div className="image">
            
        </div>
        <div className="middleSidebar">
            <input type="text" placeholder="search" />
            <div>
                <Link to='/'><h3>Home</h3></Link>
                <h3>Recept</h3>
                <h3>Contact Us</h3>
            </div>
        </div>
        
        <div className="lowerSidebar">
            <Link to='/Member'><h3><FontAwesomeIcon icon={faUserCircle} className="userIcon" size="lg"/>Login/Register</h3></Link>
            <p><FontAwesomeIcon icon={faCopyright} /> Powered by Group 2</p>
        </div>
        

    </div>)
}