import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom"
import Feeling from '../Feeling/Feeling.jsx';
import Understanding from '../Understanding/Understanding.jsx';
import Support from '../Support/Support.jsx';
import Comments from '../Comments/Comments.jsx';
import Review from '../Review/Review.jsx';
import Success from '../Success/Success.jsx';
import Edit from '../Edit/Edit.jsx';
import AppBar from '@material-ui/core/AppBar';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <AppBar className="App-header" position="static">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
            <ul className='nav'>
            <li><Link to="/">Home</Link></li>
            </ul>
          </AppBar>
        <Route exact path="/" component={Feeling} />
        <Route path="/2" component={Understanding} />
        <Route path="/3" component={Support} />
        <Route path="/4" component={Comments} />
        <Route path="/5" component={Review} />
        <Route path="/success" component={Success} />
        <Route path="/edit" component={Edit} />
        </div>
      </Router>
    );
  }
}

export default App;
