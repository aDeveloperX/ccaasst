import React, { ReactElement } from "react";

interface IContentArea {
  style?: any;
  text: any[];
}

const ContentArea = ({ text, style }: IContentArea) => {
  return (
    <div
      style={{
        backgroundColor: "rgb(0,48,87)",
        display: "flex",
        justifyContent: "space-around",
        ...style,
      }}
    >
      {text.map((x) => (
        <div
          style={{
            padding: "30px",
            maxWidth: "400px",
            color: "white",
            lineHeight: "1.5",
            fontSize: "20px",
          }}
        >
          {x}
        </div>
      ))}
    </div>
  );
};

export default ContentArea;
