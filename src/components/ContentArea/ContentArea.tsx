import React from "react";

interface IContentArea {
  style?: any;
  text: string[];
}

const ContentArea = ({ text, style }: IContentArea) => {
  if (text.length !== 2) {
    return <div>Unsupported</div>;
  }
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
            maxWidth: "700px",
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
