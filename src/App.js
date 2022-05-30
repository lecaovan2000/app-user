import "./App.css";
import { Route,  Switch } from "react-router-dom";
import React from 'react'
import { paths } from "./constants/paths";
import BodyContent from "./view/bodyContent";
import Footer from "./view/footer";
// import Header from "./view/header";
function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Switch>
        <Route path={paths.root} component={BodyContent} />
      </Switch>
      <Footer/>
    </div>
  );
}



export default App;
