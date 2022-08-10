import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import MovingText from 'react-moving-text';

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      style={{ position: "relative" }}
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/Image/pic1.jpg"}
          alt="First slide"
        />
        <Carousel.Caption>
        <h1 style={{ width: "100%" }}>
          <MovingText

      type="zoomIn"
      duration="3000ms"
      delay="0ms"
      direction="normal"
      timing="ease"
      iteration="1"
      fillMode="none">
      Create a account to borrow hard copy books from library.
    </MovingText>
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/Image/pic2.jpg"}
          alt="Second slide"
        />

        <Carousel.Caption>
        <h1 style={{ width: "100%" }}>
          <MovingText

      type="zoomIn"
      duration="3000ms"
      delay="0ms"
      direction="normal"
      timing="ease"
      iteration="1"
      fillMode="none">
      Fine will be added if anyone delay to return books.
    </MovingText>
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/Image/pic3.jpg"}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h1 style={{ width: "100%" }}>
          <MovingText

      type="zoomIn"
      duration="3000ms"
      delay="0ms"
      direction="normal"
      timing="ease"
      iteration="1"
      fillMode="none">
      Only registed user can download softcopy of books.
    </MovingText>
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/Image/pic4.jpg"}
          alt="Fourth slide"
        />

        <Carousel.Caption>
        <h1 style={{ width: "100%" }}>
          <MovingText

      type="zoomIn"
      duration="3000ms"
      delay="0ms"
      direction="normal"
      timing="ease"
      iteration="1"
      fillMode="none">
      3 Books can be borrowed from library at a time.
    </MovingText>
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={process.env.PUBLIC_URL + "/Image/pic5.jpg"}
          alt="Fifth slide"
        />

        <Carousel.Caption>
          <h1 style={{ width: "100%" }}>
          <MovingText

      type="zoomIn"
      duration="3000ms"
      delay="0ms"
      direction="normal"
      timing="ease"
      iteration="1"
      fillMode="none">
      When your issue request is accept by admin you can collect books from library.
    </MovingText>
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
