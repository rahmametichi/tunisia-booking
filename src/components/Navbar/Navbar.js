import React, { useEffect } from "react";
import "./Navbar.css";
import { useHistory } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useSelector } from "react-redux";
import logout from "../../assets/logout.png"
import jwt_decode from "jwt-decode";


const Navbar = () => {
  const history = useHistory();
  const cartreducer = useSelector((state) => state.cartReducer);
  const { cartItems } = cartreducer;

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const token = localStorage.getItem("JWT");





  return (
    <header class="site-header site-header__header-one ">
      <nav class="navbar navbar-expand-lg navbar-light header-navigation stricky">
        <div class="container clearfix" style={{ height: "0px"  }}>
          <div class="logo-box">
            <a class="navbar-brand" href="/accueil">
              <img
                src={logo}
                style={{ color: "white", height: "30px", width: "40px" }}
                alt="Awesome Image"
              />
            </a>
            
          </div>
          <div class="main-navigation">
            <ul class=" navigation-box @@extra_class" >
              <li>
                <a href="/accueil">Accueil</a>
              </li>

              <li>
                <a href="/museespage">Musées</a>
              </li>

              <li>
                <a href="/hotelspage">Hotels</a>
              </li>
             
              <li>
                <a href="/cafepage">Café | Restaurant</a>
              </li>
              
              <li>
               {token ?(<a href="/ticket">Ticket</a> ) : <a href="/ticket" style={{display:"none"}}></a>} 
              </li>
              {!token ? (
                <li>
                  <a
                    href="/login"
                    onClick={() => {
                      history.push("/login");
                    }}
                  >
                    Se Connecter
                  </a>
                </li>
              ) : (
                <li>
                  <a>
                    Connecté par : {jwt_decode(token) .nom.toUpperCase()}
                  </a>
                </li>
              )}

              <li>
                <a href="/cart">
                  <i class="fas fa-shopping-cart"></i>
                  {cartItems.length}
                </a>
              </li>
              <li>
                <a 
                  href="/accueil"
                  onClick={() => {
                    localStorage.removeItem("cartItems");
                    localStorage.removeItem("JWT");
                    history.push("/accueil");
                  }}
                >
                  <div style={{marginTop:"-10px"}}>
                <img
                src={logout}
                style={{ color: "white", height: "25px", width: "30px",marginBottom: "-14px"}}
                alt="Logout Image"
              /></div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
