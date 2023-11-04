import { Component } from "react";
import "./generator.css";
import axios from "axios";

class SyllabusGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: "",
      endDate: "",
      courseTitle: "",
      courseDescription: "",
      daysOfClass: [],
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleDaysChange = (event) => {
    const { options } = event.target;
    const selectedDays = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedDays.push(options[i].value);
      }
    }
    this.setState({
      daysOfClass: selectedDays,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // You can access the syllabus data in this.state and perform actions like saving it to a database, etc.
    console.log("Syllabus Data:", this.state);
  };

  render() {
    return (
      <div>
        <h2>Syllabus Generator</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="startDate">Start Date:</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={this.state.startDate}
              onChange={this.handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="endDate">End Date:</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={this.state.endDate}
              onChange={this.handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="courseTitle">Course Title:</label>
            <input
              type="text"
              id="courseTitle"
              name="courseTitle"
              value={this.state.courseTitle}
              onChange={this.handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="courseDescription">Course Description:</label>
            <textarea
              id="courseDescription"
              name="courseDescription"
              value={this.state.courseDescription}
              onChange={this.handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="daysOfClass">Days Class Meets:</label>
            <select
              id="daysOfClass"
              name="daysOfClass"
              multiple
              value={this.state.daysOfClass}
              onChange={this.handleDaysChange}
            >
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
            </select>
          </div>

          <button type="submit">Generate Syllabus</button>
        </form>
      </div>
    );
  }
}

export default SyllabusGenerator;
