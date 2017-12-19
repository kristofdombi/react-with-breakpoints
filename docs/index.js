import React from 'react';
import ReactDOM from 'react-dom';
import { HideAt, ShowAt } from '../src/react-with-breakpoints';
import Landing from './sections/landing';
import Docs from './sections/docs';
import Contribution from './sections/contribution';
import MyStory from './sections/story';
import { ViewPager, Frame, Track, View } from 'react-view-pager';

import './css/main.scss';

class App extends React.PureComponent {
  static displayName = 'App';

  handleViewChange = (nextView) => {
    if (nextView !== 1) {
      this.track.scrollTo(nextView);
      window.scrollTo(0, 0);
      return;
    }
    this.track.scrollTo(1);
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="main-wrapper">
        <ShowAt breakpoint="small">
          <ViewPager tag="main">
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
        </ShowAt>
        <HideAt breakpoint="small">
          <Landing />
          <Docs />
          <Contribution />
          <MyStory />
        </HideAt>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
