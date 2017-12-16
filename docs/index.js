import React from 'react';
import ReactDOM from 'react-dom';
// import { HideAt, ShowAt } from '../src/react-with-breakpoints';
import Landing from './sections/landing';
import Docs from './sections/docs';
import Contribution from './sections/contribution';
import MyStory from './sections/story';
import ViewSlider from 'react-view-slider';

import './css/main.scss';

class App extends React.PureComponent {
  static displayName = 'App';

  state = {
    activeView: 0
  }

  storySet = {
    0: <Landing onChange={ () => this.setState({ activeView: 1 }) } />,
    1: <Docs onChange={ nextView => this.setState({ activeView: nextView }) } />,
    2: <Contribution onChange={ nextView => this.setState({ activeView: nextView }) } />,
    3: <MyStory onChange={ nextView => this.setState({ activeView: nextView }) } />
  }

  renderView = ({ index, key, ref, style }) => (
    <div key={ key } ref={ ref } style={ style }>
      { this.storySet[index] }
    </div>
  )

  render() {
    return (
      <div className="main-wrapper">
        <ViewSlider
          renderView={ this.renderView }
          numViews={ Object.keys(this.storySet).length }
          activeView={ this.state.activeView }
          fillParent
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
