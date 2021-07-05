import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        Made with <span>React</span> at{" "}
        <span>
          <a
            href="https://lereacteur.io"
            target="_blank"
            rel="noreferrer"
            className="lereacteur"
          >
            Le Reacteur&nbsp;
          </a>
        </span>
        by <span>Frédéric Desseaux</span>
      </p>
    </div>
  );
};

export default Footer;
