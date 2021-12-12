import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { faHome, faScroll, faPhoneSquareAlt, faCopyright, faUserCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import account from "../services/accountService";

export const MobileSideBar = () => {
    const [showSearchBox, setShowSearchBox] = useState(false);
    const handleSearch = () => {
        setShowSearchBox(!showSearchBox);

    }

    return (
        <>
            <div className={"search-box-container align-items-center" + (showSearchBox ? " d-flex" : " d-none")}>
                <div className="search-box shadow-1">
                    <button className="hidebg-btn" onClick={handleSearch}><FontAwesomeIcon icon={faTimesCircle} className="close-icon" /></button>
                    <input className="search-input-popup" type="text" placeholder="search" />
                </div>
            </div>
            <div className="col-1 bg-dark menu-expand ">
                <div className="d-flex flex-column flex-shrink-0 bg-dark sticky-top" >

                    <Link to='/' className=" align-items-center mb-3 mt-3 mb-md-4 me-md-auto text-white text-decoration-none">
                        <img src="logo.png" className="w-100" alt="" />
                    </Link>


                    <div className="text-center link-light d-flex flex-column">
                        <button className="hidebg-btn" onClick={handleSearch}>
                            <FontAwesomeIcon icon={faSearch} className="userIcon" size="lg" />
                        </button>
                        <br />
                        <Link to='/' className="link-light py-2">
                            <FontAwesomeIcon icon={faHome} className="userIcon" size="lg" />
                        </Link>
                        <Link to='/recipe/post' className="link-light py-2">
                            <FontAwesomeIcon icon={faScroll} className="userIcon" size="lg" />
                        </Link>
                        <Link to='/' className="link-light py-2 ">
                            <FontAwesomeIcon icon={faPhoneSquareAlt} className="userIcon" size="lg" />
                        </Link>
                    </div>
                    {/* <ul className="nav nav-pills nav-flush flex-column mb-auto text-center text-white">
                    <li className="nav-item">
                        <Link to='/' className="nav-link py-3">
                        <FontAwesomeIcon icon={faHome} className="userIcon" size="lg"/>
                        </Link>
                    </li>
                    <li>
                        <a href="{#}" className="nav-link py-3" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
                        <FontAwesomeIcon icon={faScroll} className="userIcon" size="lg"/>

                        </a>
                    </li>
                    <li>
                        <a href="{#}" className="nav-link py-3 " title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Orders">
                        <FontAwesomeIcon icon={faPhoneSquareAlt} className="userIcon" size="lg"/>

                        </a>
                    </li>
                    
                    </ul> */}
                    <div className="py-3 mt-4 text-white text-center">
                        {account.loggedIn ?
                            <Link to='/profile'><h5 className="text-wrap link-light"><FontAwesomeIcon icon={faUserCircle} className="userIcon" size="lg" /></h5></Link>
                            :
                            <Link to='/login'><h5 className="text-wrap link-light"><FontAwesomeIcon icon={faUserCircle} className="userIcon" size="lg" /></h5></Link>
                        }
                        <p className="copyright"><FontAwesomeIcon icon={faCopyright} /> G2</p>


                    </div>
                </div>
            </div>
        </>
    );
}