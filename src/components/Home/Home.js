import { Title } from "@mui/icons-material";
import React from "react";
import Product from "../Product/Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        {/* <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" /> */}
        <img
          className="home__image"
          src="Images/amazon.home.jpg"
          alt="amazon home"
        />

        <div className="home__row">
          {/* product */}

          <Product
            id="1"
            title="The lean startup"
            price={29.99}
            rating={5}
            image="Images/lean_startup.jpg"
          />
          <Product
            id="2"
            title="The Road to React: Your journey to master plain yet pragmatic React.js"
            price={29.99}
            rating={5}
            image="Images/product2.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Java: Learn Java in One Day and Learn It Well. Java for Beginners with Hands-on Project. (Learn Coding Fast with Hands-On Project)"
            price={11.67}
            rating={5}
            image="Images/product3.jpg"
          />
          <Product
            id="4"
            title="SAMSUNG Galaxy Watch 5 Pro Guide: 45mm Bluetooth Smartwatch w/Body, Health, Fitness and Sleep Tracker,
             Improved Battery, Sapphire Crystal Glass, Enhanced GPS Tracking, US Version, Black"
            price={250.0}
            rating={4}
            image="Images/product4.jpg"
          />
          <Product
            id="5"
            title="NakedShield Samsung Galaxy S5 S 5 (Hunter
                 Camouflage) Total Hard Armor LifeStyle Phone Case"
            price={42.29}
            rating={4}
            image="Images/product5.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="2326"
            title="Echo Dot (3rd Gen) Charcoal with Echo Auto"
            price={54.99}
            rating={5}
            image="Images/product6.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
