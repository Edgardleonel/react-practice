import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './header';



function Routes2() {
  return ( 
    <>
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}></Route>
        </Switch>
    </BrowserRouter>
    </>
  );
}

export default Routes2;