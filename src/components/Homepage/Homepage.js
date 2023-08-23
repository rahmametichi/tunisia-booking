import React from 'react'
import './homepage.css'
import { useHistory } from "react-router-dom";





export default function Homepage() {

const history = useHistory();

    const enterSite = e => {
        e.preventDefault()
        history.push("/accueil");
    }

    return (
      <div className="containerMain">
        <div className="header-nav">
          <span className="mytext1"> TUNISIA Booking APP </span>
        </div>

        <div className=""></div>

        <div className="containermain">
          <div className="slogan">
            <h1>
              <span>La Tunisie c'est </span>
              <div className="message">
                <div className="word1">l'art</div>
                <div className="word2">
                  la vie
                </div>
                <div className="word3"> l'histoire</div>
              </div>
            </h1>
          </div>

          <a href="/#" onClick={(e) => enterSite(e)} className="mainBtn">
            <svg width="277" height="62">
              <defs>
                <linearGradient id="grad1">
                  <stop offset="0%" stopColor="#FF8282" />
                  <stop offset="100%" stopColor="#E178ED" />
                </linearGradient>
              </defs>
              <rect
                x="5"
                y="5"
                rx="25"
                fill="none"
                stroke="url(#grad1)"
                width="266"
                height="50"
              ></rect>
            </svg>
            <span>Faire UN Tour!</span>
          </a>
        </div>
       
      
      </div>
    );
}


