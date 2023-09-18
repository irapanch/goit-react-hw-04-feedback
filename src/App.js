import React, { useState } from 'react';
import { StyledApp } from './Apps.Style';

import Statistics from './components/Statistics.jsx';
import Section from './components/Section.jsx';
import Notification from './components/Notification.jsx';
import FeedbackOptions from 'components/FeedbackOptions';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleBtnClick = item => {
    if (item === 'good') {
      setGood(prev => prev + 1);
    } else if (item === 'neutral') {
      setNeutral(prev => prev + 1);
    } else if (item === 'bad') {
      setBad(prev => prev + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total === 0 ? 0 : ((good / total) * 100).toFixed(0);
  };

  const arrForMarkup = ['good', 'neutral', 'bad'];

  return (
    <StyledApp>
      <Section title="Please leave feedback">
        <FeedbackOptions
          arrForMarkup={arrForMarkup}
          handleBtnClick={handleBtnClick}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            state={{ good, neutral, bad }}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </StyledApp>
  );
};

export default App;
