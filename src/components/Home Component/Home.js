import React from "react";
import './home.css'


const Home = () => {
  return (
    <div class="home-wrapper flex-center-column">
      <div class="content-wrapper flex-center-column">
        <h1 >Teknolojik Yemekler</h1>
        <div class="text-button-wrapper flex-center-column">
          <p class="title">KOD ACIKTIRIR <br/> Pizza, DOYURUR</p>
          <button class="button">ACIKTIM</button>
        </div>
      </div>
      <img class="background-image" src={require("../../Assets/mvp-banner.png")} />
    </div>
  );
};

export default Home;
