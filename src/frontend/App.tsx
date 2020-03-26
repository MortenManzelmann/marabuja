import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Hello from './components/Hello';

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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      <Switch> 
        <Route path="/about">
          <Hello compiler='gcc' framework='symfony'/>
        </Route>
        <Route path="/users">
          <Hello compiler='user' framework='symfony'/>
        </Route>
        <Route path="/">
          <Hello compiler='home' framework='symfony'/>
        </Route>
      </Switch>
    </div>
  </Router>
);
}

export default App;
