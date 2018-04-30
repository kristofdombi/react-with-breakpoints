import React from 'react';
import Logo from '../components/logo';
import Button from '../components/button';
import Card from '../components/card';
import Signature from '../components/signature';
import Code, { OrangeSyntax, CommentSyntax } from '../components/code';
import PropTypes from 'prop-types';
import { ShowAt } from '../../src/react-with-breakpoints';

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
    <ShowAt breakpoint="small">
      <Signature />
    </ShowAt>
    <ShowAt breakpoint="small">
      <Button onClick={ onChange }>Documentation 👉</Button>
    </ShowAt>
  </div>
);

Landing.displayName = 'Landing';

Landing.propTypes = {
  onChange: PropTypes.func
};

export default Landing;
