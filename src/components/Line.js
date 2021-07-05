import React from "react";

const Line = (props) => {
  const { title, symbol } = props.item;

  return (
    <div className="line">
      <span>
        {symbol}
        {title}
      </span>
    </div>
  );
};

export default Line;
