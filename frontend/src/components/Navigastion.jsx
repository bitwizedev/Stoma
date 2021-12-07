import React from "react";
import {Link, withRouter} from "react-router-dom";
const styleNav = {
  background: '#55A1C9'
}

const buttonsStyle = {
  color: 'black'
}


function Navigation(props){
    return (
        <div className="navigation">
          <nav class="navbar navbar-expand navbar-dark" style={styleNav}>
            <div class="container">
              <Link style={buttonsStyle} class="navbar-brand" to="/">
                Stoma Life 
              </Link>
    
              <div>
                <ul class="navbar-nav ml-auto">
                
                    <Link style={buttonsStyle} class="nav-link" to="/">
                      Home
                      <span class="sr-only">(current)</span>
                    </Link>
                  
                    <Link style={buttonsStyle} class="nav-link" to="/Login">
                      Login
                    </Link>
                
                    <Link style={buttonsStyle} class="nav-link" to="/Register">
                      Register
                    </Link>
                    <Link style={buttonsStyle} class="nav-link" to="/Dashboard">
                      Dashboard
                    </Link>
                   
                  
                </ul>
              </div>
            </div>
          </nav>
        </div>
      );
}


export default Navigation;