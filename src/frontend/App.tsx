import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Board from './pages/board/board.page';
import OverviewPage from './pages/overview/overview.page';
import Proposals from './pages/proposals/proposal.page';
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
              <Board page={{title: 'Board', subTitle: ''}} scoutRecommendationsList={scoutRecommendationsMock} />
            </Page>
          </Route>
          <Route path="/proposals">
            <Page>
              <Proposals page={{title: 'Proposals', subTitle: ''}} />
            </Page>
          </Route>
          <Route path="/">
            <Page>
              <OverviewPage page={{title: 'Overview', subTitle: ''}} />
            </Page>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
