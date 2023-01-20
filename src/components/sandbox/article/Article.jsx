import React from "react";

const Article = ({ title, text, additionalText }) => {
  return (
    <div className="bthsTech__article">
      <div className="bthsTech__article-content">
        <div className="bthsTech__article-content_container">
          <div className="bthsTech__article-content_container_title">
            <h1>{title}</h1>
          </div>
          <div className="bthsTech__article-content_container_text">
            <p>{text}</p>
            <br />
            <p>{additionalText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
