import React from 'react';
import { Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import MyRoute from './MyRoutes';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Info from '../pages/Info';
import Adoption from '../pages/Adoption';
import Post from '../pages/Post';
import Ong from '../pages/Ong';
import User from '../pages/User';
import MyDonations from '../pages/MyDonations';
import OwnerPost from '../pages/OwnerPost';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Home} />
      <MyRoute exact path="/login" component={Login} isClosedLoggedIn />
      <MyRoute exact path="/register" component={Register} isClosedLoggedIn />
      <MyRoute exact path="/info" component={Info} isClosed />
      <MyRoute exact path="/adote" component={Adoption} isClosed />
      <MyRoute exact path="/post/:id" component={Post} isClosed />
      <MyRoute exact path="/ong/:id" component={Ong} isClosed />
      <MyRoute exact path="/user/:id" component={User} isClosed />
      <MyRoute
        exact
        path="/ong/:id/minhas-doacoes"
        component={MyDonations}
        isClosedForUser
        isClosed
      />
      <MyRoute
        exact
        path="/user/:id/minhas-doacoes"
        component={MyDonations}
        isClosedForUser
        isClosed
      />
      <MyRoute
        exact
        path="/user/:id/post/:postId"
        component={OwnerPost}
        isClosedForUser
        isClosed
      />
      <MyRoute
        exact
        path="/ong/:id/post/:postId"
        component={OwnerPost}
        isClosedForUser
        isClosed
      />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
