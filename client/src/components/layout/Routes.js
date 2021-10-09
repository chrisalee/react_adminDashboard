import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard';
import Customers from '../../pages/Customers';

const Routes = () => {
    return (
        <Switch>
            <Route path = '/'          component = { Dashboard }  exact />
            <Route path = '/customers' component = { Customers } />
        </Switch>
    )
}

export default Routes
