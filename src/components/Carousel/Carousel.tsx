import React from "react";
import { Carousel as Cs } from "react-responsive-carousel";
import landscape from "../../assets/landscape.jpeg";
import landscape2 from "../../assets/landscape2.jpeg";
import landscape3 from "../../assets/landscape3.jpeg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { fontWeight } from "@mui/system";
import { useRef } from "react";

interface ICarouselItem {
  image: any;
  text?: string;
}

const CarouselItem = ({ image, text }: ICarouselItem) => {
  const divRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <img style={{ height: "600px" }} src={image} />
      {text && (
        <div
          ref={divRef}
          style={{
            position: "absolute",
            color: "white",
            fontSize: "40px",
            fontWeight: "bold",
            left: 0,
            right: 0,
            top: "45%",
            bottom: 0,
            margin: "auto",
            width: "100%",
          }}
        >
          {text}
        </div>
      )}
    </>
  );
};

const Carousel = ({ ...props }) => {
  return (
    <Cs {...props}>
      <div>
        <CarouselItem
          image={landscape}
          text="HEALTHCARE IN REMOTE AND EXTREME ENVIRONMENTS"
        />
      </div>
      <div>
        <CarouselItem
          image={landscape2}
          text="HEALTHCARE IN REMOTE AND EXTREME ENVIRONMENTS"
        />
      </div>
      <div>
        <CarouselItem
          image={landscape3}
          text="HEALTHCARE IN REMOTE AND EXTREME ENVIRONMENTS"
        />
      </div>
    </Cs>
  );
};

export default Carousel;
