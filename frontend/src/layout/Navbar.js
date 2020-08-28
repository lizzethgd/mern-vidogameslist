import React from 'react'
import { Link} from 'react-router-dom';
import {NavItem} from 'reactstrap'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            Videogames
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <NavItem className="nav-link">
                <Link className="nav-link" to="/">
                  Inicio
                </Link>
              </NavItem>
            </ul>
            <ul className="navbar-nav">
        
                  <NavItem className="nav-link">
                    <Link className="nav-link" to="/signup">
                      SingUp
                    </Link>
                  </NavItem>
                  <NavItem className="nav-link">
                    <Link className="nav-link" to="/signin">
                      Login
                    </Link>
                  </NavItem>
            
        
            </ul>
          </div>
        </div>
      </nav>
        </div>
    )
}

export default Navbar


