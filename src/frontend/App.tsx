import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Board from './pages/board/Board';
import Overview from './pages/overview/Overview';
import Proposals from './pages/proposals/Proposals';
import Navigation from './ui-basic/components/navigation/navigation.component'
import Page from './ui-basic/container/page/page.container';

import scoutRecommendationsMock from './fixtures/scout-recommendation.mock';

interface App {
  name: string;
}

const App = ({ name }: App) => {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/board">
            <Page>
              <Board scoutRecommendationsList={scoutRecommendationsMock} />
            </Page>
          </Route>
          <Route path="/proposals">
            <Page>
              <Proposals compiler='user' framework='symfony' />
            </Page>
          </Route>
          <Route path="/">
            <Page>
              <Overview compiler='home' framework='symfony' />
            </Page>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
