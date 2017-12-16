import React from 'react';
import { func } from 'prop-types';
import { Heading1 } from '../components/headings';
import Button from '../components/button';
import { ShowAt } from '../../src/react-with-breakpoints';

const MyStory = ({ onChange }) => (
  <div className="story section">
    <Heading1>My story</Heading1>
    <p>I wrote a 4 min long story on Medium about what I learned along the way, when I created the first version of these three modules.</p>
    <p>It got published in DailyJS. It was my first article as a developer.</p>
    <p>So imagine how happy I was, when my submission got approved! 🤓</p>
    <ShowAt breakpoint="small">
      <div className="button-wrapper">
        <Button neutral onClick={ () => onChange(2) }>👈 Contribution</Button>
      </div>
    </ShowAt>
  </div>
);

MyStory.displayName = 'MyStory';

MyStory.propTypes = {
  onChange: func
};

MyStory.defaultProps = {
  onChange: () => {}
};

export default MyStory;
