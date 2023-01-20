import React from "react";

const Brand = () => {
  return (
    <div className="bthsTech__brand" id="home">
      <div className="bthsTech__brand-content">
        <h1>Climetech Project 
        </h1>
        <a style={{
          width: '100%',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          pointerEvents: 'none'
        }} href="#wbthsTech">
          <div className="scroll-down" style={{
            marginTop: '30%',
          }}></div>
        </a>
      </div>
    </div>
  );
};

export default Brand;
