import React, { useState } from "react";
import "./Contact.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();

    if (message.trim().length !== 0) {
      console.log("input value is NOT empty");
    } else {
      alert('Veuillez remplir tous les champs')
    }
  };
  return (
    <div className="contwal">
      <Navbar />
      <div className="contact">
        <div className="aps">
          <div style={{ paddingTop: "30px" }}>
            <label className="contactla">Prénom</label>
            <input
              name="firstName"
              className="contactput"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="contactla">Nom</label>
            <input
              className="contactput"
              id="lastName"
              name="lastName"
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="email" className="contactla">
              Email
            </label>
            <input
              className="contactput"
              name="email"
              id="lastName"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="contactla">Message</label>
            <textarea name="message" id="message" onChange={handleChange} />
          </div>

          <button className="contactbut" onClick={handleClick}>
            Envoyer
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
