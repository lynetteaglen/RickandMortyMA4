import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


import App from './App';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import CardSpecific from './pages/CardSpecific';

ReactDOM.render(
    <Router>
        <App>
            <Switch>
                <Route path="/" exact component={Homepage} />
                <Route path="/about" exact component={About} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/card-specific/:id" exact component={CardSpecific} />
            </Switch>
        </App>
    </Router>,
    document.getElementById('root'));



