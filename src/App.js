import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Store from 'store'
//style
import 'assets/style';

//page
import Home from 'views/Home';
import Login from 'views/Login';
import { AuthRoute, PrivateRoute } from "./middleware";

const Index = () => {
  return (
    <Store>
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/" component={ Home } />
          <AuthRoute exact path="/login" component={ Login } />
        </Switch>
      </BrowserRouter>
    </Store>
  );
}

export default Index;
