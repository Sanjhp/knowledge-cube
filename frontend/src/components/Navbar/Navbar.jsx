import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/navbar-logo.png";
import Cookies from "js-cookie";
import LearnerNavbar from "./LearnerNavbar";
import CreatorNavbar from "./CreatorNavbar";

function Navbar() {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState("");
  const [id, setId] = useState("");
  // const [roleName, setRoleName]=useState("")
  console.log("Id", id);
  const token = Cookies.get("token");
  const roleName = Cookies.get("roleName");
  useEffect(() => {
    if (accessToken) {
      const parts = accessToken.split(".");
      const payload = JSON.parse(atob(parts[1]));
      const userId = payload._id;
      console.log("userId", userId);
      setId(userId);
      setAccessToken(accessToken);
      console.log("User ID:", userId);
    } else {
      console.log("Token not found");
    }
  }, []);

  useEffect(() => {
    if (token) {
      setAccessToken(token);
    } else {
      navigate("/login");
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("roleId")
    Cookies.remove("roleName")
    setAccessToken("");
    navigate("/login");
  };
  if (!accessToken) {
    return (
      <>
        <div>
          <navbar className={styles.navbar}>
            <div className={styles.logo}>
              <img src={logo} alt="Logo" />
              <span>Knowledge Hub</span>
            </div>
            <nav className={styles.navigation}>
              <Link to="/login" className={styles.button}>
                Login
              </Link>
              <Link to="/register" className={styles.button}>
                Register
              </Link>
            </nav>
          </navbar>
        </div>
      </>
    );
  }

  return (
    <div>
      {roleName === "Learner" ? (
        <LearnerNavbar handleLogout={handleLogout} />
      ) : (
        <CreatorNavbar handleLogout={handleLogout} />
      )}
    </div>
  );
}

export default Navbar;
