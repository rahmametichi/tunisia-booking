import React, { useState } from "react";
import { FaFacebookF, FaTwitterSquare } from "react-icons/fa";
import axios from "axios";
import {Link} from "react-router-dom"
import "./signup.css";
import { useHistory } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function Signup() {
  const [newUser, setNewUser] = useState({});

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
    console.log(newUser);
  };

  let history = useHistory();
  // sign in
//   let tolog = (e) => {
// <Link to="/login"></Link>;
//   };

  // submiting data to backend
  const handleSubmit = () => {
    axios
      .post(
        "http://localhost:5000/api/users/register",

        newUser
      )
      .then(() => alert("Enregistré avec succès"))
      .then(() => history.push("/login"))
      .catch((err) =>
        console.log(err.response.data.msg, "ba3beeeeeeeeeeeeee3i")
      );
  };

  return (
    <div className="container">
      <div className="flex-container">
        <div className="row full">
          <div className="col-md-12">
            <div className="form-container">
              <div className="form-container-in"> </div>{" "}
              <div className="row sgnUp ">
                <div className="col-md-12 right-divider pdding">
                  <h3 className="lead-text mn-txt">
                    REJOIGNEZ-
                    <br /> <br /> <br /> NOUS
                    
                  </h3>
                  </div>{" "}
                <div className="left-divider">
                  <div className="col-md-6">
                    <form style={{ width: "200px", height: "500px",marginLeft: "0px" }}>
                      <div >
                        <div className="form-group2">
                          <label htmlFor="name"> Nom: </label>{" "}
                          <input
                            id="nom"
                            name="nom"
                            type="nom"
                            className="form-controlsgnUp"
                            onChange={handleChange}
                          />{" "}
                        </div>{" "}
                        <div class="form-group2">
                          <label htmlFor="mob-number"> Prénom.: </label>{" "}
                          <input
                            required
                            id="prenom"
                            name="prenom"
                            type="prenom"
                            className="form-controlsgnUp"
                            onChange={handleChange}
                          />{" "}
                        </div>{" "}
                        <div class="form-group2">
                          <label htmlFor="email"> Email: </label>{" "}
                          <input
                            required
                            id="email"
                            name="email"
                            type="email"
                            className="form-controlsgnUp"
                            onChange={handleChange}
                          />{" "}
                        </div>{" "}
                        <div class="form-group22">
                          <label htmlFor="password">
                            {" "}
                            Créer un mot de passe:{" "}
                          </label>{" "}
                          <input
                            required
                            id="password"
                            defaultValue=""
                            name="motdepasse"
                            autocomplete="off"
                            type="password"
                            className="form-controlsgnUp"
                            onChange={handleChange}
                          />{" "}
                        </div>{" "}
                      </div>
                     
                      <div class="form-group21">
                        <input
                          required
                          type="button"
                          value="Confirmer"
                          onClick={handleSubmit}
                          className="myform-btn-signup"
                        />
                      </div>{" "}
                      <div className="mlewi1">
                        <div
                          style={{
                            width: "230px",
                            // paddingTop: "25px",
                            // paddingLeft: "60px",
                          }}
                        >
                          <small className="form-text text-muted link-text">
                            Déja inscrit ?
                          </small>{" "}
                        </div>
                        <span className="signuptext">
                          <Link to="/login">Se connecter</Link>
                        </span>{" "}
                      </div>{" "}
                    </form>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
