import "../styles/Login.css";
import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";


function Login() {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      navigate("/upload");
    });
  };
  return(
    <div className="login">
      <h1>Log In</h1>
    <form>
      <label>
        <p>Username:</p>
        <input type="text" />
      </label>
      <label>
        <p>Password:</p>
        <input type="password" />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    <p>Sign In With Google to Continue</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
    
   
  );
}
export default Login;
