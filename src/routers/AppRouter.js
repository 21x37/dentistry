import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router-dom';
import Index from '../components/Index';


const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
           <Switch>
                <Route path='/' component={Index} exact={true}/>
           </Switch> 
        </div>
    </Router>
)

export default AppRouter;