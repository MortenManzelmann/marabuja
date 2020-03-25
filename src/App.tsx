import * as React from "react";
import Hello from "./components/Hello"

export interface AppProps { name: string; }

const App = ({name}: AppProps) => {
  return ( 
  <div>
    <h1>{name}</h1>
    <Hello compiler='Typscript' framework='React'/>
  </div>
  )
};

export default App;


