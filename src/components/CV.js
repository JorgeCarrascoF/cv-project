import { Component } from "react";
import "../styles/CV.css";

import pfp from "../img/shiba-pfp.jpg";
import studyIcon from "../img/study-icon.png";
import expIcon from "../img/exp-icon.png";

export class CV extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, phone, email, studies, experience } = this.props.state;

    let studiesUl = "";
    if (studies !== undefined) {
      studiesUl = (
        <ul>
          {studies.map((study) => {
            return (
              <li>
                <img alt="icon" src={studyIcon} />
                {study}
              </li>
            );
          })}
        </ul>
      );
    }

    let expUl = "";
    if (experience !== undefined) {
      expUl = (
        <ul>
          {experience.map((exp) => {
            return (
              <li>
                <img alt="icon" src={expIcon} />
                {exp}
              </li>
            );
          })}
        </ul>
      );
    }

    return (
      <div className="CV">
        <h1>Your CV</h1>
        <img src={pfp} id="pfp" alt="profile"></img>
        <div className="personal info">
          <div>
            <div className="name">
              <span>Name</span>
              <p id="name">{name}</p>
            </div>
            <div className="phone">
              <span>Phone</span>
              <p id="phone">{phone}</p>
            </div>
          </div>
          <div>
            <span>Email</span>
            <p id="email">{email}</p>
          </div>
        </div>
        <div className="studies info">
          <span>Studies</span>
          {studiesUl}
        </div>
        <div className="exp info">
          <span>Experience</span>
          {expUl}
        </div>
      </div>
    );
  }
}
