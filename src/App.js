import "./App.css";
import React, { Component } from "react";

import { CV } from "./components/CV";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      phone: "",
      email: "",
      center: "",
      title: "",
      startingStudies: "",
      endingStudies: "",
      company: "",
      position: "",
      tasks: "",
      startingExp: "",
      endingExp: "",

      cv: {
        name: "",
        phone: "",
        email: "",
        studies: [],
        experience: [],
      },
    };
  }

  handleChange = (e) => {
    const field = e.target.id;
    this.setState({
      ...this.state,
      [field]: e.target.value,
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();

    if (e.target.id === "Personal") {
      this.setState({
        cv: {
          ...this.state.cv,
          name: this.state.name,
          phone: this.state.phone,
          email: this.state.email
        },
      });
    } else if (e.target.id === "Studies") {
      this.setState({
        cv: {
          ...this.state.cv,
          studies: this.state.cv.studies.concat(
            `${this.state.center} | ${this.state.title} (${this.state.startingStudies} - ${this.state.endingStudies})`
          ),
        },
      });
    } else {
      this.setState({
        cv: {
          ...this.state.cv,
          experience: this.state.cv.experience.concat(
            `${this.state.company} | ${this.state.position} | ${this.state.tasks} (${this.state.startingExp} - ${this.state.endingExp})`
          ),
        },
      });
    }
    console.log(this.state)
  };

  render() {
    return (
      <div className="App">
        <div className="forms">
          <div className="personalForm">
            <form id="Personal" onSubmit={this.onSubmitTask}>
              <h1>Personal</h1>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                onChange={this.handleChange}
                autoComplete="off"
              ></input>
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                onChange={this.handleChange}
                autoComplete="off"
              ></input>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                onChange={this.handleChange}
                autoComplete="off"
              ></input>
              <button type="submit" id="personalButton">
                Save personal data
              </button>
            </form>
          </div>
          <div className="studiesForm">
            <form id="Studies" onSubmit={this.onSubmitTask}>
              <h1>Studies</h1>
              <label htmlFor="center">Center</label>
              <input
                id="center"
                onChange={this.handleChange}
                autoComplete="off"
              ></input>
              <label htmlFor="title">Title</label>
              <input
                id="title"
                onChange={this.handleChange}
                autoComplete="off"
              ></input>
              <label htmlFor="startingStudies">Starting year</label>
              <input
                type="number"
                id="startingStudies"
                onChange={this.handleChange}
                autoComplete="off"
              ></input>
              <label htmlFor="endingStudies">Ending year</label>
              <input
                type="number"
                id="endingStudies"
                onChange={this.handleChange}
                autoComplete="off"
              ></input>
              <button type="submit" id="studiesButton">
                Add studies
              </button>
            </form>
          </div>
          <div className="experienceForm">
            <form id="Experience" onSubmit={this.onSubmitTask}>
              <h1>Experience</h1>
              <label htmlFor="company">Company</label>
              <input
                id="company"
                onChange={this.handleChange}
                autoComplete="off"
              ></input>
              <label htmlFor="position">Position</label>
              <input
                id="position"
                onChange={this.handleChange}
                autoComplete="off"
              ></input>
              <label htmlFor="tasks">Tasks</label>
              <input
                id="tasks"
                onChange={this.handleChange}
                autoComplete="off"
              ></input>
              <label htmlFor="startingExp">Starting year</label>
              <input
                type="number"
                id="startingExp"
                onChange={this.handleChange}
                autoComplete="off"
              ></input>
              <label htmlFor="endingExp">Ending year</label>
              <input
                type="number"
                id="endingExp"
                onChange={this.handleChange}
                autoComplete="off"
              ></input>
              <button type="submit" id="expButton">
                Add experience
              </button>
            </form>
          </div>
        </div>
        <div>
          <CV state={this.state.cv}></CV>
        </div>
      </div>
    );
  }
}
