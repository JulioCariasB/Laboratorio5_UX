import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import Home from './Home';
import Students from './Students';
import Classes from './Classes';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <Route path="/" component={Home} />
            <Route path="/students" component={Students} />
            <Route path="/Classes" component={Classes} />

            <ul>
                <li>
                    <Link to = "/">Home</Link>
                </li>
                <li>
                    <Link to = "/Students">Students</Link>
                </li>
                <li>
                    <Link to = "/Classes">Classes</Link>
                </li>
            </ul>    
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
