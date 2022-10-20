import React from "react";
import Instagram from "../images/instagram.png";
import LinkedIn from "../images/linkedin.png";
import Facebook from "../images/facebook.png";
import Copyright from "../images/copyright.png";
import "../style/footer.css";

function Footer() {
    return(
        <div className="container">
            <div className="row">
                <br/>
            </div>
            <div className="row">
                <hr className="border-primary"/>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 text-lg-start text-center">
                    <div className="row">
                        <h1 className="titleFooter">Need my social media?</h1>
                    </div>
                    <div className="row">
                        <h2>
                            <b className="text-primary email">
                                zulicic0@gmail.com
                            </b>
                        </h2>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-lg-end justify-content-center">
                    <img src={Instagram} height="20px"/>
                    <h3 className="socialMedia px-2">
                        <a href="https://www.instagram.com/zulagaba" className="text-decoration-none" target="_blank">
                            Instagram
                        </a>
                    </h3>
                    <img src={LinkedIn} height="20px"/>
                    <h3 className="socialMedia px-2">
                        <a href="https://www.linkedin.com/in/amir-zulic-80b70b199/" className="text-decoration-none" target="_blank">
                            LinkedIn
                        </a>
                    </h3>
                    <img src={Facebook} height="20px"/>
                    <h3 className="socialMedia px-2">
                        <a href="https://www.facebook.com/amir.zulic9" className="text-decoration-none" target="_blank">
                            Facebook
                        </a>
                    </h3>
                </div>
            </div>
            <div className="row">
                <br/>
            </div>
            <div className="row text-lg-start text-center">
                <p className="copyright">
                    <img src={Copyright} height="8px"/>
                    {" Copyright 2022 - Zulic Amir"}
                </p>
            </div>
        </div>
    );
}

export default Footer;
