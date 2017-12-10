import React from 'react';
import Logo from '../components/logo';
import Button from '../components/button';
import Card from '../components/card';
import Code, { OrangeSyntax, CommentSyntax } from '../components/code';
import PropTypes from 'prop-types';

const Landing = ({ onChange }) => (
  <div className="landing">
    <Logo />
    <p className="greeting">Welcome 👋</p>
    <Card title="Installation">
      <Code>
        ~ npm install <OrangeSyntax>react-with-breakpoints</OrangeSyntax><br />
        <CommentSyntax>
          # or use yarn
        </CommentSyntax><br />
        ~ yarn add <OrangeSyntax>react-with-breakpoints</OrangeSyntax>
      </Code>
    </Card>
    <Button onClick={ onChange }>Documentation 👉</Button>
  </div>
);

Landing.displayName = 'Landing';

Landing.propTypes = {
  onChange: PropTypes.func
};

export default Landing;
