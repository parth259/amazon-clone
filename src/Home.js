import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/15/kindle/merch/2019/4852331/GatewayENCA-Tall-Hero-3000x1200._CB413527479_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12364466"
            title="Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future"
            price={21.0}
            rating={5}
            image="https://play-lh.googleusercontent.com/O2gxsYNyCZakxMihhvtFt0s2riZxS3yrOsaQ0zhWtgeFnrRez9So70pQwFz7PI-AfCAn9jazBTE_AQ=s400-rw"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
        </div>

        <div className="home__row">
          <Product
            id="49038505"
            title="Kindle Paperwhite – Now Waterproof with 2x the Storage"
            price={139.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61eAq6gg-XL._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
          <Product
            id="32543543"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

<Product
  id="49538094"
  title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
  price={239.0}
  rating={4}
  image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
/>;
