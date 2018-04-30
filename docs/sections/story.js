import React from 'react';
import { func } from 'prop-types';
import { Heading1 } from '../components/headings';
import Button from '../components/button';
import Signature from '../components/signature';
import { ShowAt, HideAt } from '../../src/react-with-breakpoints';

const MyStory = ({ onChange }) => (
  <div className="story section">
    <Heading1>My story</Heading1>
    <p>I'm Kristof Dombi, frontend developer from Budapest. 🌍 I started working as a developer in the middle of 2016's summer. Since then I've been dealing with frontend tasks everyday.</p>
    <p>React-with-breakpoints is one of my first npm modules. The contents of this package are reverse engineered implementation of Airbnb's responsive utility components. I came across <a href="https://medium.com/airbnb-engineering/rearchitecting-airbnbs-frontend-5e213efc24d2">this article</a> earlier in 2017, and got the motivation to open source them.</p>
    <p>I wrote a 4 min long story on <a href="https://medium.com/dailyjs/i-open-sourced-3-modules-from-airbnb-614bc5a2a51d" target="_blank" rel="noopener noreferrer">Medium</a> about what I learned along the way, when I created the first version of these three modules.</p>
    <p>It got published in DailyJS. It was my first article as a developer. So imagine how happy I was, when my submission got approved! 🤓</p>
    <p>Lastly, I'd like to thank you for using react-with-breakpoints. 🙏</p>
    <p>You can find me here as well:</p>
    <div className="socials">
      <a href="https://twitter.com/Kristof0425">Twitter</a>
      <a href="https://github.com/kristof0425/">Github</a>
    </div>
    <ShowAt breakpoint="small">
      <div className="button-wrapper">
        <Button neutral onClick={ () => onChange(2) }>👈 Contribution</Button>
      </div>
    </ShowAt>
    <HideAt breakpoint="small">
      <Signature />
    </HideAt>
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
