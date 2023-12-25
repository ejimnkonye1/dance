import React from "react";
import '../css/head.css'
import Lander from "./video";
import Classdance from "./class";
import Testimonial from "./test";
import Tic from "./tic";
const Header = () => {
    return (
        <>
      <nav class="navbar navbar-expand-lg ">
  <div class="container">
    <a class="navbar-brand" href="#">                Dancers4LifeClub
                </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">About</a>
        <a class="nav-link" href="#">Contact</a>
        <a class="nav-link " href="./login" aria-disabled="">Login</a>
      </div>
    </div>
  </div>
</nav>

        </>
    )
}
export default Header;