import React from "react";
import "./index.css";

function NavBar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
            <img
              src="./img/icon.png"
              alt="icon"
              style={{minHeight: "4rem", width: "8rem"}}
            />
        </div>
        <div
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </div>
      </div>
      <div style={{ width: "40px" }}> </div>
      <button
        className="button is-link"
        style={{
          position: "absolute",
          left: "1200px",
          top: "15px",
          height: "43px",
        }}
      >
        Contact Me
      </button>
      <a href="https://accounts.google.com/b/0/AddMailService" target="_blank" rel="noreferrer">
        <div
          className="rect11"
          style={{ position: "absolute", top: "15px", left: "1350px" }}
        >
          <p
            className="buttontext"
            style={{ position: "absolute", top: "10px", right: "20px" }}
          >
            Let's Get Started
          </p>
        </div>
      </a>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="index.html" target="_blank">
            <div style={{ width: "40px" }}> </div>
            Home
          </a>
          <div style={{ width: "50px" }}> </div>
          <div className="navbar-item">
            Case Studies
            <div style={{ width: "50px" }}> </div>
          </div>
          <div className="navbar-item">Testimonials </div>
          <div style={{ width: "50px" }}> </div>
          <div className="navbar-item">Recent work </div>
          <div style={{ width: "50px" }}> </div>
          <div className="navbar-item">Get In Touch </div>
        </div>
      </div>
    </nav>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });
});

export default NavBar;