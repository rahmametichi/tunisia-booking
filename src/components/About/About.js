import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./About.css";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="sec1" style={{ marginTop: "5%" }}>
        <div className="sec3">
          <h3>À propos </h3>
          <p>
            Tunisia booking app est une plateforme en ligne pour le guide
            touristique à la Tunisie qui permet la facilité de l'inscription ,
            l'authentification et la consultation les hotels et les cafés/resto ainsi
            que la réservation des tickets d'accès au musée.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
