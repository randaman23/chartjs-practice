import React, { Component } from "react";
import { connect } from "react-redux";
import { Bar } from "react-chartjs-2";
import { february } from "./../ducks/reducer";

class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      months: [],
      feb: 0,
      march: 0,
      apr: 0
    };
  }

  componentDidMount() {
    this.setState({ months: this.props.monthly });
  }

  updateMonths() {
    const num = parseInt(this.state.jan);
    this.props.february(num);
    this.setState({ months: this.props.monthly });
  }

  render() {
    const { months } = this.state;
    console.log(this.props.monthly);

    return (
      <div>
        <h1>hello</h1>
      </div>
    );
  }
}

export default Charts;
