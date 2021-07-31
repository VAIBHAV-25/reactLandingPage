import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import { NavLink } from 'react-router-dom';
import web from "../src/images/img2.jpg";
import web2 from "../src/images/logo.png";
import web3 from "../src/images/vid.png";

const Home = () => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1>Don't worry.<br/>We are here for <br/><strong className="brand-name">every solution.</strong></h1>
                                <h2 className="my-3">Bushwick meh Blue Bottle pork belly mustache skateboard 3 wolf moon. Actually beard single-origin coffee, twee 90's PBR Echo Park.</h2>
                                <div className="mt-3">
                                <button className="btn btn-outline-success but1" type="submit">Get early access</button>
                                <button className="btn btn-outline-success but2" type="submit"><img src={web3} className="img-fluid animate" alt="home img" height="35px" width="25px"/>    Watch video</button>
                                </div>
                                <br />
                                <div className="logo">
                                <img src={web2} className="img-fluid image" alt="home img"  width="500" height="200"/>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={web} className="img-fluid animated" alt="home img" />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Home;