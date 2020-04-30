import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';
import { Repositories } from '../pages/Repositories';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/repository/:repository+" component={Repositories} />
  </Switch>
);

export default Routes;
