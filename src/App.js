import React from 'react';
import { StyledApp } from './Apps.Style';
// import AddFeedback from './components/AddFeedback.jsx';
import Statistics from './components/Statistics.jsx';
import Section from './components/Section.jsx';
import Notification from './components/Notification.jsx';
import FeedbackOptions from 'components/FeedbackOptions';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // handleAddGood = () => {
  //   this.setState(prevState => ({
  //     good: prevState.good + 1,
  //   }));
  // };

  // handleAddNeutral = () => {
  //   this.setState(prevState => ({
  //     neutral: prevState.neutral + 1,
  //   }));
  // };

  // handleAddBad = () => {
  //   this.setState(prevState => ({
  //     bad: prevState.bad + 1,
  //   }));
  // };
  arrForMarkup = Object.keys(this.state);

  handleBtnClick = item => {
    this.setState(prev => ({ [item]: prev[item] + 1 }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : ((good / total) * 100).toFixed(0);
  };

  render() {
    return (
      <StyledApp>
        <Section title="Please leave feedback">
          <FeedbackOptions
            arrForMarkup={this.arrForMarkup}
            handleBtnClick={this.handleBtnClick}
            // addGood={this.handleAddGood}
            // addNeutral={this.handleAddNeutral}
            // addBad={this.handleAddBad}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              state={this.state}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </StyledApp>
    );
  }
}

export default App;
