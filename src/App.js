import React from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Index from './components/Index'

function App() {
  return (
    <Router>
   <React.Fragment>
    <Navbar />
    <div className="container">
    <Switch>
      <Route exact path="/" component={Index} />

    </Switch>
    </div>
    </React.Fragment>
   </Router>
  );
}

export default App;
