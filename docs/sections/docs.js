import React from 'react';
import PropTypes from 'prop-types';
import Button from '../components/button';
import { Heading1, Heading2 } from '../components/headings';
import Snippet from '../components/snippet';
import Card from '../components/card';
import Note from '../components/note';
import Code, { BlueSyntax, OrangeSyntax, CommentSyntax } from '../components/code';
import breakpointTypes from '../../util/breakpoint-types';

const Docs = ({ onChange }) => (
  <div className="docs section">
    <Heading1>Documentation</Heading1>
    <blockquote className="quote">
      react-with-breakpoints is a set of utility components for altering the user experience between various breakpoints.
    </blockquote>
    <div className="component-list">
      <Heading2>Component list</Heading2>
      <ul>
        <li><Snippet>withBreakpoints</Snippet></li>
        <li><Snippet>{ '<HideAt />' }</Snippet></li>
        <li><Snippet>{ '<ShowAt />' }</Snippet></li>
      </ul>
    </div>
    <div className="withBreakpoints">
      <Heading2>withBreakpoint</Heading2>
      <p>It’s a <a href="https://reactjs.org/docs/higher-order-components.html" target="_blank" rel="noopener noreferrer">HOC</a> (higher order component), responsible for adding the scroll event listener and passing down the current breakpoint as a prop to its child.</p>
      <p>See in an example how you can use it:</p>
      <Card title="Example">
        <Code>
          import { '{ ' }<BlueSyntax>withBreakpoints</BlueSyntax>{ ' }' } from '<OrangeSyntax>react-with-breakpoints</OrangeSyntax>';<br />
          <br />
          <CommentSyntax>// just like in the source of HideAt,</CommentSyntax><br />
          <CommentSyntax>// you can put any component</CommentSyntax><br />
          <CommentSyntax>// as an argument of withBreakpoints</CommentSyntax><br />
          <br />
          const <BlueSyntax>HelloWorld</BlueSyntax> = () => {'<'}<BlueSyntax>div</BlueSyntax>>Hello World!{'</'}<BlueSyntax>div</BlueSyntax>{'>'};<br />
          <br />
          const <BlueSyntax>helloWithBreakpoint</BlueSyntax> = <OrangeSyntax>withBreakpoints</OrangeSyntax>(<BlueSyntax>HelloWorld</BlueSyntax>);<br />
          <br />
          export default <BlueSyntax>helloWithBreakpoint</BlueSyntax>;
        </Code>
      </Card>
    </div>
    <div className="HideAt">
      <Heading2>HideAt</Heading2>
      <p>HideAt is a stateless function, which helps you make your DOM leaner. It hides its children, when the proper criterias are met.</p>
      <p>Let’s see it in action:</p>
      <Card title="Example">
        <Code>
          import { '{ ' }<BlueSyntax>HideAt</BlueSyntax>{ ' }' } from '<OrangeSyntax>react-with-breakpoints</OrangeSyntax>';<br />
          <br />
          const <BlueSyntax>myApp</BlueSyntax> = () => (<br />
          &nbsp;&nbsp;{'<'}<BlueSyntax>HideAt</BlueSyntax> breakpoint=“<OrangeSyntax>small</OrangeSyntax>"><br />
          &nbsp;&nbsp;&nbsp;&nbsp;{'<'}<BlueSyntax>div</BlueSyntax>{'>'}Hello World!{'</'}<BlueSyntax>div</BlueSyntax>{'>'}<br />
          &nbsp;&nbsp;{'</'}<BlueSyntax>HideAt</BlueSyntax>{'>'}<br />
          );
        </Code>
      </Card>
      <Note>
        <p>Here, the div with the ‘Hello World!’ text is going to appear only if you are viewing your website on a medium or larger sized screen. It’ll be hidden and removed from the DOM on small screen width. HideAt gets the current breakpoint (screen wdith described as a text eg.: small) from withBreakpoints.</p>
        <p>We’ll talk in a minute about what small, medium and large mean exactly.</p>
      </Note>
      <p>As HideAt and ShowAt function the same way (they do the opposite things of each other), they share the same props and prop-types.</p>
      <p>Have a look at them:</p>
      <Card title="Props">
        <ul>
          <li>
            <Snippet>breakpoint</Snippet> can be either:
            <div className="breakpoint-snippets">
              { breakpointTypes.map(breakpoint => <Snippet key={ breakpoint }>{ `"${breakpoint}"` }</Snippet>) }
            </div>
            <p>This prop is required prop!</p>
          </li>
          <li>
            <Snippet>breakpoints</Snippet>:
          </li>
          <li><Snippet>currentBreakpoint</Snippet>:</li>
          <li><Snippet>children</Snippet>:</li>
        </ul>
      </Card>
    </div>
    <Heading2>ShowAt</Heading2>
    <div className="button-wrapper">
      <Button neutral onClick={ () => onChange(0) }>👈 Installation</Button>
      <Button onClick={ () => onChange(2) }>Contribution 👉</Button>
    </div>
  </div>
);

Docs.displayName = 'Docs';

Docs.propTypes = {
  onChange: PropTypes.func
};

Docs.defaultProps = {
  onChange: () => {}
};

export default Docs;
