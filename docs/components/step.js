import React from 'react';
import PropTypes from 'prop-types';

const StepCount = ({ children }) => <div className="step-count">{ children }</div>;

StepCount.displayName = 'StepCount';

StepCount.propTypes = { children: PropTypes.number };

const Step = ({ count, children }) => (
  <div className="step">
    <StepCount>{ count }</StepCount>
    <div className="step-text">
      { children }
    </div>
  </div>
);

Step.displayName = 'Step';

Step.propTypes = {
  count: PropTypes.number,
  children: PropTypes.node
};

export default Step;
