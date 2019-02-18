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
    const num = parseInt(this.state.feb);
    this.props.february(num);
    this.setState({ months: this.props.monthly });
  }

  render() {
    const { months } = this.state;
    // console.log(this.props.monthly);

    const graphData = {
      labels: months.map(item => item.month),
      datasets: [
        {
          data: months.map(e => e.count),
          backgroundColor: [
            "#734397",
            "#DA1F26",
            "#F9E04F",
            "#223F8D",
            "#71BC45"
          ],
          hoverBackgroundColor: [
            "#734397",
            "#DA1F26",
            "#F9E04F",
            "#223F8D",
            "#71BC45"
          ],
          labels: "Test Chart"
        }
      ]
    };
    return (
      <div>
        <h1>ChartJs Practice</h1>
        <div>
          <Bar
            data={graphData}
            height={400}
            width={10}
            options={{
              maintainAspectRatio: false
            }}
          />
        </div>
        <div>
          <h1>Change data</h1>
          <div>
            <label>Feb: </label>
            <input
              type="number"
              min="0"
              value={this.state.feb}
              onChange={e => this.setState({ feb: e.target.value })}
            />
            <button onClick={() => this.updateMonths()}>Update February</button>
          </div>
        </div>
      </div>
    );
  }
}

function stateToProps(state) {
  return {
    monthly: state.monthly
  };
}

export default connect(
  stateToProps,
  { february }
)(Charts);
