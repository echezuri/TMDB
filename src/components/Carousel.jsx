import React from "react";
import Slider from "infinite-react-carousel";
import "./Carousel.css";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const imgURL = "https://image.tmdb.org/t/p/original";

const Carousel = ({ top }) => {
  const settings = {
    arrows: false,
    autoplay: true,
    duration: 10000,
    autoplaySpeed: 1000,
    autoplayScroll: 1,
  };

  return (
    <Grid>
      <section className="slider">
        <Slider {...settings} className="slider__content">
          {top.map((image) => (
            <div key={image.id} className="slider__content--item">
              <Link
                to={`/movie/${image.id}`}
                style={{ textDecoration: "none" }}
              >
                <img
                  className="carousel-image"
                  src={imgURL + image.backdrop_path}
                  alt={image.original_title}
                />
                <p className="slider-description">{image.original_title}</p>
              </Link>
            </div>
          ))}
        </Slider>
      </section>
    </Grid>
  );
};

export default Carousel;
