import React from 'react';
import PropTypes from 'prop-types';
import { Heading1 } from '../components/headings';
import Button from '../components/button';
import Step from '../components/step';

const Contribution = ({ onChange }) => (
  <div className="contribution section">
    <Heading1>Contribution</Heading1>
    <p>Although all kinds of contributions are welcome, I wouldn't mind having a system for them.</p>
    <p className="bold">Please follow the instructions below, if you’re about to work on this project!</p>
    <div className="steps">
      <Step count={ 1 }>
        <p>If you find something, that bothers you about these modules, or you could improve them, please submit a new issue <a href="https://github.com/kristof0425/react-with-breakpoints/issues" target="_blank" rel="noopener noreferrer">here</a>.</p>
      </Step>
      <Step count={ 2 }>
        <p>Fork react-with-breakpoints repository and create your changes in your repository.</p>
      </Step>
      <Step count={ 3 }>
        <p>Create a pull request with the appropriate issue’s number you created (or you found solveable) and put <span className="review-needed">Review needed</span> label on it, if you feel like done with your work.</p>
      </Step>
    </div>
    <p>After this I'll review it personally and hopefully merge it as well.</p>
    <p>Happy coding! ☕️</p>
    <div className="button-wrapper">
      <Button neutral onClick={ () => onChange(1) }>👈 Documentation</Button>
      <Button onClick={ () => onChange(3) }>Story 👉</Button>
    </div>
  </div>
);

Contribution.displayName = 'Contribution';

Contribution.propTypes = {
  onChange: PropTypes.func
};

Contribution.defaultProps = {
  onChange: () => {}
};

export default Contribution;
