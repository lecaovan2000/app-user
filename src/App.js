import "./App.css";
import { Route,  Switch } from "react-router-dom";
import React from 'react'
import { path } from "./constants/path";
import BodyContent from "./view/bodyContent";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={path.root} component={BodyContent} />
      </Switch>
    </div>
  );
}



export default App;
