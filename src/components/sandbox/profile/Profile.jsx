import React from "react";
import person from "../../../../public/img/profile_pic.png";
const Profile = ({ img, name, bio }) => {
  return (
    <div className="bthsTech__profile">
      <div className="bthsTech__profile-content">
        <div className="bthsTech__profile-content_container">
          <div className="bthsTech__profile-content_image">
            <img src={person} alt="team member"></img>
          </div>
          <div className="bthsTech__profile-content_container_bio">
            <div className="bthsTech__profile-content_container_name">
              <h2>{name}</h2>
            </div>
            <p className="bthsTech__profile-content_container_bio-info">
              {bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
