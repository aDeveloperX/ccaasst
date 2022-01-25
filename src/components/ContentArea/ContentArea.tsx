import React, { ReactElement } from "react";
import { Colours } from "../../theme/Colours";

interface IContentArea {
  style?: any;
  text: any[];
}

const ContentArea = ({ text, style }: IContentArea) => {
  return (
    <div>
      <div
        style={{
          backgroundColor: Colours.DarkBlue,
          padding: "50px",

          color: "white",
          lineHeight: "1.5",
          fontSize: "20px",
          ...style,
        }}
      >
        {text[0]}
      </div>
      <div
        style={{
          backgroundColor: Colours.DarkBlue,
          display: "flex",
          justifyContent: "space-around",
          ...style,
        }}
      >
        {text.slice(1, 3).map((x) => (
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
    </div>
  );
};

export default ContentArea;
