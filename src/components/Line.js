import React from "react";
import { useState } from "react";

const Line = (props) => {
  const { title, symbol } = props.item;

  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(symbol);
    alert("Emoji copied to clipboard !");
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="line"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="emoji">
        {symbol}
        {title}
        <span className="copy">Click to copy !</span>
      </span>
    </div>
  );
};

export default Line;
