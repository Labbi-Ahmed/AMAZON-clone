import React from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../../firebase";
import { textAlign } from "@mui/system";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    // some fancy firebase login shiiiiiiiiit
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        setEmail("");
        setPassword("");
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    // some fancy firebase register shiiiiiit......
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          setEmail("");
          setPassword("");
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src="Images/amazon_logo.svg" />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
        <a
          href="#"
          style={{
            textDecoration: "",
            textAlign: "right",
            marginTop: "5px",
            fontSize: "12px",
          }}
        >
          forgot password?
        </a>
        <p>
          By signing-in you agree to Amazon's Conditions of use & Sale. Please
          see our privacy Notice, our Cookies Notice and out Interest-Based Ads
          Notice
        </p>

        <button className="login__registerButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
