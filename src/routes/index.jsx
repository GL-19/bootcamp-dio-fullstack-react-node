import React from 'react';
import {  BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, SearchResult } from '../pages';


export default function Routes() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/search">
            <SearchResult />
          </Route>
        </Switch>
    </BrowserRouter>
  )
}
