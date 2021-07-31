import React from 'react';
import { NavLink } from 'react-router-dom';
import web4 from "../src/images/drive.png";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/"><img src={web4} className="img-fluid animated" alt="home img" /></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink activeClassName='menu_active' className="nav-link active" aria-current="page" to="#">Integration</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="#">Pricing</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="#">Blog</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="#">About us</NavLink>
                    </li>
                  </ul>
                  {/* <ul className="navbar-nav nav-right ml-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                      <NavLink className="nav-link" to="#">Get early access</NavLink>
                    </li>
                  </ul> */}
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                      <button className="btn btn-outline-success" type="submit">Get early access</button>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;