import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NavBar from "../components/navbar";
import "./home.css";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      settings: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        vertical: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <div>
        <NavBar />
        <h1 className="text-center">Best Deals</h1>
        <Slider {...this.state.settings}>
          <div>
            <h3>Product 1</h3>
            <p>Description of Product 1</p>
          </div>
          <div>
            <h3>Product 2</h3>
            <p>Description of Product 2</p>
          </div>
          <div>
            <h3>Product 3</h3>
            <p>Description of Product 3</p>
          </div>
          <div>
            <h3>Product 4</h3>
            <p>Description of Product 4</p>
          </div>
        </Slider>
        <h1 className="text-center">Popular Items</h1>
        <div className="section">
          <div className="item">
            <h2>Item 1</h2>
            <p>Description of Item 1</p>
          </div>
          <div className="item">
            <h2>Item 2</h2>
            <p>Description of Item 2</p>
          </div>
        </div>
        <h1 className="text-center">New Items</h1>
        <div className="section">
          <div className="item">
            <h2>Item 3</h2>
            <p>Description of Item 3</p>
          </div>
          <div className="item">
            <h2>Item 4</h2>
            <p>Description of Item 4</p>
          </div>
        </div>
      </div>
    );
  }
}
