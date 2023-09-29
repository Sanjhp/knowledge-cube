import React from 'react'
import styles from './Navbar.module.css';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from '../../assets/navbar-logo.png'
function Navbar() {
  return (
    <>
      <navbar className={styles.navbar}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" /><span>Knowledge Hub</span></div>
        <nav className={styles.navigation}>

          <Link to="/login" className={styles.button}>Login</Link>
          <Link to="/register" className={styles.button}>Register</Link>
        </nav>
      </navbar>
    </>
  )
}

export default Navbar;
