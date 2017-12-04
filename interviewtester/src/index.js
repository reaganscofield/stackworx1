import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Task from './Task';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route,  Switch} from 'react-router-dom';


ReactDOM.render(<Router>
                <Switch>
                  <Route exact path='/' component={App}></Route>
                  <Route exact path='/task' component={Task}></Route>
                </Switch>
              </Router>

  , document.getElementById('root'));
registerServiceWorker();
