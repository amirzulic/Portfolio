import React, {useState} from "react";
import Avatar from "../images/ja2.png";
import "../style/about_me.css";

function AboutMe() {
    const [view, setView] = useState(1);

    function handleSetView(view) {
        setView(view);
    }

    return(
        <div className="container" id="AboutMe">
            <div className="row">
                <br/>
            </div>
            <hr className="border-primary"/>
            <div className="row">
                <br/>
            </div>
            <div className="row">
                <div className="col-4">
                    <img src={Avatar} className="img-fluid rounded"/>
                </div>
                <div className="col">
                    <div className="row">
                        <h2 className="preTitle">Want to know more</h2>
                        <h1 className="titleAboutMe">About <b className="text-primary">me?</b></h1>
                    </div>
                    <div className="row">
                        <br/>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div className="row">
                                <button className={"btn " + (view === 1 ? "viewTabsGrey" : "viewTabs")}
                                        onClick={() => {handleSetView(1)}}>
                                    {view === 1 ? <b className="text-primary">Who am I?</b> : "Who am I?" }
                                </button>
                            </div>
                            <div className="row">
                                <button className={"btn " + (view === 2 ? "viewTabsGrey" : "viewTabs")}
                                        onClick={() => {handleSetView(2)}}>
                                    {view === 2 ? <b className="text-primary">Education</b> : "Education" }
                                </button>
                            </div>
                            <div className="row">
                                <button className={"btn " + (view === 3 ? "viewTabsGrey" : "viewTabs")}
                                        onClick={() => {handleSetView(3)}}>
                                    {view === 3 ? <b className="text-primary">Experience</b> : "Experience" }
                                </button>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row">
                                {view === 1 ?
                                    <p className="contentTabs">
                                        My name is Amir Zulic. I am 22-year-old student, studying at the Faculty of Science
                                        in the IT field and mainly a web developer trying to perfect it's craft
                                        <b className="text-primary">
                                            {" " + "Sarajevo"}
                                        </b>.
                                        <br/>
                                        I was also born and raised in Sarajevo, living in an outside part called Vogošća.
                                        I have been very acting since a young age falling in love with everything I've taken to do.
                                        <br/>
                                        I loved to play football and basketball and many other sports, music was always
                                        something I loved and I learned to play an instrument and I still love to produce
                                        music.
                                        <br/>
                                        Even though I loved everything I've done,
                                        <b className="text-primary">
                                            {" computers and technology "}
                                        </b>
                                        were
                                        always my favourite thing and It was something I've spent most time doing and
                                        learning. Even though sports were my first love, the first love isn't always
                                        the strongest, which was proven by me choosing a career in the IT industry.
                                        <br/>
                                        You can read more about my education and experience if you are inderested.
                                    </p> : null
                                }
                                {view === 2 ?
                                    <p className="contentTabs">
                                        I finished
                                        <b className="text-primary">
                                            {" " + "Third gymnasium" + " "}
                                        </b>
                                        as my high school and after that I decided to pursue
                                        my IT career in the newly established program on the
                                        <b className="text-primary">
                                            {" " + "University of Sarajevo"}
                                        </b> where I am currently at finishing stages.
                                        That was my more serious encounter with the exciting world of software development,
                                        even though I have been coding from a very young age. Some of the most important courses
                                        I studied were object-oriented programming, web applications, mobile applications.
                                        I used a lot of technologies in these and other courses where I gained a lot of
                                        skill and got some hand-on experience. Technologies I learned:
                                        <ul>
                                            <li>Java</li>
                                            <li>ReactJS</li>
                                            <li>Node.js</li>
                                            <li>Python</li>
                                            <li>Kotlin <b className="text-primary">and many more</b></li>
                                        </ul>
                                    </p> : null
                                }
                                {view === 3 ?
                                    <p className="contentTabs">
                                        Three and a half years of actively learning and studying in the field on Information
                                        Technologies.
                                        <br/>
                                        <hr className="border-primary"/>
                                        <b className="text-primary">Internship:</b>
                                        <br/>
                                        <b className="text-primary">
                                            {"Company: "}
                                        </b>
                                        AtlantBH
                                        <br/>
                                        <b className="text-primary">
                                            {"Position: "}
                                        </b>
                                        Full-stack web developer
                                        <br/>
                                        <b className="text-primary">
                                            {"Time span: "}
                                        </b>
                                        October 2021 - January 2022
                                        <br/>
                                        <b className="text-primary">
                                            {"Project: "}
                                        </b>
                                        AuctionApp
                                        <br/>
                                        <b className="text-primary">
                                            {"About the application: "}
                                        </b>
                                        <br/>
                                        AuctionApp is a modern e-commerce web application.It is based on bidding and product
                                        and user management with a modern design and functionalities.
                                        <br/>
                                        <b className="text-primary">
                                            {"Technologies used: "}
                                        </b>
                                        <ul>
                                            <li>Frontend: <b className="text-primary">ReactJS</b></li>
                                            <li>Backend: <b className="text-primary">Java SpringBoot</b></li>
                                            <li>Database: <b className="text-primary">PostgreSQL</b></li>
                                        </ul>
                                    </p> : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <br/>
            </div>
            <hr className="border-primary"/>
        </div>
    );
}

export default AboutMe;
