import React from 'react';
import PropTypes from 'prop-types';
import { StyledItem, StyledStatList } from 'Apps.Style';

const Statistics = ({ total, positivePercentage, state }) => {
  const stateForMarkup = Object.entries(state);
  return (
    <>
      <StyledStatList>
        {stateForMarkup.map(item => (
          <StyledItem key={item}>
            <p>
              {item[0]}: {item[1]}
            </p>
          </StyledItem>
        ))}

        <StyledItem>
          <p>Total: {total}</p>
        </StyledItem>
        <StyledItem>
          <p>Positive Feedbacks: {positivePercentage}%</p>
        </StyledItem>
      </StyledStatList>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
  state: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),
};
