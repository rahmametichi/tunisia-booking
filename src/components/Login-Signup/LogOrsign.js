import React, { useState } from "react";
import "./logOrsign.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../../utlis/index";

export default function LogOrsign({ history }) {
  const [loginData, setLoginData] = useState({});

  history = useHistory();
  const getToSignUp = (e) => {
    e.preventDefault();
    history.push("/register");
  };

  const handleChange = (e) => {
    console.log([e.target.name], ":", e.target.value);
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    axios
      .post("http://localhost:5000/api/users/login", loginData)
      .then((response) => {
        login(response.data.token);
        alert("CONNECTÉ AVEC SUCCÈS  ");
        history.push("/accueil");
      })
      .catch((err) => alert(err.response.data.msg));
  };
  return (
    <div>
      <div className="container1">
        <section className="myform-area">
          <div className="container1">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="form-area login-form">
                  <div className="form-content">
                    <h2>BIENVENUE</h2>
                    <p></p>
                  </div>
                  <div className="form-input">
                    <h2 style={{ color: "#302e2f" }}>S'IDENTIFIER</h2>
                    <form>
                      <div className="form-group">
                        <input
                          className="loginInfo"
                          type="email"
                          name="email"
                          required
                          style={{ marginBottom: "15px" }}
                          onChange={handleChange}
                        />
                        <label>Email</label>
                      </div>
                      <div className="form-group">
                        <input
                          className="loginInfo"
                          type="password"
                          name="motdepasse"
                          required
                          onChange={handleChange}
                        />
                        <label>Mot de passe</label>
                      </div>
                      <div className="myform-button">
                        <button
                          type="button"
                          className="myform-btn"
                          onClick={() => handleSubmit()}
                        >
                          Continuer
                        </button>
                      </div>
                      <div className="myform-button">
                        <button
                          type="button"
                          className="myform-inscrire"
                          style={{ backgroundColor: "#302e2f" }}
                          onClick={(e) => getToSignUp(e)}
                        >
                          S'inscrire
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
