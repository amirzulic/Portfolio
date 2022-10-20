import React, {useState} from "react";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import "../style/project_gallery.css";
import "../style/about_me.css";
import Smoke from "../images/work2.png";
import ReactImage from "../images/react.png";
import NodeImage from "../images/node.png";
import SpringBootImage from "../images/springboot.png";
import DjangoImage from "../images/django.png";
import JavaImage from "../images/java.png";
import TheThree from "../images/htmlcssjs.png";

/*const images = [
    {
        original: 'https://res.cloudinary.com/dw3duxdxo/image/upload/v1665706638/auctionapp1_cojier.png',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://res.cloudinary.com/dw3duxdxo/image/upload/v1665706871/auctionapp2_i6bttm.png',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
        original: 'https://res.cloudinary.com/dw3duxdxo/image/upload/v1665707069/auctionapp3_yxiwtc.png',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];*/

function ProjectGallery() {
    const [view, setView] = useState(1);

    function handleSetView(view) {
        setView(view);
    }

    return(
        <div className="container" id="ProjectGallery">
            <div className="row">
                <br/>
            </div>
            <br/>
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="row">
                        <h1 className="titleGallery">My <b className="text-primary">work</b></h1>
                        <div className="col">
                            <div className="row">
                                <button className={"btn " + (view === 1 ? "viewTabsGrey" : "viewTabs")}
                                        onClick={() => {handleSetView(1)}}>
                                    {view === 1 ? <b className="text-primary">AuctionApp</b> : "AuctionApp" }
                                </button>
                                <button className={"btn " + (view === 2 ? "viewTabsGrey" : "viewTabs")}
                                        onClick={() => {handleSetView(2)}}>
                                    {view === 2 ? <b className="text-primary">Travel</b> : "Travel" }
                                </button>
                                <button className={"btn " + (view === 3 ? "viewTabsGrey" : "viewTabs")}
                                        onClick={() => {handleSetView(3)}}>
                                    {view === 3 ? <b className="text-primary">ChatRoom</b> : "ChatRoom" }
                                </button>
                                <button className={"btn " + (view === 4 ? "viewTabsGrey" : "viewTabs")}
                                        onClick={() => {handleSetView(4)}}>
                                    {view === 4 ? <b className="text-primary">More projects</b> : "More Projects" }
                                </button>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="row">
                                {view === 1 ?
                                    <p className="contentTabs">
                                        <b className="text-primary">{'"AuctionApp" '}</b>
                                        is an e-commerce web application based on biding.
                                        It contains user and product support, a modern design and modern funcionalities.
                                        <br/>
                                        You can check the full project on my github profile:
                                        <br/>
                                        <i className="text-primary">
                                            <a href="https://github.com/amirzulic/AuctionApp"
                                               className="text-decoration-none text-primary"
                                            >AUCTION APP</a>
                                        </i>
                                    </p> : null
                                }
                                {view === 2 ?
                                    <p className="contentTabs">
                                        <b className="text-primary">{'"Travel" '}</b>
                                        is a web application made for travel agencies and those who love to travel.
                                        A system made for more user types with pages needed for their full flow.
                                        <br/>
                                        You can check the full project on my github profile:
                                        <br/>
                                        <i className="text-primary">
                                            <a href="https://github.com/amirzulic/AuctionApp"
                                               className="text-decoration-none text-primary"
                                            >TRAVEL</a>
                                        </i>
                                    </p> : null
                                }
                                {view === 3 ?
                                    <p className="contentTabs">
                                        <b className="text-primary">{'"ChatRoom" '}</b>
                                        is a web application I made for my final faculty project.
                                        It is a chat-based application with full user creation flow with all modern
                                        functionalities.
                                        <br/>
                                        You can check the full project on my github profile:
                                        <br/>
                                        <i className="text-primary">
                                            <a href="https://github.com/amirzulic/AuctionApp"
                                               className="text-decoration-none text-primary"
                                            >CHAT ROOM</a>
                                        </i>
                                    </p> : null
                                }
                                {view === 4 ?
                                    <p className="contentTabs">
                                        These are just some of the things I've done so far in my studies, career and
                                        self-learning.
                                        <br/>
                                        But if this sounds interesting
                                        and you want to know more, feel free to check the
                                        <b className="text-primary">{' full package '}</b>
                                        on my github profile:
                                        <br/>
                                        <br/>
                                        <i className="text-primary">
                                            <a href="https://github.com/amirzulic/AuctionApp"
                                               className="text-decoration-none text-primary"
                                            >GITHUB LINK</a>
                                        </i>
                                    </p> : null
                                }
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="row text-center">
                        <div className="col-4">
                            <img src={ReactImage} height="100px"/>
                        </div>
                        <div className="col-4">
                            <img src={NodeImage} height="100px"/>
                        </div>
                        <div className="col-4">
                            <img src={SpringBootImage} className="rounded-circle" height="100px"/>
                        </div>
                    </div>
                    <br/>
                    <div className="row text-center">
                        <div className="col-4">
                            <img src={DjangoImage} height="100px"/>
                        </div>
                        <div className="col-4">
                            <img src={JavaImage} className="rounded-circle" height="100px"/>
                        </div>
                        <div className="col-4">
                            <img src={TheThree} className="rounded-circle" height="100px"/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 text-lg-end text-center">
                    {/*<ImageGallery items={images}
                                  infinite={true}
                                  showNav={false}
                                  showFullscreenButton={false}
                                  showPlayButton={false}
                                  showBullets={true}
                                  showThumbnails={false}
                                  autoPlay={true}
                    />*/}
                    <img src={Smoke}/>
                </div>
            </div>
        </div>
    );
}

export default ProjectGallery;
