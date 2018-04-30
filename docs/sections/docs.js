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

  isOldApiSelected = () => this.state.api !== 'v3';

  render() {
    const { onChange } = this.props;
    return (
      <div className="docs section">
        <Heading1>Documentation</Heading1>
        <blockquote className="quote">
          react-with-breakpoints is a set of utility components for altering the user experience between various breakpoints.
        </blockquote>

        { this.isOldApiSelected() && <Note><p>
          <b>There is a newer version available of react-with-breakpoints.</b> You can switch between api versions right below this box. 👇
        </p></Note>}

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

        { !this.isOldApiSelected() && <Note><p>
          Be advised that <Snippet>react-with-breakpoints</Snippet> is dependent on React v16.3 or higher as it takes advantage of the new Context API.
        </p></Note> }

        <Card title="Usage">
          <Code>
            { this.isOldApiSelected() ? (
              <React.Fragment>
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
              </React.Fragment>
            ) : (
              <React.Fragment>
                <CommentSyntax>// in index.js</CommentSyntax>
                <br />
                import { '{ ' }<BlueSyntax>BreakpointsProvider</BlueSyntax>{ ' }' } from '<OrangeSyntax>react-with-breakpoints</OrangeSyntax>';
                <br />
                <br />
                const <BlueSyntax>myApp</BlueSyntax> = () => (<br />
                &nbsp;&nbsp;{'<'}<BlueSyntax>BreakpointsProvider</BlueSyntax>><br />
                &nbsp;&nbsp;&nbsp;&nbsp;{'<'}<BlueSyntax>App</BlueSyntax> /><br />
                &nbsp;&nbsp;{'</'}<BlueSyntax>BreakpointsProvider</BlueSyntax>><br />
                );
                <br /><br />
                <CommentSyntax>// in App.js</CommentSyntax>
                <br />
                import { '{ ' }<BlueSyntax>ShowAt</BlueSyntax>, <BlueSyntax>HideAt</BlueSyntax>{ ' }' } from '<OrangeSyntax>react-with-breakpoints</OrangeSyntax>';
                <br /><br />
                const <BlueSyntax>App</BlueSyntax> = () => (<br />
                &nbsp;&nbsp;{'<'}<BlueSyntax>ShowAt</BlueSyntax> breakpoint="<OrangeSyntax>mediumAndBelow</OrangeSyntax>"><br />
                &nbsp;&nbsp;&nbsp;&nbsp;{'<'}<BlueSyntax>div</BlueSyntax>{'>'}Hello World!{'</'}<BlueSyntax>div</BlueSyntax>{'>'}<br />
                &nbsp;&nbsp;{'</'}<BlueSyntax>ShowAt</BlueSyntax>{'>'}<br />
                &nbsp;&nbsp;{'<'}<BlueSyntax>HideAt</BlueSyntax> breakpoint="<OrangeSyntax>mediumAndBelow</OrangeSyntax>"><br />
                &nbsp;&nbsp;&nbsp;&nbsp;{'<'}<BlueSyntax>div</BlueSyntax>{'>'}Hola Mundo!{'</'}<BlueSyntax>div</BlueSyntax>{'>'}<br />
                &nbsp;&nbsp;{'</'}<BlueSyntax>HideAt</BlueSyntax>{'>'}<br />
                );
              </React.Fragment>
            ) }
          </Code>
        </Card>

        <div className="component-list">
          <Heading2>Component list</Heading2>
          <ul>
            { this.isOldApiSelected() ? (
              <li><a href="#with-breakpoints"><Snippet>withBreakpoints</Snippet></a></li>
            ) : (
              <li><a href="#breakpoints-provider"><Snippet>{ '<BreakpointsProvider />' }</Snippet></a></li>
            ) }
            <li><a href="#hide-at"><Snippet>{ '<HideAt />' }</Snippet></a></li>
            <li><a href="#show-at"><Snippet>{ '<ShowAt />' }</Snippet></a></li>
          </ul>
        </div>

        {this.isOldApiSelected() ? (
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
        ) : (
          <div id="breakpoints-provider" className="BreakpointsProvider">
            <Heading2>BreakpointsProvider</Heading2>
            <p>BreakpointsProvider is taking advantage of the new React v16.3 Context API. It is a context provider and therefore it needs to be rendered on the top of your component tree. For more information about React v16.3's Context API please visit <a href="https://reactjs.org/docs/context.html">this link</a>.</p>
            <p>See in an example how you can use it:</p>
            <Card title="Example - BreakpointsProvider">
              <Code>
                <CommentSyntax>// in index.js</CommentSyntax>
                <br />
                import { '{ ' }<BlueSyntax>BreakpointsProvider</BlueSyntax>{ ' }' } from '<OrangeSyntax>react-with-breakpoints</OrangeSyntax>';
                <br />
                <br />
                const <BlueSyntax>breakpoints</BlueSyntax> = {'{'}
                <br />
                &nbsp;&nbsp;<BlueSyntax>small</BlueSyntax>: 468,
                <br />
                &nbsp;&nbsp;<BlueSyntax>medium</BlueSyntax>: 768,
                <br />
                &nbsp;&nbsp;<BlueSyntax>large</BlueSyntax>: 1024
                <br />
                }
                <br />
                <br />
                const <BlueSyntax>myApp</BlueSyntax> = () => (<br />
                &nbsp;&nbsp;{'<'}<BlueSyntax>BreakpointsProvider</BlueSyntax> breakpoints={ '{' } <OrangeSyntax>breakpoints</OrangeSyntax> { '}' }><CommentSyntax> // breakpoints prop is optional</CommentSyntax>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{'<'}<BlueSyntax>App</BlueSyntax> /><br />
                &nbsp;&nbsp;{'</'}<BlueSyntax>BreakpointsProvider</BlueSyntax>><br />
                );
              </Code>
            </Card>
            <Note><p>
              As you can see in the example above, the <Snippet>breakpoints</Snippet> prop has been moved from HideAt and ShowAt to the BreakpointsProvider component. There is a disadvantage and an advantage of this. You can finally modify the breakpoints object at one place in your app, it became centralized. The disadvantage is that now you need to refactor your code if you manually set the breakpoints in your project if you used v2.
            </p></Note>
            <Card title="Props - BreakpointsProvider">
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
            </Card>
          </div>
        ) }

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
          <p>Here, the div with the ‘Hello World!’ text is going to appear only if you are viewing your website on a medium or larger sized screen. It’ll be hidden and removed from the DOM on small screen width. HideAt gets the current breakpoint (screen wdith described as a text eg.: small) from {this.isOldApiSelected() ? 'withBreakpoints' : 'BreakpointsProvider'}.</p>
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
