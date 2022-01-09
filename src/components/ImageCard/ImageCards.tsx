import React, { useCallback, useRef } from "react";
import "./ImageCard.css";
import demo1 from "../../assets/ImageCardImages/1.png";
import demo2 from "../../assets/ImageCardImages/2.png";
import demo3 from "../../assets/ImageCardImages/3.png";
import demo4 from "../../assets/ImageCardImages/4.png";

interface IImageCard {
  src: any;
  text: string;
}

const ImageCard = ({ src, text }: IImageCard) => {
  const animationRef = useRef<HTMLDivElement>(null);

  const triggerHover = useCallback(() => {
    const event = new MouseEvent("mouseover", {
      view: window,
      bubbles: true,
      cancelable: true,
    });

    animationRef.current!.dispatchEvent(event);
  }, []);

  return (
    <div style={{ marginTop: "25px" }} onFocus={triggerHover}>
      <div ref={animationRef} className="hvr-sweep-to-right " />
      <div
        style={{
          fontSize: "40px",
          fontWeight: "lighter",
          textTransform: "uppercase",
        }}
      >
        {text}
      </div>

      <img style={{ width: "600px", marginTop: "20px" }} src={src} />
    </div>
  );
};

const ImageCards = () => {
  const imageData = [
    { src: demo1, text: "Clinical" },
    { src: demo2, text: "Education" },
    { src: demo3, text: "Vocational Training" },
    { src: demo4, text: "Research + Innovation" },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {imageData.map((x) => (
        <ImageCard {...x} />
      ))}
    </div>
  );
};

export default ImageCards;
