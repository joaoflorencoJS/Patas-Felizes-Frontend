import React from 'react';
import { Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import MyRoute from './MyRoutes';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Info from '../pages/Info';
import Adoption from '../pages/Adoption';
import Denunciation from '../pages/Denunciation';
import Post from '../pages/Post';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Home} />
      <MyRoute exact path="/login" component={Login} isClosedLoggedIn />
      <MyRoute exact path="/register" component={Register} isClosedLoggedIn />
      <MyRoute exact path="/info" component={Info} isClosed />
      <MyRoute exact path="/adote" component={Adoption} isClosed />
      <MyRoute exact path="/denuncie" component={Denunciation} isClosed />
      <MyRoute exact path="/post/:id/show" component={Post} isClosed />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
