import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './header';

// import { Container } from './styles';

function Routes() {
  return ( 
    <>
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Header}></Route>
        </Switch>
    </BrowserRouter>
    </>
  );
}

export default Routes;