import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {Home,Film} from '../pages';




const Routes: React.FC = () => (
  <Switch>
    <Route path="/home" component={Home} />
    <Route path="/film/:cardId" component={Film}/>
    <Redirect  to ="/home" />
  </Switch>

);

export default Routes;