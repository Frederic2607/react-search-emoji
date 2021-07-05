import React from "react";

const Line = (props) => {
  const { title, symbol } = props.item;

  return (
    <div className="line">
      <span className="emoji">
        {symbol}
        {title}
        <span className="copy">Click to copy !</span>
      </span>
    </div>
  );
};

export default Line;
