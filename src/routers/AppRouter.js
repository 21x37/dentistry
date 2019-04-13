import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router-dom';
import Index from '../components/Index';
import Contact from '../components/contact/Contact';
import About from '../components/about/About';


const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
           <Switch>
                <Route path='/' component={Index} exact={true}/>
                <Route path='/contact' component={Contact} exact={true}/>
                <Route path='/about' component={About} exact={true}/>
           </Switch> 
        </div>
    </Router>
)

export default AppRouter;