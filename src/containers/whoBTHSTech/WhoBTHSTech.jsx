import React from "react";
import Profile from "../../components/sandbox/profile/Profile";
//We need to restyle profile, right now the image is really weird and we need to find a way to make it consistent no matter the div size

import Article from "../../components/sandbox/article/Article";
const WhoBTHSTech = () => {
  return (
    <div className="bthsTech__whoBTHSTech" id="ourteam">
      <div className="bthsTech__whoBTHSTech-title">
        <Article
          className="bthsTech__whoBTHSTech-title-content"
          title="Meet The Team"
          text="The members of BTHS Tech's Development Team are current Brooklyn Tech students in the Software Engineering major."
        />
      </div>

      <div className="bthsTech__whoBTHSTech_container">
        <div className="bthsTech__whoBTHSTech_container_vertical-line">
          <div className="bthsTech__whoBTHSTech_container_vertical-line_pos1">
            <div className="horizontal-line">
              <div className="circle left"></div>
              <div className="profile_container left_container">
                <Profile
                  name="Nikita Masenzov"
                  bio="I am a Head Project Coordinator, my role is to communicate with the admins of the school, keep track of our progress and make sure everything is running smoothly and on schedule."
                />
              </div>
            </div>
          </div>
          <div className="bthsTech__whoBTHSTech_container_vertical-line_pos2">
            <div className="horizontal-line">
              <div className="circle right"></div>
              <div className="profile_container right_container">
                <Profile
                  name="Raymond Lin"
                  bio="I am a Full-Stack Engineer, my role is to create the Systems in the back-end along with helping development of our project website."
                />
              </div>
            </div>
          </div>
          <div className="bthsTech__whoBTHSTech_container_vertical-line_pos3">
            <div className="horizontal-line">
              <div className="circle left"></div>
              <div className="profile_container left_container">
                <Profile
                  name="Owasimul Sidick"
                  bio="I am a Lead Front-End Software Engineer, my role is to create and optimize the website for our project. I will also be in charge of monitoring the integration of our Systems to the website."
                />
              </div>
            </div>
          </div>
          <div className="bthsTech__whoBTHSTech_container_vertical-line_pos4">
            <div className="horizontal-line">
              <div className="circle right"></div>
              <div className="profile_container right_container">
                <Profile
                  name="Justin Lema"
                  bio="I am a Full-Stack Engineer, my role is to create the back-end Systems, deployment and management of our databases, and working on project website."
                />
              </div>
            </div>
          </div>
          <div className="bthsTech__whoBTHSTech_container_vertical-line_pos5">
            <div className="horizontal-line">
              <div className="circle left"></div>
              <div className="profile_container left_container">
                <Profile
                  name="Hongxi Wen"
                  bio="I am a Lead Back-End Engineer, my role is to primarly focus on Systems and maintain stability."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoBTHSTech;
