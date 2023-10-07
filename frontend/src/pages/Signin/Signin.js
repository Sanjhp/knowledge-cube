/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import styles from "./Signin.module.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginPage() {
  const navigate = useNavigate();

  const {
    loginContainer,
    leftContainer,
    leftContainerImg,
    leftContainerContent,
    rightContainer,
    rightContainerContent,
    loginCard,
    errorMessage,
    signupLink,
    forgotPasswordLink,
    button,
    inputContainer,
    label,
    input,
    rememberMe,
    rememberMeLabel,
    rememberMeCheckbox,
    loginOptions,
  } = styles;

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [forgotPasswordMode, setForgotPasswordMode] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    navigate("/");
  };

  const handleBackToLogin = () => {
    setForgotPasswordMode(false);
    setError("");
  };

  return (
    <div>
      <div className={loginContainer}>
        <div className={leftContainer}>
          <div className={leftContainerImg}>
            <img
              src="https://img.freepik.com/premium-vector/student-character-together-obtain-online-knowledge-people-tiny-classmate-work-with-laptop-flat-vecto_109722-3416.jpg?w=996"
              width="600"
            />
          </div>
          <div className={leftContainerContent}>
            <h2>
              Unlocking Knowledge, Empowering Minds: Your Path to Success Starts
              Here!
            </h2>
          </div>
        </div>
        <div className={rightContainer}>
          <div className={rightContainerContent}>
            <h2>Hello ! Welcome back.</h2>
            <p>
              Log in with your data that you entered during Your registration.
            </p>
          </div>
          <div className={loginCard}>
            {error && <p className={errorMessage}>{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className={inputContainer}>
                <label className={label} htmlFor="email">
                  E-mail
                </label>
                <input
                  className={input}
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={inputContainer}>
                <label className={label} htmlFor="password">
                  Password
                </label>
                <input
                  className={input}
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              {!forgotPasswordMode && (
                <div className={rememberMe}>
                  <label className={rememberMeLabel}>
                    <input
                      className={rememberMeCheckbox}
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                    />
                    Remember me
                  </label>
                </div>
              )}
              <button
                className={button}
                type="submit"
                style={{ backgroundColor: "#3484B4" }}
              >
                Login
                {loading && <div className="loader"></div>}
              </button>
            </form>
            <div className={loginOptions} style={{ color: "#000000" }}>
              <p>
                {!forgotPasswordMode ? (
                  "Don't have an account? "
                ) : (
                  <span>
                    <Link className={signupLink} onClick={handleBackToLogin}>
                      Back to Login
                    </Link>
                    <br />
                    <br />
                  </span>
                )}
                <Link to="/signup" className={signupLink}>
                  Sign up
                </Link>
              </p>
              <p>
                <span
                  className={forgotPasswordLink}
                  onClick={() => navigate("/forget-password")}
                >
                  Forgot Password
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default LoginPage;
