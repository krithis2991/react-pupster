import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import NavTabs from "./components/NavTabs";
// import Home from "./components/pages/Home";
// import About from "./components/pages/About";


function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        {/*} <Route exact path="/" component={Home} />
        { <Route exact path="/about" component={About} /> */}
        {/* <Route exact path="/discover" component={Discover} />
        <Route path="/search" component={Search} /> */}
      </div>
    </Router>
  );
}

export default App;