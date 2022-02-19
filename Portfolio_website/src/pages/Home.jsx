import React from 'react';
import rocket from '../images/rocket.svg';
import profilePhoto from '../images/leandro_profile_photo.jpeg';
import './style_sheets/Home.css';


class Home extends React.Component {
  render() {
    return (
      <section className="main-content">
        <img src={profilePhoto} className="profile-photo" alt="Leandro Parisi Photo" />
        <h2>Front-end Developer</h2>
    </section>
    );
  };
}

export default Home;
