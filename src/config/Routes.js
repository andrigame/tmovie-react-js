import { Route, Routes as Switch } from 'react-router-dom';

import Catalog from './../pages/Catalog';
import Detail from '../pages/detail/Detail';
import Home from './../pages/Home';
import React from 'react';

const Routes = () => {
  return (
    <Switch>
      <Route 
        path='/:category/search/:keyword'
        element={<Catalog/>}
      />
      <Route 
        path='/:category/:id'
        element={<Detail/>}
      />
      <Route 
        path='/:category'
        element={<Catalog/>}
      />
      <Route 
        exact
        path='/'
        element={<Home/>}
      />
      <Route 
        exact
        path='/home'
        element={<Home/>}
      />
    </Switch>
  );
}

export default Routes;
