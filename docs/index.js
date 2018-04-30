import React from 'react';
import ReactDOM from 'react-dom';
import { BreakpointsProvider, HideAt, ShowAt } from '../src/react-with-breakpoints';
import Landing from './sections/landing';
import Docs from './sections/docs';
import Contribution from './sections/contribution';
import MyStory from './sections/story';
import { ViewPager, Frame, Track, View } from 'react-view-pager';
import ViewSlider from 'react-view-slider';

import './css/main.scss';

class App extends React.PureComponent {
  static displayName = 'App';

  state = {
    activeView: 0
  }

  renderView = ({ index, key, ref, style }) => (
    <div key={ key } ref={ ref } style={ style }>
      { this.storySet[index] }
    </div>
  )

  handleViewChange = (nextView) => {
    if (nextView !== 1) {
      this.track.scrollTo(nextView);
      window.scrollTo(0, 0);
      return;
    }
    this.track.scrollTo(1);
    window.scrollTo(0, 0);
  }

  storySet = {
    0: <Landing onChange={ () => this.setState({ activeView: 1 }) } />,
    1: <Docs onChange={ nextView => this.setState({ activeView: nextView }) } />,
    2: <Contribution onChange={ nextView => this.setState({ activeView: nextView }) } />,
    3: <MyStory onChange={ nextView => this.setState({ activeView: nextView }) } />
  }

  isIOS = !!navigator.platform && (/iPhone|iPod/).test(navigator.platform);

  render() {
    return (
      <BreakpointsProvider>
        <div className="main-wrapper">
          <ShowAt breakpoint="small">
            { this.isIOS
              ? <ViewPager tag="div">
                <Frame autoSize="height">
                  <Track
                    ref={ c => (this.track = c) }
                    viewsToShow={ 1 }
                    className="track"
                    swipe={ false }
                  >
                    <View className="view">
                      <Landing onChange={ () => this.handleViewChange(1) } />
                    </View>
                    <View className="view">
                      <Docs
                        onChange={ nextView => this.handleViewChange(nextView) }
                      />
                    </View>
                    <View className="view">
                      <Contribution onChange={ nextView => this.handleViewChange(nextView) } />
                    </View>
                    <View className="view">
                      <MyStory onChange={ nextView => this.handleViewChange(nextView) } />
                    </View>
                  </Track>
                </Frame>
              </ViewPager>
              : <ViewSlider
                renderView={ this.renderView }
                numViews={ Object.keys(this.storySet).length }
                activeView={ this.state.activeView }
                fillParent
                />
            }
          </ShowAt>
          <HideAt breakpoint="small">
            <Landing />
            <Docs />
            <Contribution />
            <MyStory />
          </HideAt>
        </div>
      </BreakpointsProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
