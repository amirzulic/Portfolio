import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/contact_me.css";

function ContactMe() {
    return(
        <div className="container" id="ContactMe">
            <div className="row">
                <br/>
            </div>
            <hr className="border-primary"/>
            <div className="row">
                <br/>
            </div>
            <div className="row">
                <h1 className="ContactTitle">Contact me</h1>
                <h5>Got a <b className="text-primary">question</b> or an <b className="text-primary">offer</b>?</h5>
            </div>
            <div className="row">
                <br/>
            </div>
            <div className="row">
                <br/>
                <h2>You can reach out to me down below!</h2>
            </div>
            <br/>
            <div className="row justify-content-center align-items-center">
                <div className="col">
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg FormInput" id="name"
                                   placeholder="What is your name?"/>
                        </div>
                        <br/>
                        <div className="form-group">
                            <input type="email" className="form-control form-control-lg FormInput" id="email"
                                   placeholder="Enter your email"/>
                        </div>
                        <br/>
                        <div className="form-group">
                            <textarea className="form-control form-control-lg FormInput" id="message" rows="6"
                            placeholder="Your message"/>
                        </div>
                        <br/>
                        <button type="submit" className="btn btn-outline-primary sendButton">SEND</button>
                    </form>
                </div>
            </div>
            <div className="row">
                <br/>
            </div>
        </div>
    );
}

export default ContactMe;
