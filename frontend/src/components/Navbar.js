import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import {Link} from "react-scroll";

function Navbar() {
    return(
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top container bg-transparent">
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968654.png"
                     width="30" height="30" alt=""/>
                {/*<button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>*/}
                <div className="collapse navbar-collapse justify-content-end">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="LandingPage" spy={true} smooth={true} offset={0} duration={300}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="AboutMe" spy={true} smooth={true} offset={0} duration={300}>About me</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="ProjectGallery" spy={true} smooth={true} offset={-10} duration={300}>My work</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="ContactMe" spy={true} smooth={true} offset={-10} duration={300}>Contact me</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
