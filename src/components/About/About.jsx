import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function About() {
    return (
        <div className="py-16 abbgcolor">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">

                <div className="space-y-6 md:space-y-0 md:flex md:gap-6  lg:gap-12 ">
                    <div className="md:5/12 lg:w-5/12">
                        {/* <img
                            src="https://camo.githubusercontent.com/905b96edece53a982ed9dd6870ce61ad6ee85d6598755f88a859e0322a70842f/68747470733a2f2f6d656469612e74656e6f722e636f6d2f726550446644574f33586f41414141642f6861636b696e672e676966"
                            alt="image"

                            
                        /> */}

                        <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
                            <div class="carousel-inner">
                                <div class="carousel-item active " data-bs-interval="5000">

                                    <a href="https://github.com/Vikramsingh863/spotify">
                                        Spotify Clone
                                        <img src="spotify.png" class="d-block w-100" alt="..." />

                                    </a>
                                </div>

                                <div class="carousel-item" data-bs-interval="5000">
                                    <a href="">
                                        Weather App
                                        <img src="weather.png" class="d-block w-100" alt="..." />
                                    </a>
                                </div>

                                <div class="carousel-item" data-bs-interval="5000">
                                    Zomato Project
                                    <a href="">
                                        <img src="zomato.png" class="d-block w-100" alt="..." />

                                    </a>
                                </div>
                                
                                <div class="carousel-item" data-bs-interval="5000">
                                    <a href="">
                                        Zomato Project 
                                        <img src="zomato (2).png" class="d-block w-100" alt="..." />
                                    </a>
                                </div>
                                
                                <div class="carousel-item" data-bs-interval="5000">
                                Video stream app using Node.js
                                    <a href="">
                                        <img src="videostream.png" class="d-block w-100" alt="..." />
                                    </a>
                                </div>

                                

                                <div class="carousel-item" data-bs-interval="5000">
                                Video stream app using Node.js
                                <a href="">
                                    <img src="videostream2.png" class="d-block w-100" alt="..." />
                                </a>
                            </div>
                            <div class="carousel-item" data-bs-interval="5000">
                                Currency converter
                                <a href="https://github.com/Vikramsingh863/React-project/tree/main/my-project">
                                    <img src="Currency.png" class="d-block w-100" alt="..." />
                                </a>
                            </div>

                            
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>

                            


                        </div>

                    </div>

                    <div className="md:7/12 lg:w-6/12 aboutsec">
                        <div>
                            <h2 className="abouth">
                                About Me
                            </h2>
                            <p className="mt-6 aboutp">
                                "I'm a passionate and dedicated MERN stack web developer with a strong foundation in building robust and scalable web applications. With expertise in MongoDB, Express.js, React.js, and Node.js, I bring creativity and innovation to every project I work on. I am enthusiastic about leveraging cutting-edge technologies to solve complex problems and contribute positively to the ever-evolving field of web development."

                            </p>

                        </div>


                        <div className="tabs ">
                            <div className="tab  ">
                                <input type="radio" className="" id="tab-1" name="tab-group" checked />
                                <label className="check" htmlFor="tab-1">Skills</label>

                                <div className="content">
                                    <div>
                                        - Programming Languages: JavaScript, HTML5, CSS3, C, C++<br />
                                        - Frontend Development: React.js, Redux, HTML, CSS, Bootstrap, Tailwind CSS<br />
                                        - Backend Development: Node.js, Express.js<br />
                                        - Database: MongoDB, Mongoose<br />
                                        - Version Control: Git, GitHub<br />
                                        - RESTful APIs<br />
                                        - Responsive Web Design<br />
                                        - Cross-Browser Compatibility<br />
                                        - Problem-Solving and Troubleshooting<br />
                                        - Communication and Collaboration</div>
                                </div>
                            </div>


                            <div className="tab ms-4">
                                <input type="radio" className="" id="tab-2" name="tab-group" />
                                <label className="check" htmlFor="tab-2">Experience</label>

                                <div className="content">

                                    <div className="exper">Intern, Edureka(Duration: 6 months) <br />

                                        - Developed skills in MERN Stack. <br />
                                        - Academic Projects :- .<br />
                                        <li>Zomato Clone Using MERN Stack Technology </li>
                                        <li> Netlflix Clone Using React</li>
                                        <li>Video Streaming APP using Node.js </li>
                                        <li> API based weater app</li>
                                        - Other Projects :- .<br />
                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Currency converter, Netflix clone, Spotify clone</p>
                                        - Gained valuable experience in HTML, CSS, Javascript, Node.js, React, Bootstrap, Linux




                                    </div>
                                </div>
                            </div>


                            <div className="tab ms-4">
                                <input type="radio" className="" id="tab-3" name="tab-group" checked />
                                <label className="check" htmlFor="tab-3">Education</label>

                                <div className="content">
                                    <p className="eduhead">MCA</p>
                                    <p className="educont">Lovely Professional University || Pursuing </p>

                                    <p className="eduhead">BCA</p>
                                    <p className="educont">Maharshi Dayanand Sarswati || 60%</p>

                                    <p className="eduhead">XII</p>
                                    <p className="educont">RBSE || 65%</p>

                                </div>
                            </div>




                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}