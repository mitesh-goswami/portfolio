import React from 'react';
import "./about.css"
import Mg from "../../img/_20180206_193423_mitesh.jpg"
function About() {
  return <div className='a'>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://github.com/mitesh-goswami/portfolio/blob/main/src/img/_20180206_193423_mitesh.jpg?raw=true"
            alt="hi1"
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Hi, I am Mitesh Goswami
        </p>
        <p className="a-desc">
        I am a Full Stack developer. I develop Websites and Web applications in Spring and React, and mobile apps in react-native.
I am proficient in languages such as Python and Java, and have knowledge about technologies such as the Machine Learning, Deep learning, Git version control, Docker and Linux systems
        </p>
        {}
      </div>
  </div>;
}

export default About;
