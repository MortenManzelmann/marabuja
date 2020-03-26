import * as React from 'react';
import App from './interfaces/App';
import Hello from './components/Hello';


const App = ({name}: App) => {
  return ( 
  <div>
    <h1>{name}</h1>
    <Hello compiler='Typeeeeescript' framework='React'/>
  </div>
  )
};

export default App;


