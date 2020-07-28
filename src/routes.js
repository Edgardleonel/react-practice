import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Templates from './templates';



function Routes() {
  return ( 
    <>
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Templates}></Route>
        </Switch>
    </BrowserRouter>
    </>
  );
}

export default Routes;