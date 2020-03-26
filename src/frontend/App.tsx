import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Board from './pages/board/Board';
import Overview from './pages/overview/Overview';
import Proposals from './pages/proposals/Proposals';

interface App {
  name: string;
}

const App = ({name}: App) => {
  return ( 
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Overview</Link>
          </li>
          <li>
            <Link to="/board">About</Link>
          </li>
          <li>
            <Link to="/proposals">Users</Link>
          </li>
        </ul>
      </nav>

      <Switch> 
        <Route path="/board">
          <Board compiler='gcc' framework='symfony'/>
        </Route>
        <Route path="/proposals">
          <Proposals compiler='user' framework='symfony'/>
        </Route>
        <Route path="/">
          <Overview compiler='home' framework='symfony'/>
        </Route>
      </Switch>
    </div>
  </Router>
);
}

export default App;
