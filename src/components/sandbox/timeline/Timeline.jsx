import React from "react";
import Article from "../article/Article";

const Timeline = () => {
  return (
    <div className="bthsTech__timeline" id="timeline">
      <div className="bthsTech__timeline_line_pos1">
        <div className="vertical-line">
          <div className="circle top"></div>
          <div className="bthsTech__timeline_line_pos1_container top_container">
            <Article
              title="Stage 1"
              text="Create a dynamic website describing our mission and our goals we are aiming for in the future"
              additionalText="WE ARE HERE"
            />
          </div>
        </div>
      </div>
      <div className="bthsTech__timeline_line_pos2">
        <div className="vertical-line">
          <div className="circle bottom"></div>
          <div className="bthsTech__timeline_line_pos1_container bottom_container">
            <Article
              title="Stage 2"
              text="Start development on the alpha version of the Improved Scheduling System for Teachers and Substitute Teachers"
              additionalText="STARTING SOON"
            />
          </div>
        </div>
      </div>
      <div className="bthsTech__timeline_line_pos3">
        <div className="vertical-line">
          <div className="circle top"></div>
          <div className="bthsTech__timeline_line_pos1_container top_container">
            <Article
              title="Stage 3"
              text="Extensively Test and Finalize the Substitute Teacher Schedule System for deployment on our website"
              additionalText="FEB 2023"
            />
          </div>
        </div>
      </div>
      <div className="bthsTech__timeline_line_pos4">
        <div className="vertical-line">
          <div className="circle bottom"></div>
          <div className="bthsTech__timeline_line_pos1_container bottom_container">
            <Article
              title="Stage 4"
              text="Expand Scope for Schedule System and start development for Scheduling Students."
              additionalText="MARCH 2023"
            />
          </div>
        </div>
      </div>
      <div className="bthsTech__timeline_line_pos5">
        <div className="vertical-line">
          <div className="circle top"></div>
          <div className="bthsTech__timeline_line_pos1_container top_container">
            <Article
              title="Stage 5"
              text="Extensively Test and Finalize the Student Schedule System for deployment on our website"
              additionalText="MAY 2023"
            />
          </div>
        </div>
      </div>
      <hr className="bthsTech__timeline_line" />
    </div>
  );
};

export default Timeline;
