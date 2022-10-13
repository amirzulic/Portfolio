import React from "react";
import "../style/landing_page.css";
import Slika from "../images/work.png";
import {Link} from "react-scroll";

function LandingPage() {
    return(
        <div className="container LandingPage" id="LandingPage">
            <div className="row">
                <br/>
            </div>
            <br/>
            <div className="row align-items-center justify-content-center">
                <div className="col text-light">
                    <h3>I am a <b className="text-primary">web developer</b></h3>
                    <br/>
                    <h1 className="bigText"><b>Work is better shown than told about</b></h1>
                    <h3>So here is my work</h3>
                    <br/>
                    <button className="btn btn-lg btn-outline-primary">
                        <Link className="nav-link" to="ContactMe" spy={true} smooth={true} offset={-50} duration={300}>CONTACT ME -> </Link>
                    </button>
                </div>
                <div className="col text-end">
                    <img src={Slika} alt="zula" className="rounded shadow"/>
                </div>
            </div>
            <div className="row">
                <br/>
            </div>
        </div>
    );
}

export default LandingPage;
