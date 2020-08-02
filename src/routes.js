import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Page from './edega/meusPedidos';



function Routes() {
  return ( 
    <>
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Page}></Route>
        </Switch>
    </BrowserRouter>
    </>
  );
}

export default Routes;