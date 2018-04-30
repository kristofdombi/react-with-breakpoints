import React from 'react';
import PropTypes from 'prop-types';
import Button from '../components/button';
import { Heading1, Heading2 } from '../components/headings';
import Snippet from '../components/snippet';
import Card from '../components/card';
import Note from '../components/note';
import { Table, Row } from '../components/table';
import Code, { BlueSyntax, OrangeSyntax, CommentSyntax } from '../components/code';
import Switch from '../components/switch';
import breakpointTypes from '../../util/breakpoint-types';
import Collapsible from 'react-collapsible';
import { ShowAt } from '../../src/react-with-breakpoints';

const cubicBezier = 'cubic-bezier(.76,.06,.53,1.31)';

// eslint-disable-next-line
const AccordionTitle = ({ title }) => <div className="accordion-title">
  <Snippet>{ title }</Snippet>
  <div className="triangle" />
</div>;

class Docs extends React.PureComponent {
  static displayName = 'Docs';

  static propTypes = {
    onChange: PropTypes.func,
  }

  static defaultProps = {
    onChange: () => {}
  }

  constructor(props) {
    super(props);
    this.state = {
      api: window.localStorage.getItem('api') || 'v2',
    };
  }

  handleChange = (field, value) => {
    this.setState({ [field]: value },
      () => window.localStorage.setItem(field, value));
  }

  render() {
    const { onChange } = this.props;
    return (
      <div className="docs section">
        <Heading1>Documentation</Heading1>
        <blockquote className="quote">
          react-with-breakpoints is a set of utility components for altering the user experience between various breakpoints.
        </blockquote>
        <div className="api-switch">
          <p>Switch between api versions:</p>
          <Switch>
            <Switch.Button
              isSelected={ this.state.api === 'v2' }
              onClick={ () => this.handleChange('api', 'v2') }
            >v2</Switch.Button>
            <Switch.Button
              isSelected={ this.state.api === 'v3' }
              onClick={ () => this.handleChange('api', 'v3') }
            >v3</Switch.Button>
          </Switch>
        </div>
        <Card title="Usage">
          <Code>
            import { '{ ' }<BlueSyntax>ShowAt</BlueSyntax>, <BlueSyntax>HideAt</BlueSyntax>{ ' }' } from '<OrangeSyntax>react-with-breakpoints</OrangeSyntax>';<br />
            <br />
            const <BlueSyntax>myApp</BlueSyntax> = () => (<br />
            &nbsp;&nbsp;{'<'}<BlueSyntax>ShowAt</BlueSyntax> breakpoint="<OrangeSyntax>mediumAndBelow</OrangeSyntax>"><br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'<'}<BlueSyntax>div</BlueSyntax>{'>'}Hello World!{'</'}<BlueSyntax>div</BlueSyntax>{'>'}<br />
            &nbsp;&nbsp;{'</'}<BlueSyntax>ShowAt</BlueSyntax>{'>'}<br />
            &nbsp;&nbsp;{'<'}<BlueSyntax>HideAt</BlueSyntax> breakpoint="<OrangeSyntax>mediumAndBelow</OrangeSyntax>"><br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'<'}<BlueSyntax>div</BlueSyntax>{'>'}Hola Mundo!{'</'}<BlueSyntax>div</BlueSyntax>{'>'}<br />
            &nbsp;&nbsp;{'</'}<BlueSyntax>HideAt</BlueSyntax>{'>'}<br />
            );
          </Code>
        </Card>
        <div className="component-list">
          <Heading2>Component list</Heading2>
          <ul>
            <li><a href="#with-breakpoints"><Snippet>withBreakpoints</Snippet></a></li>
            <li><a href="#hide-at"><Snippet>{ '<HideAt />' }</Snippet></a></li>
            <li><a href="#show-at"><Snippet>{ '<ShowAt />' }</Snippet></a></li>
          </ul>
        </div>
        <div id="with-breakpoints" className="withBreakpoints">
          <Heading2>withBreakpoints</Heading2>
          <p>It’s a <a href="https://reactjs.org/docs/higher-order-components.html" target="_blank" rel="noopener noreferrer">HOC</a> (higher order component), responsible for adding the scroll event listener and passing down the current breakpoint as a prop to its child.</p>
          <p>See in an example how you can use it:</p>
          <Card title="Example - withBreakpoints">
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
        <div id="hide-at" className="HideAt">
          <Heading2>HideAt</Heading2>
          <p>HideAt is a stateless function, which helps you make your DOM leaner. It hides its children, when the proper criterias are met.</p>
          <p>Let’s see it in action:</p>
          <Card title="Example - HideAt">
            <Code>
              import { '{ ' }<BlueSyntax>HideAt</BlueSyntax>{ ' }' } from '<OrangeSyntax>react-with-breakpoints</OrangeSyntax>';<br />
              <br />
              const <BlueSyntax>myApp</BlueSyntax> = () => (<br />
              &nbsp;&nbsp;{'<'}<BlueSyntax>HideAt</BlueSyntax> breakpoint="<OrangeSyntax>small</OrangeSyntax>"><br />
              &nbsp;&nbsp;&nbsp;&nbsp;{'<'}<BlueSyntax>div</BlueSyntax>{'>'}Hello World!{'</'}<BlueSyntax>div</BlueSyntax>{'>'}<br />
              &nbsp;&nbsp;{'</'}<BlueSyntax>HideAt</BlueSyntax>{'>'}<br />
              );
            </Code>
          </Card>
          <p>Here, the div with the ‘Hello World!’ text is going to appear only if you are viewing your website on a medium or larger sized screen. It’ll be hidden and removed from the DOM on small screen width. HideAt gets the current breakpoint (screen wdith described as a text eg.: small) from withBreakpoints.</p>
          <Note>
            <p>As HideAt and ShowAt function the same way (they do the opposite things of each other), they share the same props and prop-types.</p>
          </Note>
          <Card title="Props">
            <Collapsible trigger={ <AccordionTitle title="breakpoint" /> } easing={ cubicBezier }>
              <Table>
                <Row title="Type:">
                  <Snippet>String</Snippet>
                </Row>
                <Row title="Value:">
                  <div className="breakpoint-snippets">
                    { breakpointTypes.map(breakpoint => <Snippet key={ breakpoint }>{ `"${breakpoint}"` }</Snippet>) }
                  </div>
                </Row>
                <Row title="Description:">
                  You can set either one of the values to tell the component where to hide or show its children.
                </Row>
                <Row title="Required:">
                  <Snippet>true</Snippet>
                </Row>
              </Table>
            </Collapsible>
            <Collapsible trigger={ <AccordionTitle title="breakpoints" /> } easing={ cubicBezier }>
              <Table>
                <Row title="Type:">
                  <Snippet>Object</Snippet>
                </Row>
                <Row title="Value:">
                  <Code>
                    {'{'}
                    <br />
                    &nbsp;&nbsp;<BlueSyntax>small</BlueSyntax>: Number
                    <br />
                    &nbsp;&nbsp;<BlueSyntax>medium</BlueSyntax>: Number
                    <br />
                    &nbsp;&nbsp;<BlueSyntax>large</BlueSyntax>: Number
                    <br />
                    {'}'}
                  </Code>
                </Row>
                <Row title="Default value:">
                  <Code>
                    <CommentSyntax>// Coming from airbnbBreakpoints</CommentSyntax><br />
                    {'{'}
                    <br />
                    &nbsp;&nbsp;<BlueSyntax>small</BlueSyntax>: 744
                    <br />
                    &nbsp;&nbsp;<BlueSyntax>medium</BlueSyntax>: 1128
                    <br />
                    &nbsp;&nbsp;<BlueSyntax>large</BlueSyntax>: <Snippet>Infinity</Snippet>
                    <br />
                    {'}'}
                  </Code>
                </Row>
                <Row title="Description:">
                  <p>Here you can override the default Airbnb breakpoints. It needs to be an object with a strict shape, which is shown at the value row.</p>
                </Row>
                <Row title="Required:">
                  <Snippet>false</Snippet>
                </Row>
              </Table>
            </Collapsible>
            <Collapsible trigger={ <AccordionTitle title="currentBreakpoint" /> } easing={ cubicBezier }>
              <Table>
                <Row title="Type:">
                  <Snippet>String</Snippet>
                </Row>
                <Row title="Value:">
                  <div className="breakpoint-snippets">
                    <Snippet>"small"</Snippet>
                    <Snippet>"medium"</Snippet>
                    <Snippet>"large"</Snippet>
                  </div>
                </Row>
                <Row title="Description:">
                  It's used by withBreakpoint. Whenever there is a change with the breakpoints, the appropriate value will be passed down to HideAt or ShowAt.
                </Row>
                <Row title="Required:">
                  <Snippet>false</Snippet>
                </Row>
              </Table>
            </Collapsible>
          </Card>
        </div>
        <div id="show-at" className="ShowAt">
          <Heading2>ShowAt</Heading2>
          <p>ShowAt functions the opposite way as HideAt does. It reveals its children when the current breakpoint matches its breakpoint. (eg.: small, smallAndBelow)</p>
          <p>As said above, ShowAt and HideAt share the same <Snippet>props</Snippet> and <Snippet>propTypes</Snippet>, so please look at the prop descriptions at HideAt.</p>
          <Card title="Example - ShowAt">
            <Code>
              import { '{ ' }<BlueSyntax>ShowAt</BlueSyntax>{ ' }' } from '<OrangeSyntax>react-with-breakpoints</OrangeSyntax>';<br />
              <br />
              const <BlueSyntax>myApp</BlueSyntax> = () => (<br />
              &nbsp;&nbsp;{'<'}<BlueSyntax>ShowAt</BlueSyntax> breakpoint="<OrangeSyntax>mediumAndBelow</OrangeSyntax>"><br />
              &nbsp;&nbsp;&nbsp;&nbsp;{'<'}<BlueSyntax>div</BlueSyntax>{'>'}Hello World!{'</'}<BlueSyntax>div</BlueSyntax>{'>'}<br />
              &nbsp;&nbsp;{'</'}<BlueSyntax>ShowAt</BlueSyntax>{'>'}<br />
              );
            </Code>
          </Card>
        </div>
        <ShowAt breakpoint="small">
          <div className="button-wrapper">
            <Button neutral onClick={ () => onChange(0) }>👈 Installation</Button>
            <Button onClick={ () => onChange(2) }>Contribution 👉</Button>
          </div>
        </ShowAt>
      </div>
    );
  }
}

export default Docs;
