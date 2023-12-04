import { Component } from 'react';
import Feedback from './Feedback';
import Statistics from './Statistics';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateFeedback = option => {
    console.log([option]);

    console.log(this.state);

    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };
  render() {
    return (
      <div>
        <Feedback
          options={this.options}
          updateFeedback={this.updateFeedback}
        ></Feedback>
        <Statistics></Statistics>
      </div>
    );
  }
}
