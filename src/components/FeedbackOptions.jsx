import React from 'react';
import PropTypes from 'prop-types';
import { StyledList, StyledBtn, StyledItem } from 'Apps.Style';

const FeedbackOptions = ({ handleBtnClick, arrForMarkup }) => {
  return (
    <StyledList>
      {arrForMarkup.map(item => (
        <StyledItem key={item}>
          <StyledBtn onClick={() => handleBtnClick(item)}>{item}</StyledBtn>
        </StyledItem>
      ))}
    </StyledList>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  arrForMarkup: PropTypes.arrayOf(PropTypes.string),
  handleBtnClick: PropTypes.func.isRequired,
};
